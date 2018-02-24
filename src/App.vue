<template>
  <div id="app">
    <h2>Game of Thrones</h2>
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
      console.log(`header offset ${nav_header.offsetTop}`);
      console.log(`window offset ${window.pageYOffset}`);
      if (window.pageYOffset >= 138) {
        nav_header.classList.add("sticky");
      } else {
        console.log("removing class")
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
  color: #2c3e50;
  margin-top: 60px;
}

h2{
  height: 60px;
}

.nav{
  padding: 16px 18px;
  width: 100%;
  background: darkgrey;
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
