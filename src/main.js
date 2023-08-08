import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import('../style.css')
// if (import.meta.env.MODE === 'development') {
//     import('../style.css')
// } else {
//     import('../build.css')
// }

createApp(App).use(router).mount('#app')

