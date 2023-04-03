<script setup>
  import fadeTransition from '../transitions/fade-transition.vue'
</script>

<template>
  <fadeTransition appear>
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <router-link class="navbar-brand router-link-active" to="/"><span data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">MATT PAGETT</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsibleNavbar">
          <ul class="navbar-nav w-100 justify-content-between">
            <li class="nav-item hide-sm">
              <router-link class="router-link-active" to="/" ><span data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">MATT PAGETT</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bodies"><span data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">Bodies</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/flowers"><span data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">Flowers</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/books"><span data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">Books</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"><span data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar.show">About/Contact</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </fadeTransition>
</template>

<style scoped>
  .navbar {
    padding-bottom: 10px;
    flex-grow: 0;
    background-color: var(--color-3);
    width: 100%;
    position: sticky;
    top: 0px;
    z-index: 1;
  }

  .navbar-toggler-icon{
    height: 17px;
  }

  .container-fluid {
    max-width: 1000px;
  }

  router-link {
    margin: auto;
    vertical-align: middle;
    
  }

  .router-link-active{
    color: var(--color-2);
  }

  .nav-link{
    color: var(--color-1);
  }

  .navbar-brand {
    display: none;
    color: var(--color-2);
    font-size: 16px;
    padding: 0px
  }

  .navbar-toggler {
    border: none;
    padding: 0px;
  }

  .hide-sm {
    color: var(--color-2);
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