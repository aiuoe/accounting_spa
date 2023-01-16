import { defineStore } from "pinia";
import axios from "axios";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { CREATE_JOURNAL, FETCH_JOURNALS } from "@/graphql/journal";
import { computed, ref } from "vue";
import type { Journal } from "@/models/journal";
import type { Label } from "@/models/label";
import type { Type } from "@/models/type";
import { CREATE_LABEL, FETCH_LABELS } from "@/graphql/label";
import {
  FETCH_TOTAL_EXPENSE,
  FETCH_TOTAL_INCOME,
  FETCH_TOTAL_TITHE,
} from "./../graphql/journal";
import { FETCH_TYPES } from "@/graphql/type";

export const useStore = defineStore("store", {
  state: () => ({
    journals: [] as Journal[],
    types: [] as Type[],
    displayModal: false,
    totalIncome: "0",
    totalExpense: "0",
    totalTithe: "0",
  }),
  getters: {
    getJournals: (state) => state.journals,
    getDisplayModal: (state) => state.displayModal,
  },
  actions: {
    login: async () => {
      axios
        .post("http://localhost:8000/api/auth/login", {
          email: "devops.ruben@gmail.com",
          password: "secret",
        })
        .then(({ data }: any) => {
          localStorage.setItem("token", data.access_token);
        });
    },
    fetchJournals() {
      const { onResult }: any = useQuery(FETCH_JOURNALS);
      onResult(({ data }: any) => (this.journals = data.journals));
    },
    fetchTypes() {
      const { result }: any = useQuery(FETCH_TYPES);
      this.types = computed(() => result.value?.types.data) as any;
    },
    createJournal(data: any) {
      const { mutate, onDone } = useMutation(CREATE_JOURNAL);
      mutate({
        type_id: parseInt(data.type_id),
        label_id: parseInt(data.label_id),
        amount: parseFloat(data.amount),
        note: data.note,
      });
      onDone(
        ({ data }: any) =>
          (this.journals = [data.upsertJournal, ...this.journals])
      );
    },
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    fetchTotalIncome(isRefetch: boolean = false) {
      const { onResult, refetch } = useQuery(FETCH_TOTAL_INCOME);
      onResult(
        ({ data }: any) => (this.totalIncome = data.totalIncome.toString())
      );

      if (isRefetch) refetch();
    },
    fetchTotalExpense(isRefetch: boolean = false) {
      const { onResult, refetch } = useQuery(FETCH_TOTAL_EXPENSE);
      onResult(
        ({ data }: any) => (this.totalExpense = data.totalExpense.toString())
      );

      if (isRefetch) refetch();
    },
    fetchTotalTithe(isRefetch: boolean = false) {
      const { onResult, refetch } = useQuery(FETCH_TOTAL_TITHE);
      onResult(
        ({ data }: any) => (this.totalTithe = data.totalTithe.toString())
      );
      if (isRefetch) refetch();
    },
  },
});

export const useLabelStore = defineStore("labels", () => {
  const labels = ref<Label[]>([]);
  const setLabels = (_labels: Label[]) => (labels.value = _labels);

  const fetchLabels = () => {
    const { onResult }: any = useQuery(FETCH_LABELS);
    onResult(({ data }: any) => setLabels(data.labels.data));
  };

  const createLabel = (data: any) => {
    const { mutate, onDone } = useMutation(CREATE_LABEL);
    mutate({
      id: data.id,
      name: data.name,
      color: "#" + data.color,
      icon: data.icon,
      background: "#" + data.background,
    });

    onDone(({ data }: any) => setLabels([...labels.value, data.upsertLabel]));
  };

  return {
    labels: computed(() => labels.value),
    fetchLabels,
    createLabel,
  };
});
