<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">MATT PAGETT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item hide-sm">
            <router-link class="router-link-active" to="/">MATT PAGETT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bodies">Bodies</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/flowers">Flowers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/books">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About/Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="filler"></div>
</template>

<style scoped>
.navbar {
  padding-bottom: 10px;
  flex-grow: 0;
  background-color: white;
  width: 100%;
  position: fixed;
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
  color: black;
}

.nav-link{
  color: #cc0000;
}

.navbar-brand {
  display: none;
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding: 0px
}

.navbar-toggler {
  border: none;
  padding: 0px;
}

.filler {
  width: 100%;
  min-height: 42px;
  max-height: 42px;
  display: block;
}

.hide-sm {
  color:rgb(0, 0, 0);
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