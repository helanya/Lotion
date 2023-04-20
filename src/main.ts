import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupAssets } from '@/utils/assets'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdDragindicatorTwotone } from 'oh-vue-icons/icons'

addIcons(MdDragindicatorTwotone)

const app = createApp(App)
setupRouter(app)
setupAssets()
app.component('v-icon', OhVueIcon)

app.mount('#app')
