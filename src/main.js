import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Homepage from './views/homepage.vue'
import About from './views/about.vue'
import Gallery from './views/gallery.vue'
import Image from './views/image.vue'
import Books from './views/books.vue'

import './assets/main.css'


const router = createRouter({
  history: createWebHistory(),
  routes: [ 
    {
      path: "/", 
      component: Homepage, 
      meta: {title: "Matt Pagett | Home"}
    },
    {
      path: "/:series",
      component: Gallery
    },
    {
      path: "/:series/:image",
      component: Image
    },
    {
      path: "/books",
      component: Books
    },
    {
      path: "/about",
      component: About
    }
  ]
})


createApp(App)
.use(router)
.mount('#app')