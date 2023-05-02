<script setup lang="ts">
import { ref } from 'vue'
import Calendar from 'primevue/calendar'

const date = ref('')

</script>

<template>
  <label for="date">Date</label>
  <Calendar
    id="date"
    v-model="date"
    show-icon
    time-only
    show-button-bar
  />
  <p v-if="date">
    Your time is : {{ Intl.DateTimeFormat("ru", {
      hour: "numeric",
      minute: "numeric"
    }).format(new Date(date)) }}
  </p>
</template>

<style scoped>

</style>
