import './bootstrap';

import { createApp } from 'vue';

import app from './layouts/app.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router.js';

createApp(app).use(router).mount('#app')
