import { createRouter, createWebHistory } from 'vue-router'
import ExamView from "@/views/ExamView.vue";
import ChatView from "@/views/ChatView.vue";
import HomeView from "@/views/HomeView.vue";
import GeneratedTest from "@/views/GeneratedTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/exam',
      name: 'exam',
      component: ExamView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
    {
      path: '/new-exam',
      name: 'new-exam',
      component: GeneratedTest
    }
  ]
})

export default router
