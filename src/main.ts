import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { DedsiElementPlusUi } from './element-plus/public-api.ts'

const app = createApp(App);

app.use(ElementPlus)
app.use(DedsiElementPlusUi)

.mount('#app')
