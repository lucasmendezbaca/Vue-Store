import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'

import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'

const db = useFirestore()
export const products = useCollection(collection(db, 'productos'))

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
