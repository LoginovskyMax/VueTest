<script setup lang="ts">
import { ref } from 'vue'
import MultiSelect from 'primevue/multiselect'

const selectedCities = ref('')

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

</script>

<template>
  <div class="select">
    <MultiSelect
      v-model="selectedCities"
      :options="cities"
      option-label="name"
      placeholder="Select Cities"
      class="w-full md:w-20rem"
    />
    <i
      v-if="selectedCities"
      class="pi pi-times "
      @click="selectedCities=''"
    />
  </div>
</template>

<style scoped>
.select{
  position: relative;
}
.pi-times{
    position: absolute;
    top:50%;
    transform: translate(-50px,-50%);
    cursor: pointer;
  }

</style>
