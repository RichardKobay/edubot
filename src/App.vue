<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Welcome from "@/components/home/Welcome.vue";
</script>

<template>
  <div class="grid sm:grid-cols-2 grid-cols-1">
    <header class="h-screen flex items-center">
      <img alt="Vue logo" class="m-7" src="@/assets/logo.svg" width="125" height="125"/>
      <div class="wrapper">
        <Welcome msg="Bienvenido" class="mb-5"/>
        <nav>
          <RouterLink to="/exam" class="bg-green-200 rounded border-2 border-green-300 m-2 p-0.5">Examen</RouterLink>
          <RouterLink to="/chat" class="bg-green-200 rounded border-2 border-green-300 m-2 p-0.5">Chat</RouterLink>
          <RouterLink to="/new-exam" class="bg-green-200 rounded border-2 border-green-300 m-2 p-0.5">examen autogenerado</RouterLink>
        </nav>
      </div>
    </header>
    <div class="overflow-auto h-full">
      <RouterView class=""/>
    </div>
  </div>
</template>