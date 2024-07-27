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

// export default fetch('https://artistapi.bannisterwebservices.co.uk/all-images-by-series?artist=Matt_Pagett')
// .then(async http => {
//   let content = http.json();
//   if (http.ok) {
//     return content;
//   }
//   else {
//     return content.then(content => {throw new Error(content);})
//   }
// })
// .then(images => {
const images = {
  "bodies": [
    {
      "_id": "64a28c317120665d0f2ec898",
      "caption": "Gardener 1 (R); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 1 (R)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_1_r.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_1_r.jpg",
      "sequence": 47,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_1_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_1_R.jpg",
      "url": "/bodies/gardener_1_r"
    },
    {
      "_id": "64a28c317120665d0f2ec899",
      "caption": "Gardener 1 (G); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 1 (G)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_1_g.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_1_g.jpg",
      "sequence": 46,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_1_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_1_G.jpg",
      "url": "/bodies/gardener_1_g"
    },
    {
      "_id": "64a28c317120665d0f2ec89a",
      "caption": "Gardener 1 (R); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 1 (B)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_1_b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_1_b.jpg",
      "sequence": 45,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_1_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_1_B.jpg",
      "url": "/bodies/gardener_1_b"
    },
    {
      "_id": "64a28c317120665d0f2ec89b",
      "caption": "Gardener 2 (R); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 2 (R)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_2_r.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_2_r.jpg",
      "sequence": 44,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_2_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_2_R.jpg",
      "url": "/bodies/gardener_2_r"
    },
    {
      "_id": "64a28c317120665d0f2ec89c",
      "caption": "Gardener 2 (G); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 2 (G)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_2_g.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_2_g.jpg",
      "sequence": 43,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_2_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_2_G.jpg",
      "url": "/bodies/gardener_2_g"
    },
    {
      "_id": "64a28c317120665d0f2ec89d",
      "caption": "Gardener 2 (B); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 2 (B)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_2_b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_2_b.jpg",
      "sequence": 42,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_2_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_2_B.jpg",
      "url": "/bodies/gardener_2_b"
    },
    {
      "_id": "64a28c317120665d0f2ec89e",
      "caption": "Gardener 3 (R); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 3 (R)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_3_(r).jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_3_(r).jpg",
      "sequence": 41,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_3_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_3_R.jpg",
      "url": "/bodies/gardener_3_(r)"
    },
    {
      "_id": "64a28c317120665d0f2ec89f",
      "caption": "Gardener 3 (G); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 3 (G)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_3_g.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_3_g.jpg",
      "sequence": 40,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_3_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_3_G.jpg",
      "url": "/bodies/gardener_3_g"
    },
    {
      "_id": "64a28c317120665d0f2ec8a0",
      "caption": "Gardener 3 (B); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 3 (B)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_3_b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_3_b.jpg",
      "sequence": 39,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_3_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_3_B.jpg",
      "url": "/bodies/gardener_3_b"
    },
    {
      "_id": "64a28c317120665d0f2ec8a1",
      "caption": "Gardener 4 (R); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 4 (R)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_4_r.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_4_r.jpg",
      "sequence": 38,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_4_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_4_R.jpg",
      "url": "/bodies/gardener_4_r"
    },
    {
      "_id": "64a28c317120665d0f2ec8a2",
      "caption": "Gardener 4 (G); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 4 (G)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_4_g.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_4_g.jpg",
      "sequence": 37,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_4_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_4_G.jpg",
      "url": "/bodies/gardener_4_g"
    },
    {
      "_id": "64a28c317120665d0f2ec8a3",
      "caption": "Gardener 4 (B); pen and crayon on paper; 18 x 18 cm; 2021",
      "name": "Gardener 4 (B)",
      "s3KeyFull": "Matt_Pagett/bodies/full/gardener_4_b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/gardener_4_b.jpg",
      "sequence": 36,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Gardener_4_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Gardener_4_B.jpg",
      "url": "/bodies/gardener_4_b"
    },
    {
      "_id": "64a28c317120665d0f2ec8a4",
      "caption": "7987419-insect-stag-beetle-isolated-in-white; pen on paper; 21 x 30 cm; 2015",
      "name": "7987419-insect-stag-beetle-isolated-in-white",
      "s3KeyFull": "Matt_Pagett/bodies/full/7987419-insect-stag-beetle-isolated-in-white.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/7987419-insect-stag-beetle-isolated-in-white.jpg",
      "sequence": 35,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/7987419-insect-stag-beetle-isolated-in-white.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/7987419-insect-stag-beetle-isolated-in-white.jpg",
      "url": "/bodies/7987419-insect-stag-beetle-isolated-in-white"
    },
    {
      "_id": "64a28c317120665d0f2ec8a5",
      "caption": "Insect_Safari_-_beetle_04; pen on paper; 21 x 30 cm; 2015",
      "name": "Insect_Safari_-_beetle_04",
      "s3KeyFull": "Matt_Pagett/bodies/full/insect_safari_-_beetle_04.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/insect_safari_-_beetle_04.jpg",
      "sequence": 34,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/InsectSafari-beetle04.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/InsectSafari-beetle04.jpg",
      "url": "/bodies/insect_safari_-_beetle_04"
    },
    {
      "_id": "64a28c317120665d0f2ec8a6",
      "caption": "Picture 004 Montoya 8-19-9; pen on paper; 21 x 30 cm; 2015",
      "name": "Picture 004 Montoya 8-19-9",
      "s3KeyFull": "Matt_Pagett/bodies/full/picture_004_Montoya_8-19-9.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/picture_004_Montoya_8-19-9.jpg",
      "sequence": 33,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Picture_004_Montoya_8-19-9.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Picture_004_Montoya_8-19-9.jpg",
      "url": "/bodies/picture_004_Montoya_8-19-9"
    },
    {
      "_id": "64a28c317120665d0f2ec8a7",
      "caption": "Blue_Ground_beetle_urjsa; pen on paper; 21 x 30 cm; 2015",
      "name": "Blue_Ground_beetle_urjsa",
      "s3KeyFull": "Matt_Pagett/bodies/full/blue_ground_beetle_urjsa.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/blue_ground_beetle_urjsa.jpg",
      "sequence": 32,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/BlueGroundbeetleurjsa.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/BlueGroundbeetleurjsa.jpg",
      "url": "/bodies/blue_ground_beetle_urjsa"
    },
    {
      "_id": "64a28c317120665d0f2ec8a8",
      "caption": "longicorne; pen on paper; 21 x 30 cm; 2015",
      "name": "longicorne",
      "s3KeyFull": "Matt_Pagett/bodies/full/longicorne.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/longicorne.jpg",
      "sequence": 31,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/longicorne.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/longicorne.jpg",
      "url": "/bodies/longicorne"
    },
    {
      "_id": "64a28c317120665d0f2ec8a9",
      "caption": "il fullxfull.140575002; pen on paper; 21 x 30 cm; 2015",
      "name": "il fullxfull.140575002",
      "s3KeyFull": "Matt_Pagett/bodies/full/il_fullxfull_140575002.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/il_fullxfull_140575002.jpg",
      "sequence": 30,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/il_fullxfull140575002.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/il_fullxfull140575002.jpg",
      "url": "/bodies/il_fullxfull_140575002"
    },
    {
      "_id": "64a28c317120665d0f2ec8aa",
      "caption": "Flip Horizontal: Smoker 1; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019",
      "name": "Flip Horizontal: Smoker 1",
      "s3KeyFull": "Matt_Pagett/bodies/full/flip_horizontal_smoker_1.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/flip_horizontal_smoker_1.jpg",
      "sequence": 29,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Flip_Horizontal_Smoker_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Flip_Horizontal_Smoker_1.jpg",
      "url": "/bodies/flip_horizontal_smoker_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8ab",
      "caption": "Flip Horizontal: view; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019",
      "name": "Flip Horizontal: view",
      "s3KeyFull": "Matt_Pagett/bodies/full/flip_horizontal_view.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/flip_horizontal_view.jpg",
      "sequence": 28,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Flip_Horizontal_view.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Flip_Horizontal_view.jpg",
      "url": "/bodies/flip_horizontal_view"
    },
    {
      "_id": "64a28c317120665d0f2ec8ac",
      "caption": "Flip Horizontal: The Smoking Clock; charcoal and chalk on 60 x 21 x 30 cm cardboard panels; dimensions variable; 2019",
      "name": "Flip Horizontal: The Smoking Clock",
      "s3KeyFull": "Matt_Pagett/bodies/full/flip_horizontal_the_smoking_clock.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/flip_horizontal_the_smoking_clock.jpg",
      "sequence": 27,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Flip_Horizontal_The_Smoking_Clock.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Flip_Horizontal_The_Smoking_Clock.jpg",
      "url": "/bodies/flip_horizontal_the_smoking_clock"
    },
    {
      "_id": "64a28c317120665d0f2ec8ad",
      "caption": "Jock 1; pen on paper; 21 x 21 cm, 2020",
      "name": "Jock 1",
      "s3KeyFull": "Matt_Pagett/bodies/full/jock_1.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/jock_1.jpg",
      "sequence": 26,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Jock_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Jock_1.jpg",
      "url": "/bodies/jock_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8ae",
      "caption": "Jock 2; pen on paper; 21 x 21 cm, 2020",
      "name": "Jock 2",
      "s3KeyFull": "Matt_Pagett/bodies/full/jock_2.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/jock_2.jpg",
      "sequence": 25,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Jock_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Jock_2.jpg",
      "url": "/bodies/jock_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8af",
      "caption": "Jock 3; pen on paper; 21 x 21 cm, 2020",
      "name": "Jock 3",
      "s3KeyFull": "Matt_Pagett/bodies/full/jock_3.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/jock_3.jpg",
      "sequence": 24,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Jock_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Jock_3.jpg",
      "url": "/bodies/jock_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8b0",
      "caption": "Shorts 1; pen on paper; 21 x 21 cm, 2020",
      "name": "Shorts 1",
      "s3KeyFull": "Matt_Pagett/bodies/full/shorts_1.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/shorts_1.jpg",
      "sequence": 23,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Shorts_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Shorts_1.jpg",
      "url": "/bodies/shorts_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8b1",
      "caption": "Shorts 2; pen on paper; 21 x 21 cm, 2020",
      "name": "Shorts 2",
      "s3KeyFull": "Matt_Pagett/bodies/full/shorts_2.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/shorts_2.jpg",
      "sequence": 22,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Shorts_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Shorts_2.jpg",
      "url": "/bodies/shorts_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8b2",
      "caption": "Shorts 3; pen on paper; 21 x 21 cm, 2020",
      "name": "Shorts 3",
      "s3KeyFull": "Matt_Pagett/bodies/full/shorts_3.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/shorts_3.jpg",
      "sequence": 21,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Shorts_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Shorts_3.jpg",
      "url": "/bodies/shorts_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8b3",
      "caption": "Trainer 1; pen on paper; 21 x 21 cm, 2020",
      "name": "Trainer 1",
      "s3KeyFull": "Matt_Pagett/bodies/full/trainer_1.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/trainer_1.jpg",
      "sequence": 20,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Trainer_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Trainer_1.jpg",
      "url": "/bodies/trainer_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8b4",
      "caption": "Trainer 2; pen on paper; 21 x 21 cm, 2020",
      "name": "Trainer 2",
      "s3KeyFull": "Matt_Pagett/bodies/full/trainer_2.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/trainer_2.jpg",
      "sequence": 19,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Trainer_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Trainer_2.jpg",
      "url": "/bodies/trainer_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8b5",
      "caption": "Trainer 3; pen on paper; 21 x 21 cm, 2020",
      "name": "Trainer 3",
      "s3KeyFull": "Matt_Pagett/bodies/full/trainer_3.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/trainer_3.jpg",
      "sequence": 18,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Trainer_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Trainer_3.jpg",
      "url": "/bodies/trainer_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8b6",
      "caption": "Sock 1; pen on paper; 21 x 21 cm, 2020",
      "name": "Sock 1",
      "s3KeyFull": "Matt_Pagett/bodies/full/sock_1.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/sock_1.jpg",
      "sequence": 17,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Sock_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Sock_1.jpg",
      "url": "/bodies/sock_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8b7",
      "caption": "Sock 2; pen on paper; 21 x 21 cm, 2020",
      "name": "Sock 2",
      "s3KeyFull": "Matt_Pagett/bodies/full/sock_2.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/sock_2.jpg",
      "sequence": 16,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Sock_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Sock_2.jpg",
      "url": "/bodies/sock_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8b8",
      "caption": "Sock 3; pen on paper; 21 x 21 cm, 2020",
      "name": "Sock 3",
      "s3KeyFull": "Matt_Pagett/bodies/full/sock_3.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/sock_3.jpg",
      "sequence": 15,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Sock_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Sock_3.jpg",
      "url": "/bodies/sock_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8b9",
      "caption": "Trackies (R); pen and crayon on paper; 21 x 21 cm; 2022",
      "name": "Trackies (R)",
      "s3KeyFull": "Matt_Pagett/bodies/full/trackies_r.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/trackies_r.jpg",
      "sequence": 14,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Trackies_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Trackies_R.jpg",
      "url": "/bodies/trackies_r"
    },
    {
      "_id": "64a28c317120665d0f2ec8ba",
      "caption": "Trackies (G); pen and crayon on paper; 21 x 21 cm; 2022",
      "name": "Trackies (G)",
      "s3KeyFull": "Matt_Pagett/bodies/full/trackies_g.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/trackies_g.jpg",
      "sequence": 13,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Trackies_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Trackies_G.jpg",
      "url": "/bodies/trackies_g"
    },
    {
      "_id": "64a28c317120665d0f2ec8bb",
      "caption": "Trackies (B); pen and crayon on paper; 21 x 21 cm; 2022",
      "name": "Trackies (B)",
      "s3KeyFull": "Matt_Pagett/bodies/full/trackies_b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/trackies_b.jpg",
      "sequence": 12,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Trackies_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Trackies_B.jpg",
      "url": "/bodies/trackies_b"
    },
    {
      "_id": "64a28c317120665d0f2ec8bc",
      "caption": "Backstreet 1R; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017",
      "name": "Backstreet 1R",
      "s3KeyFull": "Matt_Pagett/bodies/full/backstreet_1r.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/backstreet_1r.jpg",
      "sequence": 11,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Backstreet_1R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Backstreet_1R.jpg",
      "url": "/bodies/backstreet_1r"
    },
    {
      "_id": "64a28c317120665d0f2ec8bd",
      "caption": "Backstreet 2G; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017",
      "name": "Backstreet 2G",
      "s3KeyFull": "Matt_Pagett/bodies/full/backstreet_2g.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/backstreet_2g.jpg",
      "sequence": 10,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Backstreet_2G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Backstreet_2G.jpg",
      "url": "/bodies/backstreet_2g"
    },
    {
      "_id": "64a28c317120665d0f2ec8be",
      "caption": "Backstreet 3B; charcoal and pastel on 16 sheets of A4 office paper; 105 x 180 cm; 2017",
      "name": "Backstreet 3B",
      "s3KeyFull": "Matt_Pagett/bodies/full/backstreet_3b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/backstreet_3b.jpg",
      "sequence": 9,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Backstreet_3B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Backstreet_3B.jpg",
      "url": "/bodies/backstreet_3b"
    },
    {
      "_id": "64a28c317120665d0f2ec8bf",
      "caption": "Backstreet 4R; charcoal and pastel on 16 sheets of A4 office paper; 105 x 90 cm; 2017",
      "name": "Backstreet 4R",
      "s3KeyFull": "Matt_Pagett/bodies/full/backstreet_4r.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/backstreet_4r.jpg",
      "sequence": 8,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Backstreet_4R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Backstreet_4R.jpg",
      "url": "/bodies/backstreet_4r"
    },
    {
      "_id": "64a28c317120665d0f2ec8c0",
      "caption": "Backstreet 5B; charcoal and pastel on 16 sheets of A4 office paper; 63 x 90 cm; 2017",
      "name": "Backstreet 5B",
      "s3KeyFull": "Matt_Pagett/bodies/full/backstreet_5b.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/backstreet_5b.jpg",
      "sequence": 7,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Backstreet_5B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Backstreet_5B.jpg",
      "url": "/bodies/backstreet_5b"
    },
    {
      "_id": "64a28c317120665d0f2ec8c1",
      "caption": "Glove for a Film; pen on paper; 21 x 30 cm; 2022",
      "name": "Glove for a Film",
      "s3KeyFull": "Matt_Pagett/bodies/full/glove_for_a_film.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/glove_for_a_film.jpg",
      "sequence": 6,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Glove_for_a_Film.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Glove_for_a_Film.jpg",
      "url": "/bodies/glove_for_a_film"
    },
    {
      "_id": "64a28c317120665d0f2ec8c2",
      "caption": "Fight for a Cassette; pen on paper; 30 x 42 cm; 2022",
      "name": "Fight for a Cassette",
      "s3KeyFull": "Matt_Pagett/bodies/full/fight_for_a_cassette.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/fight_for_a_cassette.jpg",
      "sequence": 5,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Fight_for_a_Cassette.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Fight_for_a_Cassette.jpg",
      "url": "/bodies/fight_for_a_cassette"
    },
    {
      "_id": "64a28c317120665d0f2ec8c3",
      "caption": "Dear David 1; pen on paper; 40 x 60 cm; 2016",
      "name": "Dear David 1",
      "s3KeyFull": "Matt_Pagett/bodies/full/dear_david_1.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/dear_david_1.jpg",
      "sequence": 4,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Dear_David_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Dear_David_1.jpg",
      "url": "/bodies/dear_david_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8c4",
      "caption": "Dear David 2; pen on paper; 40 x 60 cm; 2016",
      "name": "Dear David 2",
      "s3KeyFull": "Matt_Pagett/bodies/full/dear_david_2.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/dear_david_2.jpg",
      "sequence": 3,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Dear_David_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Dear_David_2.jpg",
      "url": "/bodies/dear_david_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8c5",
      "caption": "Dear David 3; pen on paper; 40 x 60 cm; 2016",
      "name": "Dear David 3",
      "s3KeyFull": "Matt_Pagett/bodies/full/dear_david_3.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/dear_david_3.jpg",
      "sequence": 2,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Dear_David_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Dear_David_3.jpg",
      "url": "/bodies/dear_david_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8c6",
      "caption": "Dear David 4; pen on paper; 40 x 60 cm; 2016",
      "name": "Dear David 4",
      "s3KeyFull": "Matt_Pagett/bodies/full/dear_david_4.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/dear_david_4.jpg",
      "sequence": 1,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Dear_David_4.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Dear_David_4.jpg",
      "url": "/bodies/dear_david_4"
    },
    {
      "_id": "64a28c317120665d0f2ec8c7",
      "caption": "Dear David 5; pen on paper; 40 x 60 cm; 2016",
      "name": "Dear David 5",
      "s3KeyFull": "Matt_Pagett/bodies/full/dear_david_5.jpg",
      "s3KeyThumb": "Matt_Pagett/bodies/thumb/dear_david_5.jpg",
      "sequence": 0,
      "series": "bodies",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/full/Dear_David_5.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/bodies/thumb/Dear_David_5.jpg",
      "url": "/bodies/dear_david_5"
    }
  ],
  "designs": [
    {
      "_id": "64b2d9682ae9413fa6cb8343",
      "caption": "Flyers and posters I designed for the men-only life drawing sessions I organise. The sessions started out in London's last-remaining leather bar before moving to a hair salon in Dalston.",
      "name": "Life drawing",
      "s3KeyFull": "Matt_Pagett/designs/full/life_drawing.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/life_drawing.jpg",
      "sequence": 7,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_1.jpg",
      "url": "/designs/life_drawing"
    },
    {
      "_id": "64b2d9682ae9413fa6cb8344",
      "caption": "Arthouse Unlimited is an art-based charity working with neurodiverse adults, some of whom have further physical disabilities. I worked there both as an art instructor and packaging designer/artworker.",
      "name": "Arthouse Unlimited",
      "s3KeyFull": "Matt_Pagett/designs/full/arthouse_unlimited.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/arthouse_unlimited.jpg",
      "sequence": 6,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_2.jpg",
      "url": "/designs/arthouse_unlimited"
    },
    {
      "_id": "64b2d9682ae9413fa6cb8345",
      "caption": "These illustrations, based on aspects of Jubilee Park in Leyton, London, were sand-blasted onto cement blocks, paired with taller information pillars and positioned around the park to mark out a new woodland walk.",
      "name": "Jubilee Park",
      "s3KeyFull": "Matt_Pagett/designs/full/jubilee_park.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/jubilee_park.jpg",
      "sequence": 5,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_3.jpg",
      "url": "/designs/jubilee_park"
    },
    {
      "_id": "64b2d9682ae9413fa6cb8346",
      "caption": "Further illustrations for two print projects in Waltham Forest, London. The first was a map of a local stream, the second a booklet about Jubilee Park.",
      "name": "Waltham Forest",
      "s3KeyFull": "Matt_Pagett/designs/full/waltham_forest.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/waltham_forest.jpg",
      "sequence": 4,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_4.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_4.jpg",
      "url": "/designs/waltham_forest"
    },
    {
      "_id": "64b2d9682ae9413fa6cb8347",
      "caption": "Spreads from the six books I wrote and illustrated.",
      "name": "Books 1",
      "s3KeyFull": "Matt_Pagett/designs/full/books_1.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/books_1.jpg",
      "sequence": 3,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_5.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_5.jpg",
      "url": "/designs/books_1"
    },
    {
      "_id": "64b2d9682ae9413fa6cb8348",
      "caption": "Terror: A Consideration - a 64-page book I wrote and designed about the uses and abuses of terror;   Run and Become - a 140-page book I designed and edited as part of a University of Sussex project examining why people run marathons.",
      "name": "Books 2",
      "s3KeyFull": "Matt_Pagett/designs/full/books_2.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/books_2.jpg",
      "sequence": 2,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_6.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_6.jpg",
      "url": "/designs/books_2"
    },
    {
      "_id": "64b2d9682ae9413fa6cb8349",
      "caption": "A selection from some of the 25+ books I've illustrated.",
      "name": "Books 3",
      "s3KeyFull": "Matt_Pagett/designs/full/books_3.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/books_3.jpg",
      "sequence": 1,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_7.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_7.jpg",
      "url": "/designs/books_3"
    },
    {
      "_id": "64b2d9682ae9413fa6cb834a",
      "caption": "Compendiu, my 2011 dissertation, was set in a fictional arts centre dedicated to the promotion of unfinished artwork in all its forms.",
      "name": "Dissertation",
      "s3KeyFull": "Matt_Pagett/designs/full/dissertation.jpg",
      "s3KeyThumb": "Matt_Pagett/designs/thumb/dissertation.jpg",
      "sequence": 0,
      "series": "designs",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/full/2480_design_8.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/designs/thumb/360_design_8.jpg",
      "url": "/designs/dissertation"
    }
  ],
  "flowers": [
    {
      "_id": "64a28c317120665d0f2ec8c8",
      "caption": "Sweet Pea (Sometimes); pen on paper; 29 x 29 cm; 2020",
      "name": "Sweet Pea (Sometimes)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sweet_pea_sometimes.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sweet_pea_sometimes.jpg",
      "sequence": 56,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sweet_Pea_Sometimes.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sweet_Pea_Sometimes.jpg",
      "url": "/flowers/sweet_pea_sometimes"
    },
    {
      "_id": "64a28c317120665d0f2ec8c9",
      "caption": "Sweet Pea (Always); pen on paper; 29 x 29 cm; 2020",
      "name": "Sweet Pea (Always)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sweet_pea_always.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sweet_pea_always.jpg",
      "sequence": 55,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sweet_Pea_Always.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sweet_Pea_Always.jpg",
      "url": "/flowers/sweet_pea_always"
    },
    {
      "_id": "64a28c317120665d0f2ec8ca",
      "caption": "Sweet Pea (Never); pen on paper; 29 x 29 cm; 2020",
      "name": "Sweet Pea (Never)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sweet_pea_never.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sweet_pea_never.jpg",
      "sequence": 54,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sweet_Pea_Never.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sweet_Pea_Never.jpg",
      "url": "/flowers/sweet_pea_never"
    },
    {
      "_id": "64a28c317120665d0f2ec8cb",
      "caption": "Geranium Cut 1; pen on paper; 29 x 29 cm; 2021",
      "name": "Geranium Cut 1",
      "s3KeyFull": "Matt_Pagett/flowers/full/geranium_cut_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/geranium_cut_1.jpg",
      "sequence": 53,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Geranium_Cut_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Geranium_Cut_1.jpg",
      "url": "/flowers/geranium_cut_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8cc",
      "caption": "Geranium Cut 2; pen on paper; 29 x 29 cm; 2021",
      "name": "Geranium Cut 2",
      "s3KeyFull": "Matt_Pagett/flowers/full/geranium_cut_2.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/geranium_cut_2.jpg",
      "sequence": 52,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Geranium_Cut_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Geranium_Cut_2.jpg",
      "url": "/flowers/geranium_cut_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8cd",
      "caption": "Geranium Cut 3; pen on paper; 29 x 29 cm; 2021",
      "name": "Geranium Cut 3",
      "s3KeyFull": "Matt_Pagett/flowers/full/geranium_cut_3.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/geranium_cut_3.jpg",
      "sequence": 51,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Geranium_Cut_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Geranium_Cut_3.jpg",
      "url": "/flowers/geranium_cut_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8ce",
      "caption": "Begonia Flash R; pen and crayon on paper; 29 x 29 cm; 2021",
      "name": "Begonia Flash R",
      "s3KeyFull": "Matt_Pagett/flowers/full/begonia_flash_r.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/begonia_flash_r.jpg",
      "sequence": 50,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Begonia_Flash_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Begonia_Flash_R.jpg",
      "url": "/flowers/begonia_flash_r"
    },
    {
      "_id": "64a28c317120665d0f2ec8cf",
      "caption": "Begonia Flash G; pen and crayon on paper; 29 x 29 cm; 2021",
      "name": "Begonia Flash G",
      "s3KeyFull": "Matt_Pagett/flowers/full/begonia_flash_g.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/begonia_flash_g.jpg",
      "sequence": 49,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Begonia_Flash_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Begonia_Flash_G.jpg",
      "url": "/flowers/begonia_flash_g"
    },
    {
      "_id": "64a28c317120665d0f2ec8d0",
      "caption": "Begonia Flash B; pen and crayon on paper; 29 x 29 cm; 2021",
      "name": "Begonia Flash B",
      "s3KeyFull": "Matt_Pagett/flowers/full/begonia_flash_b.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/begonia_flash_b.jpg",
      "sequence": 48,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Begonia_Flash_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Begonia_Flash_B.jpg",
      "url": "/flowers/begonia_flash_b"
    },
    {
      "_id": "64a28c317120665d0f2ec8d1",
      "caption": "Rose (Before); pen on paper; 29 x 29 cm; 2020",
      "name": "Rose (Before)",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_before.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_before.jpg",
      "sequence": 47,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Before.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Before.jpg",
      "url": "/flowers/rose_before"
    },
    {
      "_id": "64a28c317120665d0f2ec8d2",
      "caption": "Rose (During); pen on paper; 29 x 29 cm; 2020",
      "name": "Rose (During)",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_during.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_during.jpg",
      "sequence": 46,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_During.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_During.jpg",
      "url": "/flowers/rose_during"
    },
    {
      "_id": "64a28c317120665d0f2ec8d3",
      "caption": "Rose (After); pen on paper; 29 x 29 cm; 2020",
      "name": "Rose (After)",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_after.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_after.jpg",
      "sequence": 45,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_After.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_After.jpg",
      "url": "/flowers/rose_after"
    },
    {
      "_id": "64a28c317120665d0f2ec8d4",
      "caption": "Marigold AR; pen and crayon on paper; 29 x 29 cm; 2021",
      "name": "Marigold AR",
      "s3KeyFull": "Matt_Pagett/flowers/full/marigold_ar.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/marigold_ar.jpg",
      "sequence": 44,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Marigold_AR.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Marigold_AR.jpg",
      "url": "/flowers/marigold_ar"
    },
    {
      "_id": "64a28c317120665d0f2ec8d5",
      "caption": "Marigold BG; pen and crayon on paper; 29 x 29 cm; 2021",
      "name": "Marigold BG",
      "s3KeyFull": "Matt_Pagett/flowers/full/marigold_bg.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/marigold_bg.jpg",
      "sequence": 43,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Marigold_BG.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Marigold_BG.jpg",
      "url": "/flowers/marigold_bg"
    },
    {
      "_id": "64a28c317120665d0f2ec8d6",
      "caption": "Marigold CB; pen and crayon on paper; 29 x 29 cm; 2021",
      "name": "Marigold CB",
      "s3KeyFull": "Matt_Pagett/flowers/full/marigold_cb.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/marigold_cb.jpg",
      "sequence": 42,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Marigold_CB.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Marigold_CB.jpg",
      "url": "/flowers/marigold_cb"
    },
    {
      "_id": "64a28c317120665d0f2ec8d7",
      "caption": "Rose Screen R; pen and crayon on paper; 29 x 29 cm; 2020",
      "name": "Rose Screen R",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_screen_r.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_screen_r.jpg",
      "sequence": 41,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Screen_R.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Screen_R.jpg",
      "url": "/flowers/rose_screen_r"
    },
    {
      "_id": "64a28c317120665d0f2ec8d8",
      "caption": "Rose Screen G; pen and crayon on paper; 29 x 29 cm; 2020",
      "name": "Rose Screen G",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_screen_g.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_screen_g.jpg",
      "sequence": 40,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Screen_G.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Screen_G.jpg",
      "url": "/flowers/rose_screen_g"
    },
    {
      "_id": "64a28c317120665d0f2ec8d9",
      "caption": "Rose Screen B; pen and crayon on paper; 29 x 29 cm; 2020",
      "name": "Rose Screen B",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_screen_b.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_screen_b.jpg",
      "sequence": 39,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Screen_B.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Screen_B.jpg",
      "url": "/flowers/rose_screen_b"
    },
    {
      "_id": "64a28c317120665d0f2ec8da",
      "caption": "Lobelia (Beginning); pen on paper; 20 x 24 cm; 2020",
      "name": "Lobelia (Beginning)",
      "s3KeyFull": "Matt_Pagett/flowers/full/lobelia_beginning.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/lobelia_beginning.jpg",
      "sequence": 38,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Lobelia_Beginning.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Lobelia_Beginning.jpg",
      "url": "/flowers/lobelia_beginning"
    },
    {
      "_id": "64a28c317120665d0f2ec8db",
      "caption": "Lobelia (Middle); pen on paper; 20 x 24 cm; 2020",
      "name": "Lobelia (Middle)",
      "s3KeyFull": "Matt_Pagett/flowers/full/lobelia_middle.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/lobelia_middle.jpg",
      "sequence": 37,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Lobelia_Middle.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Lobelia_Middle.jpg",
      "url": "/flowers/lobelia_middle"
    },
    {
      "_id": "64a28c317120665d0f2ec8dc",
      "caption": "Lobelia (End); pen on paper; 20 x 24 cm; 2020",
      "name": "Lobelia (End)",
      "s3KeyFull": "Matt_Pagett/flowers/full/lobelia_end.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/lobelia_end.jpg",
      "sequence": 36,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Lobelia_End.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Lobelia_End.jpg",
      "url": "/flowers/lobelia_end"
    },
    {
      "_id": "64a28c317120665d0f2ec8dd",
      "caption": "Rose Screen 1; pen and pencil on paper; 29 x 29 cm; 2020",
      "name": "Rose Screen 1",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_screen_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_screen_1.jpg",
      "sequence": 35,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Screen_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Screen_1.jpg",
      "url": "/flowers/rose_screen_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8de",
      "caption": "Rose Screen 2; pen and pencil on paper; 29 x 29 cm; 2020",
      "name": "Rose Screen 2",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_screen_2.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_screen_2.jpg",
      "sequence": 34,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Screen_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Screen_2.jpg",
      "url": "/flowers/rose_screen_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8df",
      "caption": "Rose Screen C; pen and pencil on paper; 29 x 29 cm; 2020",
      "name": "Rose Screen 3",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_screen_3.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_screen_3.jpg",
      "sequence": 33,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_Screen_3.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_Screen_3.jpg",
      "url": "/flowers/rose_screen_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8e0",
      "caption": "Flower for a Funeral (Rose); crayon and charcoal on paper; 42 x 60 cm; 2022",
      "name": "Flower for a Funeral (Rose)",
      "s3KeyFull": "Matt_Pagett/flowers/full/flower_for_a_funeral_rose.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/flower_for_a_funeral_rose.jpg",
      "sequence": 32,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Flower_for_a_Funeral_Rose.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Flower_for_a_Funeral_Rose.jpg",
      "url": "/flowers/flower_for_a_funeral_rose"
    },
    {
      "_id": "64a28c317120665d0f2ec8e1",
      "caption": "Flower for a Funeral (Eucalyptus); crayon and charcoal on paper; 42 x 60 cm; 2022",
      "name": "Flower for a Funeral (Eucalyptus)",
      "s3KeyFull": "Matt_Pagett/flowers/full/flower_for_a_funeral_eucalyptus.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/flower_for_a_funeral_eucalyptus.jpg",
      "sequence": 31,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Flower_for_a_Funeral_Eucalyptus.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Flower_for_a_Funeral_Eucalyptus.jpg",
      "url": "/flowers/flower_for_a_funeral_eucalyptus"
    },
    {
      "_id": "64a28c317120665d0f2ec8e2",
      "caption": "Flower for a Funeral (Daffodil); crayon and charcoal on paper; 42 x 60 cm; 2022",
      "name": "Flower for a Funeral (Daffodil)",
      "s3KeyFull": "Matt_Pagett/flowers/full/flower_for_a_funeral_daffodil.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/flower_for_a_funeral_daffodil.jpg",
      "sequence": 30,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Flower_for_a_Funeral_Daffodil.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Flower_for_a_Funeral_Daffodil.jpg",
      "url": "/flowers/flower_for_a_funeral_daffodil"
    },
    {
      "_id": "64a28c317120665d0f2ec8e3",
      "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Acanthus); hand-coloured photolithograph; 30 x 42 cm; 2012",
      "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Acanthus)",
      "s3KeyFull": "Matt_Pagett/flowers/full/kl10_flower_for_a_flowerbed_southwark_park_london_acanthus.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/kl10_flower_for_a_flowerbed_southwark_park_london_acanthus.jpg",
      "sequence": 29,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Acanthus.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Acanthus.jpg",
      "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_acanthus"
    },
    {
      "_id": "64a28c317120665d0f2ec8e4",
      "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Coleus); hand-coloured photolithograph; 30 x 42 cm; 2012",
      "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Coleus)",
      "s3KeyFull": "Matt_Pagett/flowers/full/kl10_flower_for_a_flowerbed_southwark_park_london_coleus.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/kl10_flower_for_a_flowerbed_southwark_park_london_coleus.jpg",
      "sequence": 28,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Coleus.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Coleus.jpg",
      "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_coleus"
    },
    {
      "_id": "64a28c317120665d0f2ec8e5",
      "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Delphinium); hand-coloured photolithograph; 30 x 42 cm; 2012",
      "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Delphinium)",
      "s3KeyFull": "Matt_Pagett/flowers/full/kl10_flower_for_a_flowerbed_southwark_park_london_delphinium.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/kl10_flower_for_a_flowerbed_southwark_park_london_delphinium.jpg",
      "sequence": 27,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Delphinium.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Delphinium.jpg",
      "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_delphinium"
    },
    {
      "_id": "64a28c317120665d0f2ec8e6",
      "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Lavender); hand-coloured photolithograph; 30 x 42 cm; 2012",
      "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Lavender)",
      "s3KeyFull": "Matt_Pagett/flowers/full/kl10_flower_for_a_flowerbed_southwark_park_london_lavender.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/kl10_flower_for_a_flowerbed_southwark_park_london_lavender.jpg",
      "sequence": 26,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Lavender.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Lavender.jpg",
      "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_lavender"
    },
    {
      "_id": "64a28c317120665d0f2ec8e7",
      "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Sempervivum); hand-coloured photolithograph; 30 x 42 cm; 2012",
      "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Sempervivum)",
      "s3KeyFull": "Matt_Pagett/flowers/full/kl10_flower_for_a_flowerbed_southwark_park_london_sempervium.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/kl10_flower_for_a_flowerbed_southwark_park_london_sempervium.jpg",
      "sequence": 25,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Sempervivum.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Sempervivum.jpg",
      "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_sempervium"
    },
    {
      "_id": "64a28c317120665d0f2ec8e8",
      "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Snapdragon); hand-coloured photolithograph; 30 x 42 cm; 2012",
      "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Snapdragon)",
      "s3KeyFull": "Matt_Pagett/flowers/full/kl10_flower_for_a_flowerbed_southwark_park_london_snapdragon.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/kl10_flower_for_a_flowerbed_southwark_park_london_snapdragon.jpg",
      "sequence": 24,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Snapdragon.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/KL10_Flower_for_a_Flowerbed_Southwark_Park_London_Snapdragon.jpg",
      "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_snapdragon"
    },
    {
      "_id": "64a28c317120665d0f2ec8e9",
      "caption": "Rose from a petrol station 1; crayon and charcoal on paper; 83 x 83 cm; 2021",
      "name": "Rose from a petrol station 1",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_from_a_petrol_station_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_from_a_petrol_station_1.jpg",
      "sequence": 23,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_from_a_petrol_station_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_from_a_petrol_station_1.jpg",
      "url": "/flowers/rose_from_a_petrol_station_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8ea",
      "caption": "Rose from a petrol station 2; crayon and charcoal on paper; 83 x 83 cm; 2021",
      "name": "Rose from a petrol station 2",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_from_a_petrol_station_2.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_from_a_petrol_station_2.jpg",
      "sequence": 22,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_from_a_petrol_station_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_from_a_petrol_station_2.jpg",
      "url": "/flowers/rose_from_a_petrol_station_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8eb",
      "caption": "Rose in my neighbour's garden 1; crayon and charcoal on paper; 74 x 74 cm; 2021",
      "name": "Rose in my neighbour's garden 1",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_in_my_neighbours_garden_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_in_my_neighbours_garden_1.jpg",
      "sequence": 21,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_in_my_neighbours_garden_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_in_my_neighbours_garden_1.jpg",
      "url": "/flowers/rose_in_my_neighbours_garden_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8ec",
      "caption": "Rose in my garden 1; crayon and charcoal on paper; 49 x 49 cm; 2021",
      "name": "Rose in my garden 1",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_in_my_garden_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_in_my_garden_1.jpg",
      "sequence": 20,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_in_my_garden_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_in_my_garden_1.jpg",
      "url": "/flowers/rose_in_my_garden_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8ed",
      "caption": "Rose overhanging an allotment 1; crayon and charcoal on paper; 42 x 42 cm; 2021",
      "name": "Rose overhanging an allotment 1",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_overhanging_an_allotment_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_overhanging_an_allotment_1.jpg",
      "sequence": 19,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_overhanging_an_allotment_1.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_overhanging_an_allotment_1.jpg",
      "url": "/flowers/rose_overhanging_an_allotment_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8ee",
      "caption": "Rose in my garden 2; crayon and charcoal on paper; 36 x 36 cm; 2021",
      "name": "Rose in my garden 2",
      "s3KeyFull": "Matt_Pagett/flowers/full/rose_in_my_garden_2.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/rose_in_my_garden_2.jpg",
      "sequence": 18,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Rose_in_my_garden_2.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Rose_in_my_garden_2.jpg",
      "url": "/flowers/rose_in_my_garden_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8ef",
      "caption": "Roses in a Monastery exhibition view, 2021",
      "name": "Roses in a Monastery exhibition view",
      "s3KeyFull": "Matt_Pagett/flowers/full/roses_in_a_monastery_exhibition_view_1.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/roses_in_a_monastery_exhibition_view_1.jpg",
      "sequence": 17,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Roses_in_a_Monastery_exhibition_view.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Roses_in_a_Monastery_exhibition_view.jpg",
      "url": "/flowers/roses_in_a_monastery_exhibition_view_1"
    },
    {
      "_id": "64a28c317120665d0f2ec8f0",
      "caption": "Roses in a Monastery exhibition view, 2021",
      "name": "Roses in a Monastery exhibition view",
      "s3KeyFull": "Matt_Pagett/flowers/full/roses_in_a_monastery_exhibition_view_2.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/roses_in_a_monastery_exhibition_view_2.jpg",
      "sequence": 16,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Roses_in_a_Monastery_exhibition_view.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Roses_in_a_Monastery_exhibition_view.jpg",
      "url": "/flowers/roses_in_a_monastery_exhibition_view_2"
    },
    {
      "_id": "64a28c317120665d0f2ec8f1",
      "caption": "Roses in a Monastery exhibition view, 2021",
      "name": "Roses in a Monastery exhibition view",
      "s3KeyFull": "Matt_Pagett/flowers/full/roses_in_a_monastery_exhibition_view_3.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/roses_in_a_monastery_exhibition_view_3.jpg",
      "sequence": 15,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Roses_in_a_Monastery_exhibition_view.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Roses_in_a_Monastery_exhibition_view.jpg",
      "url": "/flowers/roses_in_a_monastery_exhibition_view_3"
    },
    {
      "_id": "64a28c317120665d0f2ec8f2",
      "caption": "Daffodil (Red and Black); pen on paper; 26 x 26 cm; 2022",
      "name": "Daffodil (Red and Black)",
      "s3KeyFull": "Matt_Pagett/flowers/full/daffodil_red_and_black.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/daffodil_red_and_black.jpg",
      "sequence": 14,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Daffodil_Red_and_Black.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Daffodil_Red_and_Black.jpg",
      "url": "/flowers/daffodil_red_and_black"
    },
    {
      "_id": "64a28c317120665d0f2ec8f3",
      "caption": "Hydrangea (Green and Black); pen on paper; 26 x 26 cm; 2022",
      "name": "Hydrangea (Green and Black)",
      "s3KeyFull": "Matt_Pagett/flowers/full/hydrangea_green_and_black.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/hydrangea_green_and_black.jpg",
      "sequence": 13,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Hydrangea_Green_and_Black.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Hydrangea_Green_and_Black.jpg",
      "url": "/flowers/hydrangea_green_and_black"
    },
    {
      "_id": "64a28c317120665d0f2ec8f4",
      "caption": "Amaryllis (Blue and Black); pen on paper; 26 x 26 cm; 2022",
      "name": "Amaryllis (Blue and Black)",
      "s3KeyFull": "Matt_Pagett/flowers/full/amaryllis_blue_and_black.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/amaryllis_blue_and_black.jpg",
      "sequence": 12,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Amaryllis_Blue_and_Black.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Amaryllis_Blue_and_Black.jpg",
      "url": "/flowers/amaryllis_blue_and_black"
    },
    {
      "_id": "64a28c317120665d0f2ec8f5",
      "caption": "Sub Rosa (7557d8); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (7557d8)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_7557d8.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_7557d8.jpg",
      "sequence": 11,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_7557d8.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_7557d8.jpg",
      "url": "/flowers/sub_rosa_7557d8"
    },
    {
      "_id": "64a28c317120665d0f2ec8f6",
      "caption": "Sub Rosa (75508); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (75508)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_75508.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_75508.jpg",
      "sequence": 10,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_75508.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_75508.jpg",
      "url": "/flowers/sub_rosa_75508"
    },
    {
      "_id": "64a28c317120665d0f2ec8f7",
      "caption": "Sub Rosa (2627319); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (2627319)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_2627319.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_2627319.jpg",
      "sequence": 9,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_2627319.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_2627319.jpg",
      "url": "/flowers/sub_rosa_2627319"
    },
    {
      "_id": "64a28c317120665d0f2ec8f8",
      "caption": "Sub Rosa (170d956); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (170d956)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_170d956.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_170d956.jpg",
      "sequence": 8,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_170d956.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_170d956.jpg",
      "url": "/flowers/sub_rosa_170d956"
    },
    {
      "_id": "64a28c317120665d0f2ec8f9",
      "caption": "Sub Rosa (8733939); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (8733939)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_8733939.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_8733939.jpg",
      "sequence": 7,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_8733939.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_8733939.jpg",
      "url": "/flowers/sub_rosa_8733939"
    },
    {
      "_id": "64a28c317120665d0f2ec8fa",
      "caption": "Sub Rosa (SingleRose-wallpaper-Background); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (SingleRose-wallpaper-Background)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_singleRose-wallpaper-background.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_singleRose-wallpaper-background.jpg",
      "sequence": 6,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_SingleRose-wallpaper-Background.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_SingleRose-wallpaper-Background.jpg",
      "url": "/flowers/sub_rosa_singleRose-wallpaper-background"
    },
    {
      "_id": "64a28c317120665d0f2ec8fb",
      "caption": "Sub Rosa (75581a); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (75581a)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_75581a.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_75581a.jpg",
      "sequence": 5,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_75581a.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_75581a.jpg",
      "url": "/flowers/sub_rosa_75581a"
    },
    {
      "_id": "64a28c317120665d0f2ec8fc",
      "caption": "Sub Rosa (1172926); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (1172926)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_1172926.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_1172926.jpg",
      "sequence": 4,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_1172926.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_1172926.jpg",
      "url": "/flowers/sub_rosa_1172926"
    },
    {
      "_id": "64a28c317120665d0f2ec8fd",
      "caption": "Sub Rosa (Rose5); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (Rose5)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_rose5.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_rose5.jpg",
      "sequence": 3,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_Rose5.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_Rose5.jpg",
      "url": "/flowers/sub_rosa_rose5"
    },
    {
      "_id": "64a28c317120665d0f2ec8fe",
      "caption": "Sub Rosa (8534670); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (8534670)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_8534670.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_8534670.jpg",
      "sequence": 2,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_8534670.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_8534670.jpg",
      "url": "/flowers/sub_rosa_8534670"
    },
    {
      "_id": "64a28c317120665d0f2ec8ff",
      "caption": "Sub Rosa (755234); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (755234)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_755234.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_755234.jpg",
      "sequence": 1,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_755234.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_755234.jpg",
      "url": "/flowers/sub_rosa_755234"
    },
    {
      "_id": "64a28c317120665d0f2ec900",
      "caption": "Sub Rosa (754fd8); pen on paper; 30 x 42 cm; 2014",
      "name": "Sub Rosa (754fd8)",
      "s3KeyFull": "Matt_Pagett/flowers/full/sub_rosa_754fd8.jpg",
      "s3KeyThumb": "Matt_Pagett/flowers/thumb/sub_rosa_754fd8.jpg",
      "sequence": 0,
      "series": "flowers",
      "srcFull": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/full/Sub_Rosa_754fd8.jpg",
      "srcThumb": "https://artist-api.s3.amazonaws.com/Matt_Pagett/flowers/thumb/Sub_Rosa_754fd8.jpg",
      "url": "/flowers/sub_rosa_754fd8"
    }
  ]
}


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
        component: NewImage,
        props: {
          allImages: images
        }
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
//})
// .catch(error => {
//   console.log(error)
// })