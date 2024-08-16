<script setup>
import {ref, watchEffect} from "vue";
import CustomButton from "@/components/comp/custom-button.vue";
import CustomSelect from "@/components/comp/custom-select.vue";
document.title = "Pilih Sheet";

const message = ref('upload new sheet')
const jurusan = ref('a')
const periode = ref('0')
const per = ref([])
const loading = ref(true);
const jur = ['Teknik Informatika', 'Teknik Elektro', 'Teknik Lingkungan', 'Sistem Informasi'];

watchEffect(async ()=> {
  loading.value = true;
  let response = await fetch(`https://spmi.annafilah.id/api/getPeriode/${jurusan.value}`);
  per.value = await response.json();
  loading.value = false;

  console.log(per)
})

</script>

<template>

  <div class="bodi">
    <div class="c1">
      <div class="c1-1">
        <h1 class="font-rubik">Mode Super User</h1>

        <custom-button>
          <router-link
              to="/import"
              class="custom-router-link"
              :title="message"
          ><h2>+</h2></router-link>
        </custom-button>

      </div>
    </div>

    <div class="c2">
      <h2 class="font-garmond">Pilih Jurusan:</h2>
      <div>

        <custom-select :data="jur" :wid="50" @response="(data) => jurusan = data"/>

        <p v-if="loading">Loading...</p>
        <div v-if="per.length === 0">
          <p v-if="jurusan !== 'a'" :hidden="loading">Sheet dengan jurusan {{ jurusan }} belum ada</p>
        </div>
        <div v-else class="periode">
          <h2 class="font-garmond">Pilih Periode:</h2>

          <div class="row-ai-c">

          <select v-model="periode" class="pilihSheet" required>
            <option v-for="p in per" :value="p.periode">{{ p.periode }}</option>
          </select>
          <!--                {{idS}}-->
          <custom-button>
            <router-link
                :to="{ name: 'Sheet', params: {jurusan: jurusan, periode: periode}}"
                class="custom-router-link">
              <h3>go</h3></router-link>
          </custom-button>
          </div>
        </div>
      </div>

    </div>
  </div>



</template>

<style scoped>
.bodi{
  width: 100vw;
  height: 100vh;
  padding: 3%;
}

.c1{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.c1-1{
  display: flex;
  gap: 1rem;
  align-items: center;
}

.c2{
  /* //display: flex; */
  margin-top: 3rem;
  gap: 1rem;
}

.custom-router-link {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
}

.custom-router-link:hover{
  background: none;
}

.pilihSheet{
  width: 30rem;
}


.periode{
  margin-top: 3rem;
  margin-bottom: 2rem;

  > select{
    width: 40%;
  }
}

</style>
