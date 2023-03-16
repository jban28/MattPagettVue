<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html" style="color:black">MATT PAGETT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item hide-sm">
            <!--<a class="nav-link active" style="padding-left: 0px;" href="index.html">MATT PAGETT</a>-->
            <router-link to="/">MATT PAGETT</router-link>
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
</template>

<style scoped>
.navbar {
  padding-bottom: 10px;
  flex-grow: 0;
  background-color: white;
  position: fixed;
  width: 100%
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
  padding-left: 0px
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