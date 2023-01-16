<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useStore } from "@/stores/store";
import Card from "primevue/card";
import Chart from "primevue/chart";
import { ref, computed } from "vue";

const store = useStore();
store.fetchTotalIncome();
store.fetchTotalExpense();
store.fetchTotalTithe();

const totalTithe = computed(() => store.totalTithe);
const totalIncome = computed(() => store.totalIncome);
const totalExpense = computed(() => store.totalExpense);

const chartData = ref({
  labels: ["Gastos", "Ingresos", "Diezmos"],
  datasets: [
    {
      data: [totalExpense, totalIncome, totalTithe],
      backgroundColor: ["#ff6259", "#4cd07d", "#609af8"],
      hoverBackgroundColor: ["#ff6259", "#4cd07d", "#609af8"],
    },
  ],
});

const lightOptions = ref({
  plugins: {
    legend: {
      labels: {
        color: "#495057",
      },
    },
  },
});

</script>

<template>
  <Card class="w-4 mb-5">
    <template #content>
      <div>
        <Chart type="doughnut" :data="chartData" :options="lightOptions" />
      </div>
    </template>
  </Card>
</template>
