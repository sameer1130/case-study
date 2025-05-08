import { createApp } from 'vue'
import './style.css'
import './assets/main.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
// main.js or main.ts
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

const app = createApp(App)
app.mount('#app')
