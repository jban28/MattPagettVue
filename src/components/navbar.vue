<script setup>
  import FadeTransition from '../transitions/fade-transition.vue'
</script>

<template>
  <FadeTransition appear>
    <nav class="navbar navbar-expand-sm">
      <nav class="container-fluid">
        <router-link class="navbar-brand" to="/"><span class="black bold button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">MATT PAGETT</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsibleNavbar">
          <ul class="navbar-nav w-100 justify-content-between">
            <li class="nav-item hide-sm">
              <router-link to="/" ><span class="black bold button">MATT PAGETT</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/bodies"><span class="black button">Bodies</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/flowers"><span class="black button">Flowers</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/designs"><span class="black button">Design etc.</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/about"><span class="black button">About</span></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  </FadeTransition>
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
    font-size: 20px;
  }

  nav.container-fluid{
    max-width: 1000px;
    padding: 0px 24px;
  }

  .navbar-toggler-icon{
    height: 17px;
  }

  .navbar-brand {
    display: none;
    color: var(--black);
    font-size: inherit;
    padding: 5px 0px;
  }

  .navbar-toggler {
    border: none;
    padding: 5px 0px;
  }

  .nav-item {
    padding: 5px 0px;
  }

  .bold {
    font-weight: bold;
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