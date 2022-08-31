<script setup>
import { ref, onMounted } from 'vue'
import { afterDates } from './logic'

const feriado = ref()
const data = ref()

onMounted(() => {
  fetch("/feriados.json")
    .then((response) => response.json())
    .then((data) => data.feriados)
    .then((feriados) => {
      feriado.value = afterDates(feriados).name
      data.value = afterDates(feriados).date
    })
})
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ feriado }} - {{ data }}
  </h1>
</template>