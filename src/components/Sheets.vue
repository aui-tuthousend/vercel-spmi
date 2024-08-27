<script setup>
import {computed, defineAsyncComponent, ref} from "vue";
import CustomButton from "@/components/comp/custom-button.vue";
import CustomSelect from "@/components/comp/custom-select.vue";
const Modal = defineAsyncComponent(({
  loader: () => import('../components/Modal.vue'),
}));
const props = defineProps({
  data: Object, refresh: Function
});

const formData = ref([])
const dataEval = ref([])
const roleUser = ['pelaksanaan', 'superUser'];
const role = ref(roleUser[0]);
const search = ref('');

const standars =computed(() => {
  return props.data.filter (stand =>
    stand.standar.toLowerCase().includes(search.value.toLowerCase())
  )
})

const adjusment = ['melampaui', 'mencapai', 'belum mencapai','menyimpang'];

const save = (idIndikator, bukti, idP) => {
  const newData = {idIndikator: idIndikator, bukti: bukti, idPelaksanaan: idP };
  const index = formData.value.findIndex(item => item.id === idIndikator);
  if (index !== -1) {
    formData.value.splice(index, 1, newData);
  } else {
    formData.value.push(newData);
  }
};

const saveEval = (idBuktiPelaksanaan, komenEval, adjusment, idP) => {
  if (komenEval === ''){
    alert("komentar harap di isi🗿");
  }else {
    const newData = { idBuktiPelaksanaan: idBuktiPelaksanaan, komentarEvaluasi: komenEval, adjusment: adjusment, idEvaluasi:idP };
    const index = dataEval.value.findIndex(item => item.id === idBuktiPelaksanaan);
    if (index !== -1) {
      dataEval.value.splice(index, 1, newData);
    } else {
      dataEval.value.push(newData);
    }

    console.log(dataEval)
  }
};

const submitData = () => {
  if (role.value === 'pelaksanaan'){
    axios.post('https://spmi.annafilah.id/api/submitPelaksanaan', {data: formData.value})
        .then(response => {
          console.log('Data submitted successfully:', response.data);
          props.refresh();
        })
        .catch(error => {
          console.error('Error submitting data:', error.response.data);
        });
  } else {
    axios.post('https://spmi.annafilah.id/api/submitEvaluasi', {data: dataEval.value})
        .then(response => {
          console.log('Data submitted successfully:', response.data);
          props.refresh();
        })
        .catch(error => {
          console.error('Error submitting data:', error.response.data);
        });
  }
}


const popupTriggers = ref(false)
const selectedIndicator = ref(null)
const tipeLink = ref(null);
const togglePopup = () => {
  popupTriggers.value = !popupTriggers.value
}

const openPopup = (indicator, tipe) =>{
  selectedIndicator.value = indicator;
  tipeLink.value = tipe;
  togglePopup();
}


// document.addEventListener("contextmenu", function (event){
//     alert("gaboleh klik kanan ea");
//     event.preventDefault();
// })
</script>


<template>
  <br>
  <h2 class="" v-once>Role: </h2>

  <custom-select :data="roleUser" :wid="10" @response="(data) => role = data"/>
  <br>
  <br>
  <custom-button v-once @click="submitData">Save</custom-button>
  <br>

  <input v-model="search" class="w-auto" placeholder="search standar">

  <div class="table">
  <table :class="role">
    <thead>
    <tr>
      <th colspan="3"><h4 class="font-poppin">Penetapan</h4></th>
      <th colspan="2"><h4 class="font-poppin">Pelaksanaan</h4></th>
      <th colspan="5" v-if="role === 'superUser'"><h4 class="font-poppin">Evaluasi</h4></th>
    </tr>
    <tr>
      <th rowspan=""><h5 class="font-poppin">Standar</h5></th>
      <th><h5 class="font-poppin">Indicator</h5></th>
      <th><h5 class="font-poppin">Target</h5></th>
      <th><h5 class="font-poppin">Komentar</h5></th>
      <th><h5 class="font-poppin">Link Bukti</h5></th>
      <template v-if="role === 'superUser'">
        <th colspan="2"><h5 class="font-poppin">Komentar</h5></th>
        <th colspan="2"><h5 class="font-poppin">Adjusment</h5></th>
        <th><h5 class="font-poppin">Link Bukti</h5></th>
      </template>
    </tr>
    </thead>
    <tbody>
    <template v-for="(standar, index) in standars" :key="index">
      <tr>
        <td :rowspan="standar.indicators.length+1">{{ standar.standar }}</td>
      </tr>
      <tr v-for="indicator in standar.indicators">
        <td>{{ indicator.indicator }}</td>
        <td>{{ indicator.target }}</td>

        <td>
          <p v-if="role === 'superUser'">{{indicator.bukti}}</p>
          <textarea v-else v-model="indicator.bukti" @input="save(indicator.id, indicator.bukti, indicator.idPelaksanaan)"></textarea>
        </td>
        <td>
          <button
              v-if="indicator.idBukti !== '' "
              class="pop"
              @click="openPopup(indicator.idBukti, 'Pelaksanaan')">Link
          </button>
        </td>


        <template v-if="role === 'superUser'">
          <td colspan="2">
            <textarea v-model="indicator.evaluasi"></textarea>
          </td>
          <td colspan="2">
            <select v-model="indicator.adjusment" @change="saveEval(indicator.idBukti, indicator.evaluasi, indicator.adjusment, indicator.idPelaksanaan)" >
              <option>{{indicator.adjusment}}</option>
              <option v-for="a in adjusment">{{a}}</option>
            </select>
          </td>
          <td>
            <button
                v-if="indicator.idEvaluasi !== '' "
                class="pop"
                @click="openPopup(indicator.idEvaluasi, 'Evaluasi')">Link
            </button>
          </td>
        </template>
      </tr>
    </template>

    </tbody>
  </table>
  </div>

  <Modal v-if="popupTriggers"
         :togglePopup="togglePopup"
         :idBukti="selectedIndicator"
         :tipe="tipeLink"
         :popupTriggers="popupTriggers"
         :role="role">
  </Modal>
</template>



<style scoped>

.table{
  overflow-x: auto;
  padding-right: 2%;
}

.table::-webkit-scrollbar{
  display: none;
}

.superUser {
  width: 120vw;
  margin-top: 1rem;
}

.pelaksanaan{
  width: 92vw;
  margin-top: 1rem;
}

thead th {
  background-color: #dda15e;
  color: #283618;
}

textarea {
  width: 100%;
  box-sizing: border-box;
}

.pop {
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


</style>
