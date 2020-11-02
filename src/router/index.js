import { createRouter, createWebHistory } from 'vue-router'
import ClassificationTable from '../components/ClassificationTable.vue'

const routes = [
  {
    path: '/',
    name: 'ClassificationTable',
    component: ClassificationTable,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router