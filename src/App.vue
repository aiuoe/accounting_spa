<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLabelStore, useStore } from "./stores/store";

const store = useStore();
const { fetchLabels } = useLabelStore();

store.login();
fetchLabels();
store.fetchTypes();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
