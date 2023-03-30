<script setup>
  import ZoomWindow from '../components/zoom-window.vue';
  import { useRoute } from 'vue-router';
  const captions = {
        "bodies": {
          "1A": {next: "1B", last: "", caption: "Gardener 1 (R); pen and crayon on paper; 18 x 18 cm; 2021"},
          "1B": {next: "1C", last: "1A", caption: "Gardener 1 (G); pen and crayon on paper; 18 x 18 cm; 2021"},
          "1C": {next: "2A", last: "1B", caption: "Gardener 1 (B); pen and crayon on paper; 18 x 18 cm; 2021"},
          "2A": {next: "2B", last: "1C", caption: "Gardener 2 (R); pen and crayon on paper; 18 x 18 cm; 2021"},
          "2B": {next: "2C", last: "2A", caption: "Gardener 2 (G); pen and crayon on paper; 18 x 18 cm; 2021"},
          "2C": {next: "3A", last: "2B", caption: "Gardener 2 (B); pen and crayon on paper; 18 x 18 cm; 2021"},
          "3A": {next: "3B", last: "2C", caption: "Gardener 3 (R); pen and crayon on paper; 18 x 18 cm; 2021"},
          "3B": {next: "3C", last: "3A", caption: "Gardener 3 (G); pen and crayon on paper; 18 x 18 cm; 2021"},
          "3C": {next: "4A", last: "3B", caption: "Gardener 3 (B); pen and crayon on paper; 18 x 18 cm; 2021"},
          "4A": {next: "4B", last: "3C", caption: "Gardener 4 (R); pen and crayon on paper; 18 x 18 cm; 2021"},
          "4B": {next: "4C", last: "4A", caption: "Gardener 4 (G); pen and crayon on paper; 18 x 18 cm; 2021"},
          "4C": {next: "5A", last: "4B", caption: "Gardener 4 (B); pen and crayon on paper; 18 x 18 cm; 2021"},
          "5A": {next: "5B", last: "4C", caption: "7987419-insect-stag-beetle-isolated-in-white; pen on paper; 21 x 30 cm; 2015"},
          "5B": {next: "5C", last: "5A", caption: "Insect_Safari_-_beetle_04; pen on paper; 21 x 30 cm; 2015"},
          "5C": {next: "6A", last: "5B", caption: "Picture 004 Montoya 8-19-9; pen on paper; 21 x 30 cm; 2015"},
          "6A": {next: "6B", last: "5C", caption: "Blue_Ground_beetle_urjsa; pen on paper; 21 x 30 cm; 2015"},
          "6B": {next: "6C", last: "6A", caption: "longicorne; pen on paper; 21 x 30 cm; 2015"},
          "6C": {next: "7A", last: "6B", caption: "il fullxfull.140575002; pen on paper; 21 x 30 cm; 2015"},
          "7A": {next: "7B", last: "6C", caption: "Flip Horizontal: Smoker 1; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019"},
          "7B": {next: "7C", last: "7A", caption: "Flip Horizontal: view; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019"},
          "7C": {next: "8A", last: "7B", caption: "Flip Horizontal: The Smoking Clock; charcoal and chalk on 60 x 21 x 30 cm cardboard panels; dimensions variable; 2019"},
          "8A": {next: "8B", last: "7C", caption: "Jock 1; pen on paper; 21 x 21 cm, 2020"},
          "8B": {next: "8C", last: "8A", caption: "Jock 2; pen on paper; 21 x 21 cm, 2020"},
          "8C": {next: "9A", last: "8B", caption: "Jock 3; pen on paper; 21 x 21 cm, 2020"},
          "9A": {next: "9B", last: "8C", caption: "Shorts 1; pen on paper; 21 x 21 cm, 2020"},
          "9B": {next: "9C", last: "9A", caption: "Shorts 2; pen on paper; 21 x 21 cm, 2020"},
          "9C": {next: "10A", last: "9B", caption: "Shorts 3; pen on paper; 21 x 21 cm, 2020"},
          "10A": {next: "10B", last: "9C", caption: "Trainer 1; pen on paper; 21 x 21 cm, 2020"},
          "10B": {next: "10C", last: "10A", caption: "Trainer 2; pen on paper; 21 x 21 cm, 2020"},
          "10C": {next: "11A", last: "10B", caption: "Trainer 3; pen on paper; 21 x 21 cm, 2020"},
          "11A": {next: "11B", last: "10C", caption: "Sock 1; pen on paper; 21 x 21 cm; 2020"},
          "11B": {next: "11C", last: "11A", caption: "Sock 2; pen on paper; 21 x 21 cm; 2020"},
          "11C": {next: "12A", last: "11B", caption: "Sock 3; pen on paper; 21 x 21 cm; 2020"},
          "12A": {next: "12B", last: "11C", caption: "Trackies (R); pen and crayon on paper; 21 x 21 cm; 2022"},
          "12B": {next: "12C", last: "12A", caption: "Trackies (G); pen and crayon on paper; 21 x 21 cm; 2022"},
          "12C": {next: "13A", last: "12B", caption: "Trackies (B); pen and crayon on paper; 21 x 21 cm; 2022"},
          "13A": {next: "13B", last: "12C", caption: "Backstreet 1R; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017"},
          "13B": {next: "13C", last: "13A", caption: "Backstreet 2G; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017"},
          "13C": {next: "14A", last: "13B", caption: "Backstreet 3B; charcoal and pastel on 30 sheets of A4 office paper;  105 x 180 cm; 2017"},
          "14A": {next: "14B", last: "13C", caption: "Backstreet 4R; charcoal and pastel on 15 sheets of A4 office paper;  105 x 90 cm; 2017"},
          "14B": {next: "14C", last: "14A", caption: "Backstreet 5B; charcoal and pastel on 9 sheets of A4 office paper; 63 x 90 cm; 2017"},
          "14C": {next: "15A", last: "14B", caption: "Glove for a Film; pen on paper; 21 x 30 cm; 2022"},
          "15A": {next: "15B", last: "14C", caption: "Fight for a Cassette; pen on paper; 30 x 42 cm; 2022"},
          "15B": {next: "15C", last: "15A", caption: "Dear David 1; pen on paper; 40 x 60 cm; 2016"},
          "15C": {next: "16A", last: "15B", caption: "Dear David 2; pen on paper; 40 x 60 cm; 2016"},
          "16A": {next: "16B", last: "15C", caption: "Dear David 3; pen on paper; 40 x 60 cm; 2016"},
          "16B": {next: "16C", last: "16A", caption: "Dear David 4; pen on paper; 40 x 60 cm; 2016"},
          "16C": {next: "", last: "16B", caption: "Dear David 5; pen on paper; 40 x 60 cm; 2016"}
        },
        "flowers": {
          "1A": {next: "1B", last: "", caption: "Sweet Pea (Sometimes); pen on paper; 29 x 29 cm; 2020"},
          "1B": {next: "1C", last: "1A", caption: "Sweet Pea (Always); pen on paper; 29 x 29 cm; 2020"},
          "1C": {next: "2A", last: "1B", caption: "Sweet Pea (Never); pen on paper; 29 x 29 cm; 2020"},
          "2A": {next: "2B", last: "1C", caption: "Geranium Cut 1; pen on paper; 29 x 29 cm; 2021"},
          "2B": {next: "2C", last: "2A", caption: "Geranium Cut 2; pen on paper; 29 x 29 cm; 2021"},
          "2C": {next: "3A", last: "2B", caption: "Geranium Cut 3; pen on paper; 29 x 29 cm; 2021"},
          "3A": {next: "3B", last: "2C", caption: "Begonia Flash R; pen and crayon on paper; 29 x 29 cm; 2021"},
          "3B": {next: "3C", last: "3A", caption: "Begonia Flash G; pen and crayon on paper; 29 x 29 cm; 2021"},
          "3C": {next: "4A", last: "3B", caption: "Begonia Flash B; pen and crayon on paper; 29 x 29 cm; 2021"},
          "4A": {next: "4B", last: "3C", caption: "Rose (Before); pen on paper; 29 x 29 cm; 2020"},
          "4B": {next: "4C", last: "4A", caption: "Rose (During); pen on paper; 29 x 29 cm; 2020"},
          "4C": {next: "5A", last: "4B", caption: "Rose (After); pen on paper; 29 x 29 cm; 2020"},
          "5A": {next: "5B", last: "4C", caption: "Marigold AR; pen and crayon on paper; 29 x 29 cm; 2021"},
          "5B": {next: "5C", last: "5A", caption: "Marigold BG; pen and crayon on paper; 29 x 29 cm; 2021"},
          "5C": {next: "6A", last: "5B", caption: "Marigold CB; pen and crayon on paper; 29 x 29 cm; 2021"},
          "6A": {next: "6B", last: "5C", caption: "Rose Screen R; pen and crayon on paper; 29 x 29 cm; 2020"},
          "6B": {next: "6C", last: "6A", caption: "Rose Screen G; pen and crayon on paper; 29 x 29 cm; 2020"},
          "6C": {next: "7A", last: "6B", caption: "Rose Screen B; pen and crayon on paper; 29 x 29 cm; 2020"},
          "7A": {next: "7B", last: "6C", caption: "Lobelia (Beginning); pen on paper; 20 x 24 cm; 2020"},
          "7B": {next: "7C", last: "7A", caption: "Lobelia (Middle); pen on paper; 20 x 24 cm; 2020"},
          "7C": {next: "8A", last: "7B", caption: "Lobelia (End); pen on paper; 20 x 24 cm; 2020"},
          "8A": {next: "8B", last: "7C", caption: "Rose Screen 1; pen and pencil on paper; 29 x 29 cm; 2020"},
          "8B": {next: "8C", last: "8A", caption: "Rose Screen 2; pen and pencil on paper; 29 x 29 cm; 2020"},
          "8C": {next: "9A", last: "8B", caption: "Rose Screen 3; pen and pencil on paper; 29 x 29 cm; 2020"},
          "9A": {next: "9B", last: "8C", caption: "Flower for a Funeral (Rose); crayon and charcoal on paper; 42 x 60 cm; 2022"},
          "9B": {next: "9C", last: "9A", caption: "Flower for a Funeral (Eucalyptus); crayon and charcoal on paper; 42 x 60 cm; 2022"},
          "9C": {next: "10A", last: "9B", caption: "Flower for a Funeral (Daffodil); crayon and charcoal on paper; 42 x 60 cm; 2022"},
          "10A": {next: "10B", last: "9C", caption: "KL10: Flower for a Flowerbed, Southwark Park, London (Acanthus); hand-coloured photolithograph; 30 x 42 cm; 2012"},
          "10B": {next: "10C", last: "10A", caption: "KL10: Flower for a Flowerbed, Southwark Park, London (Coleus); hand-coloured photolithograph; 30 x 42 cm; 2012 "},
          "10C": {next: "11A", last: "10B", caption: "KL10: Flower for a Flowerbed, Southwark Park, London (Delphinium); hand-coloured photolithograph; 30 x 42 cm; 2012"},
          "11A": {next: "11B", last: "10C", caption: "KL10: Flower for a Flowerbed, Southwark Park, London (Lavender); hand-coloured photolithograph; 30 x 42 cm; 2012"},
          "11B": {next: "11C", last: "11A", caption: "KL10: Flower for a Flowerbed, Southwark Park, London (Sempervivum); hand-coloured photolithograph; 30 x 42 cm; 2012"},
          "11C": {next: "12A", last: "11B", caption: "KL10: Flower for a Flowerbed, Southwark Park, London (Snapdragon); hand-coloured photolithograph; 30 x 42 cm; 2012"},
          "12A": {next: "12B", last: "11C", caption: "Rose from a petrol station 1; crayon and charcoal on paper; 83 x 83 cm; 2021 "},
          "12B": {next: "12C", last: "12A", caption: "Rose from a petrol station 2; crayon and charcoal on paper; 83 x 83 cm; 2021"},
          "12C": {next: "13A", last: "12B", caption: "Rose in my neighbour’s garden 1; crayon and charcoal on paper; 74 x 74 cm; 2021"},
          "13A": {next: "13B", last: "12C", caption: "Rose in my garden 1; crayon and charcoal on paper; 49 x 49 cm; 2021"},
          "13B": {next: "13C", last: "13A", caption: "Rose overhanging an allotment 1; crayon and charcoal on paper; 42 x 42 cm; 2021"},
          "13C": {next: "14A", last: "13B", caption: "Rose in my garden 2; crayon and charcoal on paper; 36 x 36 cm; 2021"},
          "14A": {next: "14B", last: "13C", caption: "Roses in a Monastery exhibition view, 2021"},
          "14B": {next: "14C", last: "14A", caption: "Roses in a Monastery exhibition view, 2021"},
          "14C": {next: "15A", last: "14B", caption: "Roses in a Monastery exhibition view, 2021"},
          "15A": {next: "15B", last: "14C", caption: "Daffodil (Red and Black); pen on paper; 26 x 26 cm; 2022"},
          "15B": {next: "15C", last: "15A", caption: "Hydrangea (Green and Black); pen on paper; 26 x 26 cm; 2022"},
          "15C": {next: "16A", last: "15B", caption: "Amaryllis (Blue and Black); pen on paper; 26 x 26 cm; 2022"},
          "16A": {next: "16B", last: "15C", caption: "Sub Rosa (7557d8); pen on paper; 30 x 42 cm; 2014"},
          "16B": {next: "16C", last: "16A", caption: "Sub Rosa (75508); pen on paper; 30 x 42 cm; 2014"},
          "16C": {next: "17A", last: "16B", caption: "Sub Rosa (2627319); pen on paper; 30 x 42 cm; 2014"},
          "17A": {next: "17B", last: "16C", caption: "Sub Rosa (170d956); pen on paper; 30 x 42 cm; 2014"},
          "17B": {next: "17C", last: "17A", caption: "Sub Rosa (8733939); pen on paper; 30 x 42 cm; 2014"},
          "17C": {next: "18A", last: "17B", caption: "Sub Rosa (SingleRose-wallpaper-Background); pen on paper; 30 x 42 cm; 2014"},
          "18A": {next: "18B", last: "17C", caption: "Sub Rosa (75581a); pen on paper; 30 x 42 cm; 2014"},
          "18B": {next: "18C", last: "18A", caption: "Sub Rosa (1172926); pen on paper; 30 x 42 cm; 2014"},
          "18C": {next: "19A", last: "18B", caption: "Sub Rosa (Rose5); pen on paper; 30 x 42 cm; 2014"},
          "19A": {next: "19B", last: "18C", caption: "Sub Rosa (8534670); pen on paper; 30 x 42 cm; 2014"},
          "19B": {next: "19C", last: "19A", caption: "Sub Rosa (755234); pen on paper; 30 x 42 cm; 2014"},
          "19C": {next: "", last: "19B", caption: "Sub Rosa (754fd8); pen on paper; 30 x 42 cm; 2014"}
        }
      }

  let caption = captions[useRoute().params.series][useRoute().params.image].caption;
  let next = captions[useRoute().params.series][useRoute().params.image].next;
  let last = captions[useRoute().params.series][useRoute().params.image].last;
</script>

<template>
  <div class="image-header">
    <router-link :to='"./" + last'><span class="material-icons">west</span></router-link>
    <router-link :to='"./" + next'><span class="material-icons">east</span></router-link>
    <p class="caption">{{ caption }}</p>
  </div>

  <ZoomWindow :source='"../src/assets/images/2480 " + $route.params.series + "/2480_" + $route.params.series + "_" + $route.params.image + ".jpg"'/>    
  
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  #image {
    cursor: zoom-in;
  }

  .image-header {
    max-width: 1000px;
    width: 100%;
    padding: 12px;
    margin: auto;
    position: relative;
    vertical-align: top;
  }

  .caption {
    display: inline-block;
    
    margin-bottom: 0px;
    margin-left: 4px;
  }
</style>