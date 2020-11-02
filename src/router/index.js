import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ClassificationTable',
    component: () => import('../components/ClassificationTable.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router