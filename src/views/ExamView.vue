<script setup>
import axios from "axios";
import {ref, onMounted} from "vue";

onMounted(() => {
  getPreguntas()
})

const preguntasString = ref();
const preguntasArray = ref([]);
const respuestas = ref(Array(preguntasArray.value.length).fill(''));
const generandoExamen = ref(true);
const errorGenerarExamen = ref(false);

const getPreguntas = async()=> {
  try {
    const response = await axios.get("http://localhost:8080/get-test")
    preguntasString.value = response.data;
    preguntasArray.value = JSON.parse(preguntasString.value.response);
    generandoExamen.value = false;
  } catch (error) {
    console.error("Error al obtener las preguntas" + error);
    errorGenerarExamen.value = true;
  }

  return{
    preguntas: preguntasString,
    preguntasArray: preguntasArray
  }
}

const submitExamen = () => {
  console.log('Respuestas del usuario:', respuestas.value);
};
</script>

<template>
  <div>
    <h2 class="text-green-500 text-5xl">Examen</h2>

    <p v-if="generandoExamen">Generando examen...</p>
    <form v-else @submit.prevent="submitExamen">
      <div v-for="(pregunta, index) in preguntasArray" :key="index">
        <h3>{{ pregunta['pregunta_' + (index + 1)] }}</h3>
        <div v-for="(respuesta, i) in pregunta.respuestas" :key="i">
          <label>
            <input type="radio" :name="'respuesta_' + index" :value="respuesta" v-model="respuestas[index]">
            {{ respuesta }}
          </label>
        </div>
      </div>
      <button type="submit">Enviar examen</button>
    </form>

    <h2 v-if="errorGenerarExamen">Error al generar el exámen, favor de actualizar la página</h2>
  </div>
</template>