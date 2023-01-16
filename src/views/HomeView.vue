<script setup lang="ts">
import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";
import Graph from "@/components/Graph.vue";
import Menu from "@/components/Menu.vue";
</script>

<template>
  <div class="flex min-h-screen">
    <div
      class="lg:w-2"
      style="
        background-color: #f6f8fc;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      "
    >
      <Menu />
    </div>
    <div class="lg:w-10 p-7">
      <Graph />
      <Form />
      <Table />
    </div>
  </div>
</template>
