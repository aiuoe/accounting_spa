<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useLabelStore, useStore } from "@/stores/store";
import { ref, computed } from "vue";

const store = useStore();
const { createLabel } = useLabelStore();
const form = ref({
  icon: "",
  color: "",
  background: "",
  name: "",
});

const background = computed(() => `#${form.value.background}`);
const color = computed(() => `#${form.value.color}`);
const icon: any = computed(() => form.value.icon);

const onSubmit = () => {
  createLabel(form.value);
  form.value.icon = "";
  form.value.color = "";
  form.value.background = "";
  form.value.name = "";
  store.closeModal();
};
</script>

<template>
  <Dialog
    header="Crear categoria"
    v-model:visible="store.displayModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <form
      @submit.prevent="onSubmit"
      class="flex flex-column justify-content-center p-3"
    >
      <div class="flex justify-content-start">
        <div class="flex flex-column mr-3">
          <label for="icon" class="mb-3 text-base font-bold">Color</label>
          <ColorPicker class="mb-3" v-model="form.color" :inline="true" />
        </div>
        <div class="flex flex-column">
          <label for="icon" class="mb-3 text-base font-bold">Background</label>
          <ColorPicker class="mb-3" v-model="form.background" :inline="true" />
        </div>
      </div>
      <InputText
        class="mb-3"
        type="text"
        placeholder="Icono"
        v-model.trim="form.icon"
      />
      <InputText type="text" placeholder="Nombre" v-model.trim="form.name" />
    </form>
    <template #footer>
      <Chip
        class="p-3 border-radius-lg mr-8"
        :icon="icon"
        :style="{ background: background, color: color }"
        :label="form.name"
      />
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
