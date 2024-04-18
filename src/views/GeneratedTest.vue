<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router/index.js";
import Swal from 'sweetalert2'

const topics = ref("")
const generatedTest = ref();
const testExample = ref([
  {
    pregunta: "pregunta_1",
    respuestas: [
      "respuesta_01",
      "respuesta_02",
      "respuesta_03",
      "respuesta_04",
    ]
  },
  {
    pregunta: "pregunta_2",
    respuestas: [
      "respuesta_01",
      "respuesta_02",
      "respuesta_03",
      "respuesta_04",
    ]
  },
  {
    pregunta: "pregunta_30",
    respuestas: [
      "respuesta_01",
      "respuesta_02",
      "respuesta_03",
      "respuesta_04",
    ]
  }
])
const messages = ref([])
const selectedAnswers = ref([])
const userResponses = ref([])
const beforeTest = ref(true)
const testFailed = ref(false)

onMounted(() => {
  const route = useRoute();
  topics.value = route.query.topics;
  generateTest()
})

const generateTest = () => {
  const msg = {
    role: "system",
    content: "A partir de ahora eres un profesor de POO en lenguaje de programación de java. QUEDA ESTRICTAMENTE PROHIBIDO HABLAR DE TEMAS QUE NO TENGAN QUE VER CON PROGRAMACIÓN ORIENTADA A OBJETOS. TE PUEDES SALIR PARA EXPLICAR TEMAS DE PROGRAMACIÓN, PERO FUERA DE LA PROGRAMACIÓN QUEDA PROHIBIDO HABLAR"
  }

  const msg2 = {
    role: "user",
    content: "un profesor de POO me dió el siguiente temario para estudiar y ya lo estudié"
  }

  const msg3 = {
    role: "user",
    content: topics.value
  }

  const msg4 = {
    role: "system",
    content: "Genera un exámen de 30 PREGUNTAS de opción múltiple (4 opciones) para FPOO con los temas que se te dieron en el siguiente formato de JSON: " + JSON.stringify(testExample.value)
  }

  messages.value.push(msg)
  messages.value.push(msg2)
  messages.value.push(msg3)
  messages.value.push(msg4)

  sendReq2()
}


function returnToMainTest () {
  location.href = "/exam"
}

const sendReq2 = async () => {
  try {
    console.log("mandando request")
    const model = "gpt-3.5-turbo";

    const finalReq = {
      "model": model,
      "messages": messages.value
    };


    const response = await axios.post('http://localhost:8080/request', {
      prompt: JSON.stringify(finalReq)
    });

    beforeTest.value = false
    generatedTest.value = JSON.parse(response.data.response)
  } catch (error) {
    testFailed.value = true
    console.error('Error sending request:', error);
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Hubo un error al generar el exámen, favor de actualizar la página",
      footer: '<a href="/exam">VOLVER AL EXAMEN PRINCIPAL</a>'
    })
    location.reload()
  }
}

const submitForm = () => {
  if (selectedAnswers.value.length !== generatedTest.value.length) {
    alert("Por favor, responde todas las preguntas antes de enviar el formulario.");
    return;
  }

  for (let i = 0; i < generatedTest.value.length; i++) {
    userResponses.value.push({
      pregunta: generatedTest.value[i].pregunta,
      respuesta: selectedAnswers.value[i]
    });
  }
  router.push({path: '/chat', query: {userResponses: JSON.stringify(userResponses.value)}})
}

</script>

<template>
  <h1 class="font-bold text-5xl text-center">Examen</h1>
  <div v-if="beforeTest" class="text-center">
    <h2 class="text-3xl font-bold">Generando examen</h2>
    <div
        class=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
    </div>
  </div>
  <h2 v-if="testFailed" class="text-3xl font-bold">Ha ocurrido un error al generar el exámen, favor de actualizar la
    página</h2>
  <form @submit.prevent="submitForm" v-if="!beforeTest">
    <div v-for="(pregunta, index) in generatedTest" :key="index" class="mb-5">
      <p class="text-xl mb-2">{{ index + 1 }}. {{ pregunta.pregunta }}</p>
      <div v-for="(respuesta, rIndex) in pregunta.respuestas" :key="rIndex">
        <input type="radio" :id="'respuesta_' + index + '_' + rIndex" :value="respuesta"
               v-model="selectedAnswers[index]" required>
        <label class="p-2" :for="'respuesta_' + index + '_' + rIndex">{{ respuesta }}</label>
      </div>
      <hr>
    </div>
    <hr class="border-emerald-800 border-3">
    <button type="submit" class="m-2 text-center bg-green-200 p-4 font-bold mr-auto ml-auto">Enviar respuestas</button>
  </form>
</template>

<style scoped>

</style>