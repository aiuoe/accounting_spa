<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useLabelStore, useStore } from "@/stores/store";

const store = useStore();
const labelStore = useLabelStore();
const { labels } = storeToRefs(labelStore);
const form = ref({
  label_id: "",
  type_id: "",
  amount: null,
  note: "",
});

const onSubmit = () => {
  store.createJournal(form.value);
  form.value.type_id = "";
  form.value.label_id = "";
  form.value.amount = null;
  form.value.note = "";
  store.closeModal();
  store.fetchTotalIncome(true);
  store.fetchTotalExpense(true);
  store.fetchTotalTithe(true);
};
</script>

<template>
  <Dialog
    header="Agregar registro"
    v-model:visible="store.displayModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <form
      ref="formEle"
      @submit.prevent="onSubmit"
      class="flex flex-column justify-content-center p-3"
    >
      <Dropdown
        class="mb-3"
        v-model="form.type_id"
        :options="store.types"
        optionLabel="name"
        optionValue="id"
        placeholder="Tipo"
      />
      <Dropdown
        class="mb-3"
        v-model="form.label_id"
        :options="labels"
        optionLabel="name"
        optionValue="id"
        placeholder="Etiqueta"
      />
      <InputNumber
        class="mb-3"
        v-model="form.amount"
        placeholder="Monto"
        mode="decimal"
        locale="en-US"
        :minFractionDigits="2"
      />
      <InputText type="text" placeholder="Nota" v-model.trim="form.note" />
    </form>
    <template #footer>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        @click="store.closeModal"
        class="p-button-text"
      />
      <Button label="Guardar" icon="pi pi-check" @click="onSubmit" autofocus />
    </template>
  </Dialog>
</template>
