import { createRouter, createWebHistory, onBeforeRouteLeave} from "vue-router";
import Homepage from '../views/homepage.vue'
import About from '../views/about.vue'
import Gallery from '../views/gallery.vue'
import Image from '../views/image.vue'
import NotFound from '../views/not-found.vue'

const bodies = [
  {
    "url": "/bodies/gardener_1_r",
    "name": "Gardener 1 (R)",
    "srcThumb": "/images/360_bodies/360_bodies_1A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_1A.jpg",
    "caption": "Gardener 1 (R); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_1_g",
    "name": "Gardener 1 (G)",
    "srcThumb": "/images/360_bodies/360_bodies_1B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_1B.jpg",
    "caption": "Gardener 1 (G); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_1_b",
    "name": "Gardener 1 (B)",
    "srcThumb": "/images/360_bodies/360_bodies_1C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_1C.jpg",
    "caption": "Gardener 1 (R); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_2_r",
    "name": "Gardener 2 (R)",
    "srcThumb": "/images/360_bodies/360_bodies_2A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_2A.jpg",
    "caption": "Gardener 2 (R); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_2_g",
    "name": "Gardener 2 (G)",
    "srcThumb": "/images/360_bodies/360_bodies_2B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_2B.jpg",
    "caption": "Gardener 2 (G); pen and crayon on paper; 18 x 18 cm; 2021"
  },
  {
    "url": "/bodies/gardener_2_b",
    "name": "Gardener 2 (B)",
    "srcThumb": "/images/360_bodies/360_bodies_2C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_2C.jpg",
    "caption": "Gardener 2 (B); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_3_(r)",
    "name": "Gardener 3 (R)",
    "srcThumb": "/images/360_bodies/360_bodies_3A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_3A.jpg",
    "caption": "Gardener 3 (R); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_3_g",
    "name": "Gardener 3 (G)",
    "srcThumb": "/images/360_bodies/360_bodies_3B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_3B.jpg",
    "caption": "Gardener 3 (G); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_3_b",
    "name": "Gardener 3 (B)",
    "srcThumb": "/images/360_bodies/360_bodies_3C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_3C.jpg",
    "caption": "Gardener 3 (B); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_4_r",
    "name": "Gardener 4 (R)",
    "srcThumb": "/images/360_bodies/360_bodies_4A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_4A.jpg",
    "caption": "Gardener 4 (R); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_4_g",
    "name": "Gardener 4 (G)",
    "srcThumb": "/images/360_bodies/360_bodies_4B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_4B.jpg",
    "caption": "Gardener 4 (G); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/gardener_4_b",
    "name": "Gardener 4 (B)",
    "srcThumb": "/images/360_bodies/360_bodies_4C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_4C.jpg",
    "caption": "Gardener 4 (B); pen and crayon on paper; 18 x 18 cm; 2021",
    "series": "bodies"
  },
  {
    "url": "/bodies/7987419-insect-stag-beetle-isolated-in-white",
    "name": "7987419-insect-stag-beetle-isolated-in-white",
    "srcThumb": "/images/360_bodies/360_bodies_5A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_5A.jpg",
    "caption": "7987419-insect-stag-beetle-isolated-in-white; pen on paper; 21 x 30 cm; 2015",
    "series": "bodies"
  },
  {
    "url": "/bodies/insect_safari_-_beetle_04",
    "name": "Insect_Safari_-_beetle_04",
    "srcThumb": "/images/360_bodies/360_bodies_5B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_5B.jpg",
    "caption": "Insect_Safari_-_beetle_04; pen on paper; 21 x 30 cm; 2015",
    "series": "bodies"
  },
  {
    "url": "/bodies/picture_004_Montoya_8-19-9",
    "name": "Picture 004 Montoya 8-19-9",
    "srcThumb": "/images/360_bodies/360_bodies_5C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_5C.jpg",
    "caption": "Picture 004 Montoya 8-19-9; pen on paper; 21 x 30 cm; 2015",
    "series": "bodies"
  },
  {
    "url": "/bodies/blue_ground_beetle_urjsa",
    "name": "Blue_Ground_beetle_urjsa",
    "srcThumb": "/images/360_bodies/360_bodies_6A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_6A.jpg",
    "caption": "Blue_Ground_beetle_urjsa; pen on paper; 21 x 30 cm; 2015",
    "series": "bodies"
  },
  {
    "url": "/bodies/longicorne",
    "name": "longicorne",
    "srcThumb": "/images/360_bodies/360_bodies_6B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_6B.jpg",
    "caption": "longicorne; pen on paper; 21 x 30 cm; 2015",
    "series": "bodies"
  },
  {
    "url": "/bodies/il_fullxfull_140575002",
    "name": "il fullxfull.140575002",
    "srcThumb": "/images/360_bodies/360_bodies_6C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_6C.jpg",
    "caption": "il fullxfull.140575002; pen on paper; 21 x 30 cm; 2015",
    "series": "bodies"
  },
  {
    "url": "/bodies/flip_horizontal_smoker_1",
    "name": "Flip Horizontal: Smoker 1",
    "srcThumb": "/images/360_bodies/360_bodies_7A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_7A.jpg",
    "caption": "Flip Horizontal: Smoker 1; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019",
    "series": "bodies"
  },
  {
    "url": "/bodies/flip_horizontal_view",
    "name": "Flip Horizontal: view",
    "srcThumb": "/images/360_bodies/360_bodies_7B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_7B.jpg",
    "caption": "Flip Horizontal: view; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019",
    "series": "bodies"
  },
  {
    "url": "/bodies/flip_horizontal_the_smoking_clock",
    "name": "Flip Horizontal: The Smoking Clock",
    "srcThumb": "/images/360_bodies/360_bodies_7C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_7C.jpg",
    "caption": "Flip Horizontal: The Smoking Clock; charcoal and chalk on 60 x 21 x 30 cm cardboard panels; dimensions variable; 2019",
    "series": "bodies"
  },
  {
    "url": "/bodies/jock_1",
    "name": "Jock 1",
    "srcThumb": "/images/360_bodies/360_bodies_8A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_8A.jpg",
    "caption": "Jock 1; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/jock_2",
    "name": "Jock 2",
    "srcThumb": "/images/360_bodies/360_bodies_8B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_8B.jpg",
    "caption": "Jock 2; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/jock_3",
    "name": "Jock 3",
    "srcThumb": "/images/360_bodies/360_bodies_8C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_8C.jpg",
    "caption": "Jock 3; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/shorts_1",
    "name": "Shorts 1",
    "srcThumb": "/images/360_bodies/360_bodies_9A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_9A.jpg",
    "caption": "Shorts 1; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/shorts_2",
    "name": "Shorts 2",
    "srcThumb": "/images/360_bodies/360_bodies_9B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_9B.jpg",
    "caption": "Shorts 2; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/shorts_3",
    "name": "Shorts 3",
    "srcThumb": "/images/360_bodies/360_bodies_9C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_9C.jpg",
    "caption": "Shorts 3; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/trainer_1",
    "name": "Trainer 1",
    "srcThumb": "/images/360_bodies/360_bodies_10A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_10A.jpg",
    "caption": "Trainer 1; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/trainer_2",
    "name": "Trainer 2",
    "srcThumb": "/images/360_bodies/360_bodies_10B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_10B.jpg",
    "caption": "Trainer 2; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/trainer_3",
    "name": "Trainer 3",
    "srcThumb": "/images/360_bodies/360_bodies_10C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_10C.jpg",
    "caption": "Trainer 3; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/sock_1",
    "name": "Sock 1",
    "srcThumb": "/images/360_bodies/360_bodies_11A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_11A.jpg",
    "caption": "Sock 1; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/sock_2",
    "name": "Sock 2",
    "srcThumb": "/images/360_bodies/360_bodies_11B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_11B.jpg",
    "caption": "Sock 2; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/sock_3",
    "name": "Sock 3",
    "srcThumb": "/images/360_bodies/360_bodies_11C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_11C.jpg",
    "caption": "Sock 3; pen on paper; 21 x 21 cm, 2020",
    "series": "bodies"
  },
  {
    "url": "/bodies/trackies_r",
    "name": "Trackies (R)",
    "srcThumb": "/images/360_bodies/360_bodies_12A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_12A.jpg",
    "caption": "Trackies (R); pen and crayon on paper; 21 x 21 cm; 2022",
    "series": "bodies"
  },
  {
    "url": "/bodies/trackies_g",
    "name": "Trackies (G)",
    "srcThumb": "/images/360_bodies/360_bodies_12B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_12B.jpg",
    "caption": "Trackies (G); pen and crayon on paper; 21 x 21 cm; 2022",
    "series": "bodies"
  },
  {
    "url": "/bodies/trackies_b",
    "name": "Trackies (B)",
    "srcThumb": "/images/360_bodies/360_bodies_12C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_12C.jpg",
    "caption": "Trackies (B); pen and crayon on paper; 21 x 21 cm; 2022",
    "series": "bodies"
  },
  {
    "url": "/bodies/backstreet_1r",
    "name": "Backstreet 1R",
    "srcThumb": "/images/360_bodies/360_bodies_13A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_13A.jpg",
    "caption": "Backstreet 1R; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017",
    "series": "bodies"
  },
  {
    "url": "/bodies/backstreet_2g",
    "name": "Backstreet 2G",
    "srcThumb": "/images/360_bodies/360_bodies_13B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_13B.jpg",
    "caption": "Backstreet 2G; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017",
    "series": "bodies"
  },
  {
    "url": "/bodies/backstreet_3b",
    "name": "Backstreet 3B",
    "srcThumb": "/images/360_bodies/360_bodies_13C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_13C.jpg",
    "caption": "Backstreet 3B; charcoal and pastel on 16 sheets of A4 office paper; 105 x 180 cm; 2017",
    "series": "bodies"
  },
  {
    "url": "/bodies/backstreet_4r",
    "name": "Backstreet 4R",
    "srcThumb": "/images/360_bodies/360_bodies_14A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_14A.jpg",
    "caption": "Backstreet 4R; charcoal and pastel on 16 sheets of A4 office paper; 105 x 90 cm; 2017",
    "series": "bodies"
  },
  {
    "url": "/bodies/backstreet_5b",
    "name": "Backstreet 5B",
    "srcThumb": "/images/360_bodies/360_bodies_14B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_14B.jpg",
    "caption": "Backstreet 5B; charcoal and pastel on 16 sheets of A4 office paper; 63 x 90 cm; 2017",
    "series": "bodies"
  },
  {
    "url": "/bodies/glove_for_a_film",
    "name": "Glove for a Film",
    "srcThumb": "/images/360_bodies/360_bodies_14C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_14C.jpg",
    "caption": "Glove for a Film; pen on paper; 21 x 30 cm; 2022",
    "series": "bodies"
  },
  {
    "url": "/bodies/fight_for_a_cassette",
    "name": "Fight for a Cassette",
    "srcThumb": "/images/360_bodies/360_bodies_15A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_15A.jpg",
    "caption": "Fight for a Cassette; pen on paper; 30 x 42 cm; 2022",
    "series": "bodies"
  },
  {
    "url": "/bodies/dear_david_1",
    "name": "Dear David 1",
    "srcThumb": "/images/360_bodies/360_bodies_15B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_15B.jpg",
    "caption": "Dear David 1; pen on paper; 40 x 60 cm; 2016",
    "series": "bodies"
  },
  {
    "url": "/bodies/dear_david_2",
    "name": "Dear David 2",
    "srcThumb": "/images/360_bodies/360_bodies_15C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_15C.jpg",
    "caption": "Dear David 2; pen on paper; 40 x 60 cm; 2016",
    "series": "bodies"
  },
  {
    "url": "/bodies/dear_david_3",
    "name": "Dear David 3",
    "srcThumb": "/images/360_bodies/360_bodies_16A.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_16A.jpg",
    "caption": "Dear David 3; pen on paper; 40 x 60 cm; 2016",
    "series": "bodies"
  },
  {
    "url": "/bodies/dear_david_4",
    "name": "Dear David 4",
    "srcThumb": "/images/360_bodies/360_bodies_16B.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_16B.jpg",
    "caption": "Dear David 4; pen on paper; 40 x 60 cm; 2016",
    "series": "bodies"
  },
  {
    "url": "/bodies/dear_david_5",
    "name": "Dear David 5",
    "srcThumb": "/images/360_bodies/360_bodies_16C.jpg",
    "srcFull": "/images/2480_bodies/2480_bodies_16C.jpg",
    "caption": "Dear David 5; pen on paper; 40 x 60 cm; 2016",
    "series": "bodies"
  }
]

