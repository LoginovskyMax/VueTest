<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext';

const data = ref('')

const edit = ref(false)

function onBlur() {
   edit.value = true
   if(!data.value){
    edit.value = false
   }
   
}

function getTitle(url:string){
  const title = url.match(/(https?:\/\/)?(www.)?(\w+)\.\w+/i);
  if(title !== null){
    return title[3]
  }
}

function openURL(url:string){
  window.open(url)
}

</script> 

<template>
  <p>https://github.com/</p>

  <div class="card">
    <Button
      v-if="edit"
      :label="getTitle(data)"
      class="p-button-link"
      @click="openURL(data)"
    />
    <InputText
      v-else
      v-model="data"
      placeholder="https"
      @blur="onBlur"
    />
    <i
      v-if="edit"
      class="pi pi-pencil "
      @click="edit=false"
    />
  </div>
</template>

<style scoped>
.card{
  display: flex;
  gap: 20px;
  align-items: center;
}
.pi-pencil{
  cursor: pointer;
}
</style>
