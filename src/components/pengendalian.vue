<script setup>

</script>

<template>
  <table class="table-responsive table-danger">
    <thead>
    <tr>
      <th colspan="3"><h3 class="font-poppin">Penetapan</h3></th>
      <th rowspan="2"><h3 class="font-poppin">Pelaksanaan</h3></th>
      <th rowspan="2"><h3 class="font-poppin">Evaluasi</h3></th>
      <th colspan="4"><h3 class="font-poppin">Pengendalian</h3></th>
    </tr>
    <tr>
      <th rowspan=""><h3 class="font-poppin">Standar</h3></th>
      <th><h3 class="font-poppin">Indicator</h3></th>
      <th><h3 class="font-poppin">Target</h3></th>
      <th><h3 class="font-poppin w10">Temuan</h3></th>
      <th><h3 class="font-poppin w10">Akar Masalah</h3></th>
      <th><h3 class="font-poppin w10">RTL</h3></th>
      <th><h3 class="font-poppin w10">Pelaksanaan RTL</h3></th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>a</td>
        <td>a</td>
        <td>a</td>
        <td>
          <button :title="''" style="width: 5rem">Hover me</button>
        </td>
        <td>
          <button :title="''" style="width: 5rem">Hover me</button>
        </td>
        <td>
          <textarea></textarea>
        </td>
        <td>
          <textarea></textarea>
        </td>
        <td>
          <textarea></textarea>
        </td>
        <td>
          <textarea></textarea>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.w10{
  width: 10rem;
}
</style>