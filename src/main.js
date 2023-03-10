import { createApp } from 'vue'
import App from './App.vue'
import newestUI from 'newest-ui'
import '../dist/style.css'
const app = createApp(App)
app.use(newestUI)
app.mount('#app')
