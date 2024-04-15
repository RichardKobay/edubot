<script setup>
import {onMounted, ref} from 'vue';
import axios from "axios";

const messages = ref([]);
const newMessage = ref('');
const requestStr = ref({});
const response = ref();

onMounted(() => {

})

const initRequestObj = () => {
  requestStr.value.model = "gpt-3.5-turbo"
  requestStr.value.messages = messages.value;
}

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    messages.value.push({ role: "user", content: newMessage.value });



    setTimeout(receiveMessage, 1000);
    newMessage.value = '';
  }
}

const receiveMessage = () => {
  messages.value.push({ role: 'profesor', content: 'received' });
  requestStr.value.messages = messages.value;

  console.log(JSON.stringify(requestStr.value))
}

const getChatGPTResponse = async()=> {
  try {
    const response = await axios.get("http://localhost:8080/chat")
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
</script>

<template>
  <div>
    <h2 class="text-green-500 text-5xl">Chat</h2>
    <div class="border-green-300 border-2">
      <div v-for="(message, index) in messages" :key="index" :class="{'bg-green-200': message.role === 'profesor', 'bg-green-300': message.role === 'user'}" class="">
        {{ message.content }}
      </div>
    </div>
    <div class="border-2 border-green-300 flex">
      <input v-model="newMessage" type="text" placeholder="Escribe un mensaje..." class="flex-grow">
      <button @click="sendMessage">Enviar</button>
    </div>
  </div>
</template>

