<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import Avatar from "primevue/avatar";
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center py-5">
    <Avatar image="/src/assets/photo.jpg" size="xlarge" shape="circle" />
    <span class="mt-3 text-base font-bold roboto"> Ruben Cortez </span>
    <div class="mt-5 w-12">
      <ul
        class="w-12 p-1 list-none flex flex-column justify-content-center align-items-center"
      >
        <li class="w-10 bg-white border-round-3xl text-base mb-3">
          <RouterLink
            active-class="active"
            to="/"
            class="max-h-1rem py-4 px-3 border-round-3xl flex justify-content-center align-items-center text-color no-underline"
          >
            <i class="bi bi-house ml-5 col-2 text-lg"></i>
            <span class="col-10 ml-2 text-lg roboto">Dashboard</span>
          </RouterLink>
        </li>
        <li class="w-10 bg-white border-round-3xl text-base mb-3">
          <RouterLink
            active-class="active"
            to="/categorias"
            class="max-h-1rem py-4 px-3 border-round-3xl flex justify-content-center align-items-center text-color no-underline"
          >
            <i class="bi bi-tags ml-5 col-2 text-lg"></i>
            <span class="col-10 ml-2 text-lg roboto">Categorias</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.roboto
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

.bg-green-custom
    background-color: #008c76

.active
    width: 100%
    height: 100%
    background-color: #008c76
    color: white !important
</style>
