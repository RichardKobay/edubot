<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Welcome from "@/components/home/Welcome.vue";
</script>

<template>
  <div class="grid sm:grid-cols-2 grid-cols-1">

    <header>
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="125" height="125"/>

      <div class="wrapper">
        <Welcome msg="Bienvenido"/>

        <nav>
          <RouterLink to="/exam">Examen</RouterLink>
          <RouterLink to="/chat">Chat</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView/>
  </div>

</template>