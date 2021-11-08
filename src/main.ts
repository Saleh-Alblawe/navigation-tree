import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/build/css/bootstrap/4.3.1/css/bootstrap-ar.css';
import './assets/fonts/font-awesome/5.9.0/css/all.css';
import './assets/build/css/styles.css';
import './assets/build/js/scripts.js';
import './assets/build/js/bootstrap/4.3.1/popper.js';
import './assets/build/js/bootstrap/4.3.1/bootstrap.js';
createApp(App).use(router).mount('#app')
