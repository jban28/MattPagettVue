import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../views/homepage.vue'
import About from '../views/about.vue'
import Gallery from '../views/gallery.vue'
import Image from '../views/image.vue'
import NotFound from '../views/not-found.vue'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import EditGallery from '../views/edit-gallery.vue'
import NewImage from '../views/new-image.vue'

let routesArray = [
  {
    path: "/", 
    component: Homepage
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  },
];

export default fetch('https://artist-api.bannisterwebservices.co.uk/all-images-by-series?artist=Matt_Pagett')
.then(async http => {
  let content = http.json();
  if (http.ok) {
    return content;
  }
  else {
    return content.then(content => {throw new Error(content);})
  }
})
.then(images => {
  routesArray.push({
    path: "/admin",
    component: Admin,
    beforeEnter: (to, from) => {
      if (from.name === "login"){return true}
      else {return {name: "login"}}
    },
    children: [
      {
        path: "edit",
        component: EditGallery,
        props: {
          allImages: images
        }
      },
      {
        path: "new",
        component: NewImage
      }
    ]
  })

  let previous = undefined;
  let next = undefined;
  let index = 0;

  for (const [seriesName, seriesData] of Object.entries(images)){
    
    // Create routes for gallery pages for each series
    routesArray.push({
      path: `/${seriesName}`,
      component: Gallery,
      name: `${seriesName}`,
      props: {
        imageSet: seriesData,
        accentColor: "var(--black)"
      }
    })

    // Create routes for each individual image
    seriesData.forEach(function (image) {
      index += 1;
      next = seriesData[index];
      routesArray.push({
        path: image.url,
        component: Image,
        props: {
          image: image,
          nextImage: next,
          previousImage: previous,
          accentColor: "var(--black)"
        },
        meta: {imgIndex: index}
      })
      previous = image;
    })
  
    previous = undefined;
    index = 0;
  } 

  const router = createRouter({
    history: createWebHistory(),
    routes: routesArray,
    scrollBehavior(to, from, savedPosition) {
      return { 
        top: 0,
        behaviour: "instant" 
      }
    }
  })

  router.afterEach((to, from) => {
    if ((from.path == "/") || (from.path == "")) {
      to.meta.transitionMode = "in-out";
    }
    else {
      to.meta.transitionMode = "out-in"
    }
    
  })
  return router
})
.catch(error => {
  console.log(error)
})