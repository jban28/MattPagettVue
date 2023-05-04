<script setup>
  import fadeTransition from '../transitions/fade-transition.vue'
</script>

<template>
  <fadeTransition appear>
    <nav class="navbar navbar-expand-sm">
      <nav class="container-fluid">
        <router-link class="navbar-brand" to="/"><span class="black bold" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">MATT PAGETT</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsibleNavbar">
          <ul class="navbar-nav w-100 justify-content-between">
            <li class="nav-item hide-sm">
              <router-link to="/" ><span class="black bold" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">MATT PAGETT</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bodies"><span class="red" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">Bodies</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/flowers"><span class="green" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">Flowers</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/designs"><span class="blue" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">Designs</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"><span class="black" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">About/Contact</span></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  </fadeTransition>
</template>

<style scoped>
  .navbar {
    padding: 15px 0px;
    flex-grow: 0;
    background-color: var(--white);
    width: 100%;
    position: sticky;
    top: 0px;
    z-index: 1;
  }

  nav.container-fluid{
    max-width: 1000px;
  }

  .navbar-toggler-icon{
    height: 17px;
  }

  router-link {
    margin: auto;
    vertical-align: middle;
    
  }

  .router-link-active{
    color: var(--black);
  }

  .navbar-brand {
    display: none;
    color: var(--black);
    font-size: 16px;
    padding: 5px 0px;
  }

  .navbar-toggler {
    border: none;
    padding: 5px 0px;
  }

  .nav-item {
    padding: 5px 0px;
    font-weight: 500;
  }

  .bold {
    font-weight: 800;
  }

  .hide-sm {
    color: var(--black);
  }

  @media screen and (max-width: 575px){
    .navbar-brand {
      display: inline;
    }

    .hide-sm {
      display: none;
    }
  }
</style>