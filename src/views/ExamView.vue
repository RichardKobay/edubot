<script setup>
import { ref } from "vue";
import router from "@/router/index.js";

const props = defineProps({
  userResponses: Array
})

const exam = ref([
  {
    "pregunta": "¿Qué es una clase en poo?",
    "respuestas": [
      "Un prototipo de objeto",
      "Una instancia de objeto",
      "Un método",
      "Un valor primitivo"
    ]
  },
  {
    "pregunta": "¿Qué es un objeto en poo?",
    "respuestas": [
      "Un prototipo de clase",
      "Una instancia de clase",
      "Un tipo de dato primitivo",
      "Un conjunto de método"
    ]
  },
  {
    "pregunta": "¿Qué es la abstracción en POO?",
    "respuestas": [
      "Ocultar la implementación interna de un objeto",
      "Convertir un objeto en una instancia de clase",
      "Representar objetos del mundo real",
      "Acceder a los atributos públicos de una clase"
    ]
  },
  {
    "pregunta": "¿Qué es el encapsulamiento en POO?",
    "respuestas": [
      "Ocultar la implementación interna de un objeto",
      "Exponer todos los métodos de una clase",
      "Acceder directamente a los atributos privados de una clase",
      "Hacer públicos todos los atributos de una clase"
    ]
  },
  {
    "pregunta": "Qué es el polimorfismo en POO?",
    "respuestas": [
      "La capacidad de una clase para heredar de múltiples clases",
      "La capacidad de una clase para tener múltiples constructores",
      "La capacidad de una clase para tener múltiples formas",
      "La capacidad de una clase para tener múltiples instancias"
    ]
  },
  {
    "pregunta": "¿Qué es la herencia en POO?",
    "respuestas": [
      "La capacidad de una clase para tener múltiples formas",
      "La capacidad de una clase para tener múltiples instancias",
      "La capacidad de una clase para heredar atributos y métodos de otra clase",
      "La capacidad de una clase para implementar múltiples interfaces"
    ]
  },
  {
    "pregunta": "¿Qué es la herencia jerárquica en POO?",
    "respuestas": [
      "Una clase que hereda de múltiples clases",
      "Una clase que es heredada por múltiples clases",
      "Una cadena de clases que se heredan unas de otras",
      "Una clase que no tiene clases que hereden de ella"
    ]
  },
  {
    "pregunta": "¿Qué es el casting en POO?",
    "respuestas": [
      "Convertir un objeto de una clase a otra clase relacionada",
      "Ocultar la implementación interna de un objeto",
      "Hacer que un objeto sea una instancia de su clase base",
      "Acceder a los atributos privados de una clase"
    ]
  },
  {
    "pregunta": "¿Cuáles son los tipos de polimorfismo en POO?",
    "respuestas": [
      "Estático y dinámico",
      "Público y privado",
      "Simple y compuesto",
      "Fuerte y débil"
    ]
  },
  {
    "pregunta": "¿Qué son las clases anidadas en POO?",
    "respuestas": [
      "Clases que tienen múltiples constructores",
      "Clases que se definen dentro de otras clases",
      "Clases que no pueden tener objetos",
      "Clases que no pueden tener métodos"
    ]
  },
  {
    "pregunta": "¿Qué es una interfaz en POO?",
    "respuestas": [
      "Una clase que no puede ser instanciada",
      "Una clase abstracta",
      "Una especificación de métodos que una clase debe implementar",
      "Una clase que no puede heredar de otras clases"
    ]
  },
  {
    "pregunta": "¿Qué son las interfaces anidadas en POO?",
    "respuestas": [
      "Interfaces que están dentro de otras interfaces",
      "Interfaces que no pueden tener métodos",
      "Interfaces que no pueden tener clases que las implementen",
      "Interfaces que solo pueden ser implementadas por clases abstractas"
    ]
  },
  {
    "pregunta": "¿Qué son los genéricos en POO?",
    "respuestas": [
      "Tipos de datos primitivos",
      "Tipos de datos que pueden ser utilizados en cualquier parte del código",
      "Tipos de datos que pueden ser utilizados en cualquier parte del código, pero no en clases",
      "Tipos de datos parametrizados que permiten reutilizar código con diferentes tipos de datos"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes NO es una característica de la POO?",
    "respuestas": [
      "Encapsulamiento",
      "Herencia",
      "Iteración",
      "Polimorfismo"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes afirmaciones sobre las clases y objetos es FALSA?",
    "respuestas": [
      "Una clase define las propiedades y comportamientos comunes de los objetos",
      "Un objeto es una instancia concreta de una clase",
      "Una clase no puede tener múltiples objetos",
      "Los objetos pueden interactuar entre sí"
    ]
  },

  {
    "pregunta": "¿Cuál de las siguientes afirmaciones describe mejor la herencia?",
    "respuestas": [
      "Una clase que hereda de otra clase adquiere sus atributos y comportamientos.",
      "Una clase que hereda de otra clase anula todos sus métodos.",
      "Una clase que hereda de otra clase no puede acceder a sus métodos.",
      "Una clase que hereda de otra clase no puede tener sus propios métodos."
    ]
  },


  {
    "pregunta": "¿Cuál de las siguientes opciones describe el polimorfismo?",
    "respuestas": [
      "La capacidad de una clase para tener múltiples formas.",
      "La capacidad de una clase para heredar de múltiples clases.",
      "La capacidad de una clase para tener múltiples instancias.",
      "La capacidad de una clase para tener múltiples atributos."
    ]
  },


  {
    "pregunta": "¿Qué es una clase abstracta?",
    "respuestas": [
      "Una clase que no puede tener objetos.",
      "Una clase que solo puede heredar de una clase concreta.",
      "Una clase que no puede ser heredada.",
      "Una clase que puede contener métodos abstractos."
    ]
  },

  {
    "pregunta": "¿Cuál de las siguientes opciones describe mejor el encapsulamiento?",
    "respuestas": [
      "Ocultar la implementación interna de un objeto.",
      "Exponer todos los métodos de una clase.",
      "Hacer públicos todos los atributos de una clase.",
      "Acceder directamente a los atributos privados de una clase."
    ]
  },

  {
    "pregunta": "¿Qué es un método abstracto?",
    "respuestas": [
      "Un método que no tiene implementación.",
      "Un método que no puede ser llamado.",
      " Un método que solo puede ser llamado por otras clases.",
      "Un método que no puede ser heredado."
    ]
  },

  {
    "pregunta": "¿Cuál de las siguientes opciones describe mejor una interfaz?",
    "respuestas": [
      "Una especificación de métodos que una clase debe implementar.",
      "Una clase concreta que puede tener instancias.",
      "Una clase que no puede tener métodos.",
      "Una clase que no puede ser instanciada."
    ]
  },


  {
    "pregunta": "¿Cuál de las siguientes afirmaciones describe mejor el casting?",
    "respuestas": [
      "Convertir un objeto de una clase a otra clase relacionada.",
      "Ocultar la implementación interna de un objeto.",
      "Acceder a los atributos privados de una clase.",
      "Hacer que un objeto sea una instancia de su clase base."
    ]
  },


  {
    "pregunta": "Qué es la herencia múltiple?",
    "respuestas": [
      "Una clase que hereda de múltiples clases.",
      "Una clase que hereda de una clase abstracta.",
      "Una clase que tiene múltiples constructores.",
      " Una clase que no puede tener objetos."
    ]
  },


  {
    "pregunta": "¿Qué es el polimorfismo estático?",
    "respuestas": [
      "Resolución del método en tiempo de ejecución.",
      "Resolución del método en tiempo de compilación.",
      "La capacidad de una clase para tener múltiples formas.",
      "La capacidad de una clase para heredar de múltiples clases."
    ]
  },


  {
    "pregunta": "¿Qué es el polimorfismo dinámico?",
    "respuestas": [
      "Resolución del método en tiempo de compilación.",
      "Resolución del método en tiempo de ejecución.",
      "La capacidad de una clase para tener múltiples formas.",
      "La capacidad de una clase para heredar de múltiples clases."
    ]
  },


  {
    "pregunta": "¿Qué es la herencia simple?",
    "respuestas": [
      "Una clase que hereda de una sola clase.",
      "Una clase que hereda de múltiples clases.",
      "Una clase que hereda solo de interfaces.",
      "Una clase que no puede heredar de otras clases."
    ]
  },


  {
    "pregunta": "¿Cuál de las siguientes afirmaciones sobre clases anidadas es VERDADERA?",
    "respuestas": [
      "Las clases anidadas no pueden tener atributos.",
      "Las clases anidadas no pueden tener métodos.",
      "Las clases anidadas pueden acceder a los miembros privados de la clase externa.",
      "Las clases anidadas no pueden tener constructores."
    ]
  },

  {
    "pregunta": "¿Qué es una interfaz anidada?",
    "respuestas": [
      "Una interfaz dentro de otra interfaz.",
      "Una interfaz que no puede tener métodos.",
      "Una interfaz que no puede ser implementada por clases concretas.",
      "Una interfaz que solo puede ser implementada por clases abstractas."
    ]
  },
  {
    "pregunta": "¿Cuál es el propósito principal de los genéricos en POO?",
    "respuestas": [
      "Permitir la reutilización de código con diferentes tipos de datos.",
      "Ocultar la implementación interna de un objeto.",
      "Facilitar la herencia múltiple.",
      "Convertir un objeto de una clase a otra clase relacionada."
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes opciones describe mejor el concepto de composición en POO?",
    "respuestas": [
      "La capacidad de una clase para tener múltiples instancias.",
      "La capacidad de una clase para tener múltiples formas.",
      "La creación de objetos complejos mediante la combinación de otros objetos.",
      "La capacidad de una clase para tener múltiples   constructores."
    ]
  }
]);
const selectedAnswers = ref([]);
const userResponses = ref(props.userResponses || []);


const submitForm = () => {

  if (selectedAnswers.value.length !== exam.value.length) {
    alert("Por favor, responde todas las preguntas antes de enviar el formulario.");
    return;
  }

  for (let i = 0; i < exam.value.length; i++) {
    userResponses.value.push({
      pregunta: exam.value[i].pregunta,
      respuesta: selectedAnswers.value[i]
    });
  }
  router.push({ path: '/chat', query: { userResponses: JSON.stringify(userResponses.value) } })
}
</script>

<template>
  <div>
    <h2 class="font-bold text-5xl text-center">Examen</h2>
    <form @submit.prevent="submitForm">
      <div v-for="(pregunta, index) in exam" :key="index" class="mb-5">
        <p class="text-xl mb-2">{{ index + 1 }}. {{ pregunta.pregunta }}</p>
        <div v-for="(respuesta, rIndex) in pregunta.respuestas" :key="rIndex" class="">
          <input type="radio" :id="'respuesta_' + index + '_' + rIndex" :value="respuesta" v-model="selectedAnswers[index]" required>
          <label :for="'respuesta_' + index + '_' + rIndex" class="p-2">{{ respuesta }}</label>
        </div>
      </div>
      <hr class="border-emerald-800 border-3">
      <button type="submit" class="m-2 text-center bg-green-200 p-4 font-bold mr-auto ml-auto">Enviar respuestas</button>
    </form>
  </div>
</template>