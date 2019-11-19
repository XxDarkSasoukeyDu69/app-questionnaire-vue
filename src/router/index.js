import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../components/start'
import Questionnaire from '../components/questionnaire'
import Result from '../components/result'
import ResultAdmin from '../components/admin/Resultat'
import AddQuestionAdmin from '../components/admin/AddQuestion'
import HomeAdmin from '../components/admin/Home'
import LoginAdmin from '../components/admin/loginAdmin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/questionnaire/:userId',
    name: 'questionnaire',
    component: Questionnaire
  },
  {
    path: '/result/:userId',
    name: 'result',
    component: Result
  },
  {
    path: '/admin/result',
    name: 'resultat',
    component: ResultAdmin
  },
  {
    path: '/admin/add-question',
    name: 'AddQuestion',
    component: AddQuestionAdmin
  },
  {
    path: '/admin/home',
    name: 'Home',
    component: HomeAdmin
  },
  {
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
