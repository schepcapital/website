import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Old from './pages/Old.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/n0v2q92p9y825v2948p75a279ov34bo6av2o97', component: Old },
    ]
})
