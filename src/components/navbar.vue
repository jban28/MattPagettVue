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
            <a class="nav-link" href="bodies.html">Bodies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="flowers.html">Flowers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="books.html">Books</a>
          </li>
          <li class="nav-item">
            <!--<a class="nav-link" style="padding-right: 0px" href="about.html">About/Contact</a>-->
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
}

router-link {
  margin: auto;
  vertical-align: middle;
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