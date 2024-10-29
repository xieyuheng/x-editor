import { createHead } from '@vueuse/head'
import 'mimor'
import { createApp } from 'vue'
import App from './App.vue'
import { happyHacking } from './console/happyHacking'
import router from './router'
import './styles/index.css'

const app = createApp(App)

app.use(router)
app.use(createHead())

app.mount('#app')

happyHacking()
