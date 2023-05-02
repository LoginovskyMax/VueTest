<script setup lang="ts">
import InputText from './components/InputText.vue'
import DateComp from './components/DateComp.vue'
import SelectComp from './components/SelectComp.vue'
import DataTableComp from './components/DataTableComp.vue'
import SearchTable from './components/SearchTable.vue'
</script>

<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>
  <InputText />
  <DateComp />
  <SelectComp />
  <DataTableComp />
  <SearchTable />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
