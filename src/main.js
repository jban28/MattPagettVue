import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from 'vue'
import App from './App.vue'
import routerPromise from './router/index.js'
import VueGtag from "vue-gtag";
import './assets/main.css'

routerPromise.then(router => {
  createApp(App)
  .use(router)
  .use(VueGtag, {
    config: { id: "G-BM3HHQKEE2" }
  }, router)
  .mount('#app')
})


