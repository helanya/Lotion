import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupAssets } from '@/utils/assets'

const app = createApp(App)
setupRouter(app)
setupAssets()
app.mount('#app')
