import { createRouter, createWebHistory, onBeforeRouteLeave} from "vue-router";
import Homepage from '../views/homepage.vue'
import About from '../views/about.vue'
import Gallery from '../views/gallery.vue'
import Image from '../views/image.vue'
import NotFound from '../views/not-found.vue'
import Admin from '../views/admin.vue'


const bodies = [];
const flowers = [];

export default fetch('https://artist-api.bannisterwebservices.co.uk/all-images?artist=Matt_Pagett')
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
  for (let image of images){
    if (image.series == "bodies"){
      bodies.push(image)
    }
    else if (image.series == "flowers"){
      flowers.push(image)
    }
  }

  let previous = undefined;
  let next = undefined;
  let index = 0;

  let routesArray = [
    {
      path: "/", 
      component: Homepage
    },
    {
      path: "/bodies",
      component: Gallery,
      name: "bodies",
      props: {
        imageSet: bodies,
        accentColor: "var(--black)"
      }
    },
    {
      path: "/flowers",
      component: Gallery,
      name: "flowers",
      props: {
        imageSet: flowers,
        accentColor: "var(--black)"
      }
    },
    {
      path: "/designs",
      component: Image,
      props: {
        image: {
          "url": "/designs",
          "name": "Designs",
          "srcThumb": "/images/books.jpg",
          "srcFull": "/images/books.jpg",
          "caption": "Examples of illustration/graphic design/writing projects",
          "series": "designs"
        },
        nextImage: undefined,
        previousImage: undefined,
        accentColor: "var(--black)"
      }
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
      path: "/admin",
      component: Admin
    }
  ]

  bodies.forEach(function (image) {
    index += 1;
    next = bodies[index];
    routesArray.push({
      path: image.url,
      component: Image,
      props: {
        image: image,
        nextImage: next,
        previousImage: previous,
        accentColor: "var(--black)"
      }
    })
    previous = image;
  })

  previous = undefined;
  index = 0;

  flowers.forEach(function (image) {
    index += 1;
    next = flowers[index];
    routesArray.push({
      path: image.url,
      component: Image,
      props: {
        image: image,
        nextImage: next,
        previousImage: previous,
        accentColor: "var(--black)"
      }
    })
    previous = image;
  })

  

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