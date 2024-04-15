import { createRouter, createWebHistory } from 'vue-router'
import ExamView from "@/views/ExamView.vue";
import ChatView from "@/views/ChatView.vue";
import HomeView from "@/views/HomeView.vue";

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
    }
  ]
})

export default router
