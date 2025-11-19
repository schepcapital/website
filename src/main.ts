// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './style.css'

// Mount Vue + Router
createApp(App)
    .use(router)
    .mount('#app')

// Fade-in behavior
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded")
    }, 500) // 0.5s delay before fade-in
})
