<script setup>
const props = defineProps({
  link: Object,
  open: Function,
  remove: Function,
})
</script>

<template>
  <div class="ling">
    <p class="judul">{{props.link.judul_link}}</p>
    <button @click="props.open(props.link.link)">link↗️</button>
    <button @click="props.remove(props.link.id)">delete⛔</button>
  </div>
</template>

<style scoped>
.ling{
  display: flex;
  align-items: center;
  gap: 4%;
  margin-bottom: 4%;
}

.judul{
  width: 15rem;
  word-wrap: break-word;
}
</style>