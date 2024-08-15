<script setup>
import ChooseSheet from "@/components/ChooseSheet.vue";
</script>

<template>
  <main>
    <ChooseSheet/>
  </main>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Rubik+Mono+One&display=swap');

.rubik-mono-one-regular {
  font-family: "Rubik Mono One", monospace;
  font-weight: 400;
  font-style: normal;
}

  .font-rubik{
    font-family: "Rubik Mono One", monospace;
  }

  .font-garmond{
    font-family: "EB Garamond", serif;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    /*padding: 3rem;*/

  }

  button{
    border-style: none;
    width: 3rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: center;
    word-wrap: break-word;
    border-radius: 0.4rem;
  }

  .row{
    display: flex;
  }

  .row-ai-c{
    display: flex;
    align-items: center;
    //justify-content: center;
  }
</style>