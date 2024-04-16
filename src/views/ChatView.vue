<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import axios from "axios";

const messages = ref([]);
const userResponses = ref([]);

onMounted(() => {
  const route = useRoute();
  const queryResponses = route.query.userResponses
  if (queryResponses)
    userResponses.value = JSON.parse(queryResponses)

  const msg = {
    role: "user",
    content: "A partir de ahora eres un profesor de POO en lenguaje de programación de java. QUEDA ESTRICTAMENTE PROHIBIDO HABLAR DE TEMAS QUE NO TENGAN QUE VER CON PROGRAMACIÓN ORIENTADA A OBJETOS. TE PUEDES SALIR PARA EXPLICAR TEMAS DE PROGRAMACIÓN, PERO FUERA DE LA PROGRAMACIÓN QUEDA PROHIBIDO HABLAR"
  }
  const msg2 = {
    role: "user",
    content: "Tienes este JSON con las preguntas y las respuestas de un exámen de POO. Tomando en cuenta las respuestas, crea un temario con los temas que faltan por reforzar: " + JSON.stringify(userResponses.value)
  }
  messages.value.push(msg)
  messages.value.push(msg2)

  sendReq()
})

const sendReq = async () => {
  try {
    const model = "gpt-3.5-turbo";
    const finalReq = {
      "model": model,
      "messages": messages.value
    };

    const otherFinalReq = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": "Hello!"
        }
      ]
    }


    const response = await axios.post('http://localhost:8080/request', {
      prompt: JSON.stringify(finalReq)
    });

    console.log(response.data);
    messages.value.push({"role": "professor", "content": response.data});
  } catch (error) {
    console.error('Error sending request:', error);
  }
};

</script>

<template>
  <div>
    <h2 class="text-green-500 text-5xl">Chat</h2>
    <div class="border-green-300 border-2">
      <div v-for="(message, index) in messages" :key="index"
           :class="{'bg-green-200': message.role === 'profesor', 'bg-green-300': message.role === 'user'}" class="">
        <p v-if="message.role === 'professor'">{{ message.content.response }}</p>
      </div>
    </div>
  </div>
</template>

