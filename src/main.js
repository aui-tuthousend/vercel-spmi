import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


const app = createApp(App)

app.use(router)

app.mount('#app')