const flowers = [
  {
    "url": "/flowers/sweet_pea_sometimes",
    "name": "Sweet Pea (Sometimes)",
    "srcThumb": "/images/360_flowers/360_flowers_1A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_1A.jpg",
    "caption": "Sweet Pea (Sometimes); pen on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/sweet_pea_always",
    "name": "Sweet Pea (Always)",
    "srcThumb": "/images/360_flowers/360_flowers_1B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_1B.jpg",
    "caption": "Sweet Pea (Always); pen on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/sweet_pea_never",
    "name": "Sweet Pea (Never)",
    "srcThumb": "/images/360_flowers/360_flowers_1C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_1C.jpg",
    "caption": "Sweet Pea (Never); pen on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/geranium_cut_1",
    "name": "Geranium Cut 1",
    "srcThumb": "/images/360_flowers/360_flowers_2A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_2A.jpg",
    "caption": "Geranium Cut 1; pen on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/geranium_cut_2",
    "name": "Geranium Cut 2",
    "srcThumb": "/images/360_flowers/360_flowers_2B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_2B.jpg",
    "caption": "Geranium Cut 2; pen on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/geranium_cut_3",
    "name": "Geranium Cut 3",
    "srcThumb": "/images/360_flowers/360_flowers_2C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_2C.jpg",
    "caption": "Geranium Cut 3; pen on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/begonia_flash_r",
    "name": "Begonia Flash R",
    "srcThumb": "/images/360_flowers/360_flowers_3A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_3A.jpg",
    "caption": "Begonia Flash R; pen and crayon on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/begonia_flash_g",
    "name": "Begonia Flash G",
    "srcThumb": "/images/360_flowers/360_flowers_3B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_3B.jpg",
    "caption": "Begonia Flash G; pen and crayon on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/begonia_flash_b",
    "name": "Begonia Flash B",
    "srcThumb": "/images/360_flowers/360_flowers_3C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_3C.jpg",
    "caption": "Begonia Flash B; pen and crayon on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_before",
    "name": "Rose (Before)",
    "srcThumb": "/images/360_flowers/360_flowers_4A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_4A.jpg",
    "caption": "Rose (Before); pen on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_during",
    "name": "Rose (During)",
    "srcThumb": "/images/360_flowers/360_flowers_4B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_4B.jpg",
    "caption": "Rose (During); pen on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_after",
    "name": "Rose (After)",
    "srcThumb": "/images/360_flowers/360_flowers_4C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_4C.jpg",
    "caption": "Rose (After); pen on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/marigold_ar",
    "name": "Marigold AR",
    "srcThumb": "/images/360_flowers/360_flowers_5A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_5A.jpg",
    "caption": "Marigold AR; pen and crayon on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/marigold_bg",
    "name": "Marigold BG",
    "srcThumb": "/images/360_flowers/360_flowers_5B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_5B.jpg",
    "caption": "Marigold BG; pen and crayon on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/marigold_cb",
    "name": "Marigold CB",
    "srcThumb": "/images/360_flowers/360_flowers_5C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_5C.jpg",
    "caption": "Marigold CB; pen and crayon on paper; 29 x 29 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_screen_r",
    "name": "Rose Screen R",
    "srcThumb": "/images/360_flowers/360_flowers_6A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_6A.jpg",
    "caption": "Rose Screen R; pen and crayon on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_screen_g",
    "name": "Rose Screen G",
    "srcThumb": "/images/360_flowers/360_flowers_6B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_6B.jpg",
    "caption": "Rose Screen G; pen and crayon on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_screen_b",
    "name": "Rose Screen B",
    "srcThumb": "/images/360_flowers/360_flowers_6C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_6C.jpg",
    "caption": "Rose Screen B; pen and crayon on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/lobelia_beginning",
    "name": "Lobelia (Beginning)",
    "srcThumb": "/images/360_flowers/360_flowers_7A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_7A.jpg",
    "caption": "Lobelia (Beginning); pen on paper; 20 x 24 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/lobelia_middle",
    "name": "Lobelia (Middle)",
    "srcThumb": "/images/360_flowers/360_flowers_7B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_7B.jpg",
    "caption": "Lobelia (Middle); pen on paper; 20 x 24 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/lobelia_end",
    "name": "Lobelia (End)",
    "srcThumb": "/images/360_flowers/360_flowers_7C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_7C.jpg",
    "caption": "Lobelia (End); pen on paper; 20 x 24 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_screen_1",
    "name": "Rose Screen 1",
    "srcThumb": "/images/360_flowers/360_flowers_8A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_8A.jpg",
    "caption": "Rose Screen 1; pen and pencil on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_screen_2",
    "name": "Rose Screen 2",
    "srcThumb": "/images/360_flowers/360_flowers_8B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_8B.jpg",
    "caption": "Rose Screen 2; pen and pencil on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_screen_3",
    "name": "Rose Screen 3",
    "srcThumb": "/images/360_flowers/360_flowers_8C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_8C.jpg",
    "caption": "Rose Screen C; pen and pencil on paper; 29 x 29 cm; 2020",
    "series": "flowers"
  },
  {
    "url": "/flowers/flower_for_a_funeral_rose",
    "name": "Flower for a Funeral (Rose)",
    "srcThumb": "/images/360_flowers/360_flowers_9A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_9A.jpg",
    "caption": "Flower for a Funeral (Rose); crayon and charcoal on paper; 42 x 60 cm; 2022",
    "series": "flowers"
  },
  {
    "url": "/flowers/flower_for_a_funeral_eucalyptus",
    "name": "Flower for a Funeral (Eucalyptus)",
    "srcThumb": "/images/360_flowers/360_flowers_9B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_9B.jpg",
    "caption": "Flower for a Funeral (Eucalyptus); crayon and charcoal on paper; 42 x 60 cm; 2022",
    "series": "flowers"
  },
  {
    "url": "/flowers/flower_for_a_funeral_daffodil",
    "name": "Flower for a Funeral (Daffodil)",
    "srcThumb": "/images/360_flowers/360_flowers_9C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_9C.jpg",
    "caption": "Flower for a Funeral (Daffodil); crayon and charcoal on paper; 42 x 60 cm; 2022",
    "series": "flowers"
  },
  {
    "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_acanthus",
    "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Acanthus)",
    "srcThumb": "/images/360_flowers/360_flowers_10A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_10A.jpg",
    "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Acanthus); hand-coloured photolithograph; 30 x 42 cm; 2012",
    "series": "flowers"
  },
  {
    "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_coleus",
    "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Coleus)",
    "srcThumb": "/images/360_flowers/360_flowers_10B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_10B.jpg",
    "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Coleus); hand-coloured photolithograph; 30 x 42 cm; 2012",
    "series": "flowers"
  },
  {
    "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_delphinium",
    "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Delphinium)",
    "srcThumb": "/images/360_flowers/360_flowers_10C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_10C.jpg",
    "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Delphinium); hand-coloured photolithograph; 30 x 42 cm; 2012",
    "series": "flowers"
  },
  {
    "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_lavender",
    "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Lavender)",
    "srcThumb": "/images/360_flowers/360_flowers_11A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_11A.jpg",
    "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Lavender); hand-coloured photolithograph; 30 x 42 cm; 2012",
    "series": "flowers"
  },
  {
    "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_sempervium",
    "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Sempervivum)",
    "srcThumb": "/images/360_flowers/360_flowers_11B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_11B.jpg",
    "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Sempervivum); hand-coloured photolithograph; 30 x 42 cm; 2012",
    "series": "flowers"
  },
  {
    "url": "/flowers/kl10_flower_for_a_flowerbed_southwark_park_london_snapdragon",
    "name": "KL10: Flower for a Flowerbed, Southwark Park, London (Snapdragon)",
    "srcThumb": "/images/360_flowers/360_flowers_11C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_11C.jpg",
    "caption": "KL10: Flower for a Flowerbed, Southwark Park, London (Snapdragon); hand-coloured photolithograph; 30 x 42 cm; 2012",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_from_a_petrol_station_1",
    "name": "Rose from a petrol station 1",
    "srcThumb": "/images/360_flowers/360_flowers_12A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_12A.jpg",
    "caption": "Rose from a petrol station 1; crayon and charcoal on paper; 83 x 83 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_from_a_petrol_station_2",
    "name": "Rose from a petrol station 2",
    "srcThumb": "/images/360_flowers/360_flowers_12B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_12B.jpg",
    "caption": "Rose from a petrol station 2; crayon and charcoal on paper; 83 x 83 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_in_my_neighbours_garden_1",
    "name": "Rose in my neighbour's garden 1",
    "srcThumb": "/images/360_flowers/360_flowers_12C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_12C.jpg",
    "caption": "Rose in my neighbour's garden 1; crayon and charcoal on paper; 74 x 74 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_in_my_garden_1",
    "name": "Rose in my garden 1",
    "srcThumb": "/images/360_flowers/360_flowers_13A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_13A.jpg",
    "caption": "Rose in my garden 1; crayon and charcoal on paper; 49 x 49 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_overhanging_an_allotment_1",
    "name": "Rose overhanging an allotment 1",
    "srcThumb": "/images/360_flowers/360_flowers_13B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_13B.jpg",
    "caption": "Rose overhanging an allotment 1; crayon and charcoal on paper; 42 x 42 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/rose_in_my_garden_2",
    "name": "Rose in my garden 2",
    "srcThumb": "/images/360_flowers/360_flowers_13C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_13C.jpg",
    "caption": "Rose in my garden 2; crayon and charcoal on paper; 36 x 36 cm; 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/roses_in_a_monastery_exhibition_view_1",
    "name": "Roses in a Monastery exhibition view",
    "srcThumb": "/images/360_flowers/360_flowers_14A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_14A.jpg",
    "caption": "Roses in a Monastery exhibition view, 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/roses_in_a_monastery_exhibition_view_2",
    "name": "Roses in a Monastery exhibition view",
    "srcThumb": "/images/360_flowers/360_flowers_14B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_14B.jpg",
    "caption": "Roses in a Monastery exhibition view, 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/roses_in_a_monastery_exhibition_view_3",
    "name": "Roses in a Monastery exhibition view",
    "srcThumb": "/images/360_flowers/360_flowers_14C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_14C.jpg",
    "caption": "Roses in a Monastery exhibition view, 2021",
    "series": "flowers"
  },
  {
    "url": "/flowers/daffodil_red_and_black",
    "name": "Daffodil (Red and Black)",
    "srcThumb": "/images/360_flowers/360_flowers_15A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_15A.jpg",
    "caption": "Daffodil (Red and Black); pen on paper; 26 x 26 cm; 2022",
    "series": "flowers"
  },
  {
    "url": "/flowers/hydrangea_green_and_black",
    "name": "Hydrangea (Green and Black)",
    "srcThumb": "/images/360_flowers/360_flowers_15B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_15B.jpg",
    "caption": "Hydrangea (Green and Black); pen on paper; 26 x 26 cm; 2022",
    "series": "flowers"
  },
  {
    "url": "/flowers/amaryllis_blue_and_black",
    "name": "Amaryllis (Blue and Black)",
    "srcThumb": "/images/360_flowers/360_flowers_15C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_15C.jpg",
    "caption": "Amaryllis (Blue and Black); pen on paper; 26 x 26 cm; 2022",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_7557d8",
    "name": "Sub Rosa (7557d8)",
    "srcThumb": "/images/360_flowers/360_flowers_16A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_16A.jpg",
    "caption": "Sub Rosa (7557d8); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_75508",
    "name": "Sub Rosa (75508)",
    "srcThumb": "/images/360_flowers/360_flowers_16B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_16B.jpg",
    "caption": "Sub Rosa (75508); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_2627319",
    "name": "Sub Rosa (2627319)",
    "srcThumb": "/images/360_flowers/360_flowers_16C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_16C.jpg",
    "caption": "Sub Rosa (2627319); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_170d956",
    "name": "Sub Rosa (170d956)",
    "srcThumb": "/images/360_flowers/360_flowers_17A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_17A.jpg",
    "caption": "Sub Rosa (170d956); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_8733939",
    "name": "Sub Rosa (8733939)",
    "srcThumb": "/images/360_flowers/360_flowers_17B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_17B.jpg",
    "caption": "Sub Rosa (8733939); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_singleRose-wallpaper-background",
    "name": "Sub Rosa (SingleRose-wallpaper-Background)",
    "srcThumb": "/images/360_flowers/360_flowers_17C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_17C.jpg",
    "caption": "Sub Rosa (SingleRose-wallpaper-Background); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_75581a",
    "name": "Sub Rosa (75581a)",
    "srcThumb": "/images/360_flowers/360_flowers_18A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_18A.jpg",
    "caption": "Sub Rosa (75581a); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_1172926",
    "name": "Sub Rosa (1172926)",
    "srcThumb": "/images/360_flowers/360_flowers_18B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_18B.jpg",
    "caption": "Sub Rosa (1172926); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_rose5",
    "name": "Sub Rosa (Rose5)",
    "srcThumb": "/images/360_flowers/360_flowers_18C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_18C.jpg",
    "caption": "Sub Rosa (Rose5); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_8534670",
    "name": "Sub Rosa (8534670)",
    "srcThumb": "/images/360_flowers/360_flowers_19A.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_19A.jpg",
    "caption": "Sub Rosa (8534670); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_755234",
    "name": "Sub Rosa (755234)",
    "srcThumb": "/images/360_flowers/360_flowers_19B.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_19B.jpg",
    "caption": "Sub Rosa (755234); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  },
  {
    "url": "/flowers/sub_rosa_754fd8",
    "name": "Sub Rosa (754fd8)",
    "srcThumb": "/images/360_flowers/360_flowers_19C.jpg",
    "srcFull": "/images/2480_flowers/2480_flowers_19C.jpg",
    "caption": "Sub Rosa (754fd8); pen on paper; 30 x 42 cm; 2014",
    "series": "flowers"
  }
]

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
      accentColor: "var(--red)"
    }
  },
  {
    path: "/flowers",
    component: Gallery,
    name: "flowers",
    props: {
      imageSet: flowers,
      accentColor: "var(--green)"
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
        "caption": "Examples of various design/illustration/writing projects. Includes:\n- flyers for the life drawing sessions I’ve organised and hosted since 2022;\n- my dissertation set in a fictional arts centre that specialises in unfinished artwork;\n- products I helped design and artwork during my eleven years working at ARTHOUSE Unlimited, a charity for adults with complex neurodiverse and physical support needs. I was also an art instructor there;\n- six books I wrote and illustrated;\n- 25+ books I illustrated;\n- a 60 page booklet I wrote and designed about terror;\n- a 120 page book I designed and edited as part of a project with University of Sussex exploring why people run marathons.",
        "series": "designs"
      },
      nextImage: undefined,
      previousImage: undefined,
      accentColor: "var(--blue)"
    }
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
  }
]

let previous = undefined;
let next = undefined;
let index = 0;

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
      accentColor: "var(--red)"
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
      accentColor: "var(--green)"
    }
  })
  previous = image;
})

const router = createRouter({
  history: createWebHistory(),
  routes: routesArray,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.afterEach((to, from) => {
  if ((from.path == "/") || (from.path == "")) {
    to.meta.transitionMode = "in-out";
  }
  else {
    to.meta.transitionMode = "out-in"
  }
})


export default router