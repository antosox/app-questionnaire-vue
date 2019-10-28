import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Questionnaire from "@/components/Questionnaire";
import Score from "@/components/Score";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/questionnaire/:id',
    name: 'questionnaire',
    component: Questionnaire
  },  {
    path: '/Myscore/:id',
    name: 'myscore',
    component: Score
  },
  // {
  //   path: '/questionnaire',
  //   name: 'questionnaire',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/questionnaire.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
