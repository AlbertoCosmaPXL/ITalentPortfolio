import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import Seminars from './views/Seminars.vue'
import Reflection from './views/Reflection.vue'
import Voorstelling from './views/Voorstelling.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/voorstelling', component: Voorstelling },
    { path: '/seminaries', component: Seminars },
    { path: '/reflectie', component: Reflection },
    { path: '/projecten/:id', component: ProjectDetail, props: true },
  ],
  scrollBehavior() { return { top: 0 } },
})
