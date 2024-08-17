<script setup>
import {defineAsyncComponent, ref, hydrate} from "vue";

  const show = ref(false);
  const Modal = defineAsyncComponent(({
    loader: () => import('../components/Modal.vue'),
  }));
</script>

<template>
  <div>
    <button @click="show = !show">Modal</button>
    <Modal v-if="show" />
  </div>
</template>

<style scoped>

</style>