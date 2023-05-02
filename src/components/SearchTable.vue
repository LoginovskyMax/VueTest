<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext';
import Rating from 'primevue/rating';
import { IProduct, IResponse } from './model';

let products:IProduct[] = [];

const filteringProducts = ref<IProduct[]>([]);

const selectedColumns = ref(['Category','Image', 'Rating']);

const filteredByColumns = ref(['Category',"Brand"]);

const filteredColumns = ref(['Category',"Brand"]);

const columns = ref(['Category','Image', 'Rating']);

const searchString = ref('');

const showFIlterMenu = ref(false);

function search(str:string){
 
   let find =  products.filter(item=>{
    if(filteredByColumns.value.length === 2){
      return item.brand.toLowerCase().includes(str.toLowerCase()) ||
           item.category.toLowerCase().includes(str.toLowerCase()) 
    }
    switch(filteredByColumns.value[0]){
      case 'Category': 
           return item.category.toLowerCase().includes(str.toLowerCase());
       
      case 'Brand' : 
           return item.brand.toLowerCase().includes(str.toLowerCase());
         
    }
  })

  if(find){
    filteringProducts.value = find
  }else{
    filteringProducts.value = products
  }
}

function getProducts(){
  axios.get<IResponse>('https://dummyjson.com/products')
      .then((response) => {
          products = response.data.products
          filteringProducts.value = products
       })
}
onMounted(()=>{
  getProducts()
})

</script> 

<template>
  <div class="header">
    <MultiSelect
      v-if="showFIlterMenu"
      v-model="filteredByColumns"
      :options="filteredColumns"
      placeholder="Select where find"
      class="w-full md:w-20rem"
    />
    <div class="p-inputgroup flex-1 header__search">
      <Button
        icon="pi pi-sliders-v"
        severity="success"
        @click="showFIlterMenu=!showFIlterMenu"
      />
      <InputText
        v-model="searchString"
        placeholder="Search"
        @keyup.enter="search(searchString)"
      />
      <Button
        label="Search"
        @click="search(searchString)"
      />
    </div>
    <MultiSelect
      v-model="selectedColumns"
      :options="columns"
      placeholder="Select column"
      class="header__select"
    />
  </div>

  <DataTable
    :value="filteringProducts"
    paginator
    :rows="5"
    table-style="min-width: 50rem"
  >
    <Column
      field="brand"
      header="Brand"
    />
    <Column
      v-if="selectedColumns.find(item=>item==='Category')"
      field="category"
      header="Category"
    />
    <Column
      v-if="selectedColumns.find(item=>item==='Rating')"
      header="Rating"
    >
      <template #body="slotProps">
        <Rating
          :model-value="slotProps.data.rating"
          readonly
          :cancel="false"
        />
      </template>
    </Column>
    <Column
      v-if="selectedColumns.find(item=>item==='Image')"
      header="Image"
    >
      <template #body="slotProps">
        <img
          :src="slotProps.data.thumbnail"
          :alt="slotProps.data.image"
          class="img"
          width="100"
        >
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>
.header{
  display: flex;
  width: 100%;
}
.header__search{
  width: 80%;
}
.header__select{
  width: 20%;
}
</style>
