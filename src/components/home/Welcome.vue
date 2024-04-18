<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="font-bold text-5xl">{{ msg }}</h1>
    <h3 class="font-bold text-2xl">Selecciona una opción</h3>
  </div>
</template>