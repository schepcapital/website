import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// main.ts
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded")
    }, 500) // 0.5s delay before fade-in
})
