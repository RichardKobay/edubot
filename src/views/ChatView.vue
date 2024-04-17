<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import axios from "axios";

const messages = ref([]);
const userResponses = ref([]);
const inputMsg = ref("hola");

onMounted(() => {
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

  sendReq()
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
  console.log(inputMsg.value)
}

const sendReq = async () => {
  try {
    const model = "gpt-3.5-turbo";

    const finalReq = {
      "model": model,
      "messages": messages.value
    };


    console.log(finalReq)

    console.log(messages)
    const response = await axios.post('http://localhost:8080/request', {
      prompt: JSON.stringify(finalReq)
    });

    console.log(response.data);
    messages.value.push({"role": "assistant", "content": JSON.stringify(response.data.response)});
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
           :class="{'bg-green-200': message.role === 'assistant', 'bg-green-300': message.role === 'user'}" class="">
        <p v-if="message.role === 'assistant' || message.role === 'user'" >{{ message.content }}</p>
      </div>
      <div>
        <input type="text" name="message" v-model="inputMsg" >
        <button @click="sendMsg">Enviar</button>
      </div>
    </div>
  </div>
</template>

