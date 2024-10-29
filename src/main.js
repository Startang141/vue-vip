import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import OptionsComponent from './components/OptionsComponent.vue'

const app = createApp(App)
app.component('OptionsComponent', OptionsComponent)
app.mount('#app')
