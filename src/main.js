import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from 'vue'
import App from './App.vue'
import routerPromise from './router/index.js'
import './assets/main.css'

routerPromise.then(router => {
  createApp(App)
  .use(router)
  .mount('#app')
})


