import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'

import './assets/css/style.css'

const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})
app.use(router)
app.mount('#app')
