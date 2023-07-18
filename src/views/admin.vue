<template>
  <div class="content">
    <nav>
      <ul>
        <li>
          <router-link to="/admin/edit">Edit Images</router-link>
        </li>
        <li>
          <router-link to="/admin/new">Add Image</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>

  #login-box {
    margin: 12px auto;
    padding: 6px;
    width: 250px;
  }
  .form {
    width: 226px;
    margin: 6px;
  }
  .error {
    color: red;
  }

  .options-bar {
    width: 100%;
    text-align: center;
  }

  label.new-image {
    width: 112px;
  }

  div.new-image {
    padding: 6px;
  }

  textarea {
    width: calc(100% - 124px) 
  }
</style>