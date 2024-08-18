<script setup>
import {ref, watch, watchEffect} from "vue";
import {useMagicKeys} from "@vueuse/core";
import CustomLink from "@/components/comp/custom-link.vue";
const {escape} = useMagicKeys()

const props = defineProps({
  togglePopup: Function,
  idBukti: Number,
  role: String,
});

watch(escape, (v) =>{
  if (v){
    props.togglePopup()
  }
})

const link = ref('')
const judulLink = ref('')
const count = ref(0);
const loading = ref(true);

const savedLink = ref([]);

watch(count, async () => {
  try {
    loading.value = true;
    let response = await fetch(`https://spmi.annafilah.id/api/getLink/${props.idBukti}`);
    savedLink.value = await response.json();
    loading.value = false;
    console.log(count.value);
  } catch (error){
    console.error('Error submitting data:', error.response.data);
  }
})

watchEffect(async ()=> {
  loading.value = true;
  let response = await fetch(`https://spmi.annafilah.id/api/getLink/${props.idBukti}`);
  savedLink.value = await response.json();
  loading.value = false;

  console.log(count.value);
})

const addLink = () => {
  if (judulLink.value === '' || link.value === ''){
    alert("judul atau link bukti tidak boleh kosong :)")
    return;
  }
  axios.post('https://spmi.annafilah.id/api/submitLink', {data: {idBukti: props.idBukti, judul_link: judulLink.value, link: link.value}})
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        judulLink.value = '';
        link.value = '';
        count.value++;
      })
      .catch(error => {
        console.error('Error submitting data:', error.response.data);
      });
}
function removeTodo(IdLink) {
  if (confirm("Hapus Link??") === true) {
    axios.post('https://spmi.annafilah.id/api/deleteLink', {idLink: {idL: IdLink}})
        .then(response => {
          console.log('link terhapus:', response.data);
          count.value--;
        })
        .catch(err => {
          console.log('Error menghapus:', err.response.data);
        });
  }
}

const openLink = (link) => {
  window.open(link, "_blank")
}
</script>

<template>
  <div class="popup">
    <div class="popup-inner">
      <slot/>
      <h2 class="lb font-rubik">Link Bukti Pelaksanaan</h2>

      <p v-if="loading">Loading...</p>
      <p v-if="savedLink.length < 1" :hidden="loading">Belum ada Link</p>
      <ul>
        <li v-for="link in savedLink" :key="link.id">
          <custom-link :link="link" :open="openLink" :remove="removeTodo" />
        </li>
      </ul>

      <div v-if="props.role === 'pelaksanaan'" class="addLink">
        <input v-model="judulLink" required placeholder="judul link">
        <input v-model="link" required placeholder="link">
        <button @click="addLink">add</button>
      </div>

      <br>
      <br>
      <button class="popup-close" @click="props.togglePopup" :title="'or press esc to close'">Close</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;

}

.popup-inner{
  position: relative;
  margin-bottom: 10rem;
  background: #FFF;
  padding: 32px;
}

.lb{
  margin-bottom: 1rem;
}

.addLink{
  display: flex;
  width: 100%;
  margin-top: 8%;
}
</style>
