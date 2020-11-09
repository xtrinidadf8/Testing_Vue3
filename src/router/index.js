import { createRouter, createWebHistory } from 'vue-router'
import ClassificationTable from '../components/ClassificationTable.vue'
import Awards from "../components/Awards.vue";
import Rules from "../components/Rules.vue";

const routes = [
  {
    path: '/',
    name: 'ClassificationTable',
    component: ClassificationTable,
    props: true,
  },
  {
    path: '/reglas',
    name: 'Rules',
    component: Rules,
    props: true,
  },
  {
    path: '/premios',
    name: 'Awards',
    component: Awards,
    props: true,
  },
  {
    path: '/clips',
    name: 'Clips',
    beforeEnter() {
      window.open('https://playoffnations.com', '_blank')
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router