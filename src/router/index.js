import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../components/start'
import Questionnaire from '../components/questionnaire'
import Result from '../components/result'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
