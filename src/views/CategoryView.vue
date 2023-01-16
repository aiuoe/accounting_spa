<script setup lang="ts">
import CategoryForm from "@/components/CategoryForm.vue";
import Menu from "@/components/Menu.vue";
import { storeToRefs } from 'pinia';
import { useLabelStore, useStore } from "@/stores/store";

const store = useStore();
const labelStore = useLabelStore();
const { labels } = storeToRefs(labelStore);
</script>

<template>
  <div class="flex min-h-screen">
    <div
      class="lg:w-2"
      style="
        background: #f6f8fc;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      "
    >
      <Menu />
    </div>
    <div class="lg:w-10 p-7">
      <CategoryForm />
      <Card>
        <template #title>
          <div class="flex justify-content-between">
            Nube de etiquetas
            <Button
              label="crear"
              icon="pi pi-external-link"
              @click="store.openModal"
            />
          </div>
        </template>
        <template #content>
          <Chip
            class="mr-3 mb-3"
            v-for="label in labels"
            :label="label.name"
            :icon="label.icon"
            :key="label.id"
            :style="{ background: label.background, color: label.color }"
          />
        </template>
      </Card>
    </div>
  </div>
</template>
