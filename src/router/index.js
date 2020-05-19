import Vue from 'vue'
import Router from '../tools/router'

import Hello from '../pages/Hello.vue'
import World from '../pages/World.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/world',
    name: 'World',
    component: World
  }
]

export default new Router({routes})