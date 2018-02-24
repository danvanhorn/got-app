<template>
  <div id="app">
    <h1>Game of Thrones</h1>
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Characters">Characters</router-link>
      <router-link to="/Houses">Houses</router-link>
      <router-link to="/Alliances">Alliances</router-link>
      <router-link to="/Specialties">Specialties</router-link>
    </div> 
    <div class="content"> 
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleScroll: (event) => {
      const nav_header = document.getElementById("nav");
      if (window.pageYOffset >= 130) {
        nav_header.classList.add("sticky");
      } else {
        nav_header.classList.remove("sticky");
      }
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2D4659;
  margin-top: 60px;
}

h2{
  height: 60px;
  text-align: center;
}

a, a:visited{
  color: #2D4659;
  text-decoration: none;
}

a:hover{
  color: #D78857;
  text-decoration: none;
}

.nav{
  text-align: center;
  padding-top: 18px;
  width: 100%;
  background: #D9D5D1;
}

.content{
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
}

.sticky + .content {
  padding-top: 60px;
}
</style>
