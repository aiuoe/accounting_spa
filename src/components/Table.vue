<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useStore } from "@/stores/store.js";
import moment from "moment";
import { computed } from "vue";

const store = useStore();
store.fetchJournals();

const getChipColor = (value: string) => {
  if (value == "Ingreso") return "bg-green-400";
  if (value == "Gasto") return "bg-red-400";
};

const formatDate = (value: string) => moment(value).format("DD/MM/yyyy");
const journals = computed(() => store.getJournals);
</script>

<template>
  <Card>
    <template #title>
      <div class="flex justify-content-between">
        Historial de registros
        <Button
          label="crear"
          icon="pi pi-external-link"
          @click="store.openModal"
        />
      </div>
    </template>
    <template #content>
      <DataTable
        class="px-3 p-datatable-sm"
        :value="journals"
        :paginator="true"
        :rows="5"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        responsiveLayout="scroll"
      >
        <Column field="id" header="#" :sortable="true"></Column>
        <Column field="type_id.name" header="Tipo" :sortable="true">
          <template #body="slotProps">
            <Tag
              :severity="
                slotProps.data.type_id?.name == 'Ingreso' ? 'success' : 'danger'
              "
              :value="slotProps.data.type_id.name"
            />
          </template>
        </Column>
        <Column field="label_id.name" header="Etiqueta" :sortable="true">
          <template #body="slotProps">
            <Chip
              :label="slotProps.data.label_id.name"
              :icon="slotProps.data.label_id.icon"
              :style="{
                background: slotProps.data.label_id.background,
                color: slotProps.data.label_id.color,
              }"
            />
          </template>
        </Column>
        <Column field="amount" header="Monto" :sortable="true"></Column>
        <Column field="note" headerStyle="width: 25em" header="Nota"></Column>
        <Column field="created_at" header="Fecha" :sortable="true">
          <template #body="slotProps">
            {{ formatDate(slotProps.data.created_at) }}
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>
