<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import axios from "axios";
import router from "@/router/index.js";

const messages = ref([]);
const userResponses = ref([]);
const inputMsg = ref("");
const buttonGenerateTest = ref(false);
const studyTopics = ref("");

onMounted(async () => {
  const route = useRoute();
  const queryResponses = route.query.userResponses
  if (queryResponses)
    userResponses.value = JSON.parse(queryResponses)

  const msg = {
    role: "system",
    content: "A partir de ahora eres un profesor de POO en lenguaje de programación de java. QUEDA ESTRICTAMENTE PROHIBIDO HABLAR DE TEMAS QUE NO TENGAN QUE VER CON PROGRAMACIÓN ORIENTADA A OBJETOS. TE PUEDES SALIR PARA EXPLICAR TEMAS DE PROGRAMACIÓN, PERO FUERA DE LA PROGRAMACIÓN QUEDA PROHIBIDO HABLAR"
  }
  const msg2 = {
    role: "system",
    content: "Tienes este JSON con las preguntas y las respuestas de un exámen de POO. Tomando en cuenta las respuestas, crea un temario con los temas que faltan por reforzar: " + JSON.stringify(userResponses.value)
  }

  messages.value.push(msg)
  messages.value.push(msg2)

  await sendReq()
  studyTopics.value = messages.value[messages.value.length - 1]
  buttonGenerateTest.value = true;
})

const sendMsg = () => {

  const roleReminder = {
    role: "system",
    content: "Recuerda que eres un profesor de POO y no puedes salirte de temas que no tengan que ver con programación"
  }

  const newMsg = {
    role: "user",
    content: inputMsg.value
  }

  messages.value.push(roleReminder)
  messages.value.push(newMsg)

  sendReq()
  inputMsg.value = "";
}

const sendReq = async () => {
  try {
    const model = "gpt-3.5-turbo";

    const finalReq = {
      "model": model,
      "messages": messages.value
    };


    const response = await axios.post('http://localhost:8080/request', {
      prompt: JSON.stringify(finalReq)
    });

    messages.value.push({"role": "assistant", "content": JSON.stringify(response.data.response)});
    console.log(messages.value)
  } catch (error) {
    console.error('Error sending request:', error);
  }
}

const generateNewTest = () => {
  router.push({path: '/new-exam', query: {topics: studyTopics.value.content}});
}

const formatMessage = (content) => {
  return content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
}

</script>

<template>
  <div class="m-2">
    <h2 class="font-bold text-5xl m-5 text-center">Chat</h2>
    <div class="">
      <div v-for="(message, index) in messages" :key="index">
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2" v-if="message.role === 'assistant'">
          <p v-html="message.content"></p>
        </div>
        <div class="bg-green-100 border-r-4 border-green-500 text-green-700 p-2" v-if="message.role === 'user'">
          <p v-html="message.content"></p>
        </div>
      </div>
      <div class="flex border-2 border-emerald-800 p-1">
        <input type="text" name="message" v-model="inputMsg" class="flex-1 m-2 text-center border-2 border-emerald-700 p-1" placeholder="Ingrese su input aquí" @keydown.enter="sendMsg">
        <button @click="sendMsg" class="flex-2 m-2 text-center bg-green-200 p-1">Enviar</button>
        <button v-if="buttonGenerateTest" @click="generateNewTest" class="flex-2 m-2 text-center bg-green-200 p-1">Generar nuevo exámen</button>
      </div>
    </div>
  </div>
</template>
