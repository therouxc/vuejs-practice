<template>
	<nav class="navbar nav-text">
	  <a class="navbar-brand">
      <img src="/static/cabbagelogo.png" width="30" height="30">
      Cabbage Lookup
    </a>
    <div id="navbarNav">
      <ul class="nav justify-content-start mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Compare</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Stat Lookup</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return{}
    }
  }
</script>

<style scoped>
  .nav-text {
    color: #86C232;
    background-color: #222629;
  }
</style>
