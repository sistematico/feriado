<script setup>
import { ref, onMounted } from 'vue'
// import Card from './components/Card'
import { afterDates, weekDay, diffDays, formatDate } from './logic'

const feriado = ref()
const data = ref()
const dia = ref()
const imagem = ref()
const diff = ref()

onMounted(() => {
  fetch("feriados.json", {mode: 'cors'})
    .then((response) => response.json())
    .then((data) => data.feriados)
    .then((feriados) => {
      const f = afterDates(feriados)
      feriado.value = f.name
      data.value = formatDate(f.date)
      dia.value = weekDay(f.date)
      diff.value = diffDays(f.date)
      imagem.value = f.image
    })
})
</script>

<template>
  <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-lg md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <!-- <img class="object-contain w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="imagem" alt=""> -->
      <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" :src="imagem" :alt="feriado">
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ feriado }}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ data }} - {{ dia }} - faltam {{ diff }} dias</p>
      </div>
  </a>
</template>