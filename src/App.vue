<script setup>
import { ref, onMounted } from 'vue'
import { afterDates, weekDay } from './logic'

const feriado = ref()
const data = ref()
const dia = ref()
const imagem = ref()

onMounted(() => {
  fetch("feriados.json", {mode: 'cors'})
    .then((response) => response.json())
    .then((data) => data.feriados)
    .then((feriados) => {
      const f = afterDates(feriados)
      feriado.value = f.name
      data.value = f.date
      dia.value = weekDay(f.date)
      imagem.value = f.image
    })
})
</script>

<template>
<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="imagem" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ feriado }}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ data }} - {{ dia }}</p>
    </div>
</a>
</template>