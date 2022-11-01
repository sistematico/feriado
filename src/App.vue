<script setup>
import { ref, onMounted } from 'vue'
// import Card from './components/Card'
import { afterDates, weekDay, diffDays, formatDate } from './logic'

const feriado = ref()
const data = ref()
const dia = ref()
const imagem = ref()
const diff = ref()
const wikipedia = ref('https://pt.wikipedia.org/wiki/Portal:Hist%C3%B3ria/Neste_dia')

onMounted(() => {
  fetch('feriados.json', { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => data.feriados)
    .then((feriados) => {
      const f = afterDates(feriados)
      let icon = f.name != 'Finados' ? '🎉' : '✝️'
      feriado.value = f.name
      wikipedia.value = `https://pt.wikipedia.org/wiki/${f.name}`
      data.value = formatDate(f.date)
      dia.value = weekDay(f.date)
      diff.value = diffDays(f.date) == 0 ? `${icon} é hoje!` : 'Faltam ' + diffDays(f.date) + ' dias.'
      imagem.value = f.image ? f.image : 'party.svg'
    })
})
</script>

<template>
  <a :href="wikipedia" target="_blank" class="flex flex-col items-center bg-white rounded-lg border shadow-lg md:flex-row md:w-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="imagem" :alt="feriado" />
    <div class="w-full text-center p-4 leading-normal">
      <h3 class="mb-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{{ feriado }}</h3>
      <h6 class="-mt-3 mb-2 text-sm md:text-sm italic tracking-tight text-white-800/25 dark:text-white/25">{{ data }}</h6>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ dia }}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ diff }}</p>
    </div>
  </a>
  <footer class="absolute bottom-0 m-4">
    <p>Projeto desenvolvido com 💛 por <a href="https://lucasbrum.net" target="_blank">Lucas Saliés Brum</a></p>
    <p>Fontes no <a href="https://github.com/sistematico/feriado" target="_blank">Github</a></p>
  </footer>
</template>
