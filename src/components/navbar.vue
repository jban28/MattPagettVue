<script setup>
  import FadeTransition from '../transitions/fade-transition.vue'
</script>

<template>
  <FadeTransition appear>
    <nav class="navbar navbar-expand-sm">
      <nav class="content">
        <router-link class="navbar-brand" to="/"><span class="bold" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">MATT PAGETT</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsibleNavbar">
          <ul class="navbar-nav w-100 justify-content-between">
            <li class="nav-item hide-sm">
              <router-link to="/" ><span class="bold">MATT PAGETT</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/bodies"><span>Bodies</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/flowers"><span>Flowers</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/designs"><span>Design etc.</span></router-link>
            </li>
            <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">
              <router-link to="/about"><span>About</span></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  </FadeTransition>
</template>

<style scoped>
  .navbar {
    background-color: var(--white);
    position: sticky;
    top: 0px;
    z-index: 1;
    font-size: 20px;
  }

  .navbar-brand {
    display: none;
    color: var(--black);
    font-size: inherit;
  }

  .navbar-toggler {
    border: none;
    float: right;
  }

  .navbar-toggler-icon {
    vertical-align: top;
    height: 20px;
  }

  .show .nav-item {
    margin-top: 12px;
  }

  .collapsing .nav-item {
    margin-top: 12px;
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