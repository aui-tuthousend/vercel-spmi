<script setup>
import ChooseSheet from "@/components/ChooseSheet.vue";
</script>

<template>
  <main class="bodii">
    <ChooseSheet/>
  </main>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Mono+One&display=swap');

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

  .font-poppin{
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    text-align: center;
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