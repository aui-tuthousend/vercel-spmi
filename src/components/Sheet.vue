<script setup>
import {ref, watchEffect} from 'vue';
import {useRoute} from "vue-router";
import Sheets from "@/components/Sheets.vue"
import CustomSelect from "@/components/comp/custom-select.vue";

const route = useRoute();
const periode = ref(route.params.periode);
const jurusan = ref(route.params.jurusan);
document.title = `${jurusan.value} ${periode.value}`

const standarData = ref([]);
const loading = ref(true);
const tipe = ['input', 'proses', 'output'];
const current = ref(tipe[0]);

const tipeSheet = ['pendidikan', 'penelitian', 'pengabdian'];
const currentSheet = ref(tipeSheet[0]);




watchEffect(async ()=> {
  loading.value = true;
  let response = await fetch(`https://spmi.annafilah.id/api/getPenetapan/${jurusan.value}/${periode.value}/${currentSheet.value}/${current.value}`);
  standarData.value = await response.json();

  loading.value = false;
  // console.log(standarData)
})

const refreshPage = () => {
  location.reload();
};

</script>


<template>
  <div class="bodii">
    <h2 class="" v-once>Tipe:</h2>
    <custom-select :data="tipeSheet" :wid="20" @response="(data) => currentSheet = data"/>
    <br>
    <br>
    <div class="row">
    <template v-for="t in tipe">
      <div class="col-1">
      <input type="radio"
             :id="t"
             :value="t"
             v-model="current">
      <label :for="t" style="margin-right: 0.5rem;">{{t}}</label>
      </div>
    </template>
    </div>
    <div v-if="standarData ==='Null'">
      Belum ada data :)
    </div>
    <div v-else class="dt">
      <Sheets
          :data="standarData"
          :refresh="refreshPage"/>
    </div>
  </div>

</template>


<style scoped>
.bodi{
  padding: 4% 0 0 2%;
  width: 100vw;
  overflow-x: hidden;
  //height: 100vh; overflow-y: auto;
  background: white;
  color: black;
}

button {
  width: 5rem;
  height: 1rem;
}


.dt{
  width: 100vw;
  overflow-x: hidden;
  padding: 0% 5% 3% 0%;
}


.tipe{
  width: 40%;
}

</style>
