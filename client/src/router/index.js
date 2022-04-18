import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/views/Home.vue'
import Cart from '@/components/views/Cart.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
