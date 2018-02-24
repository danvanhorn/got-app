<template>
  <div id="app">
    <h1>{{pageTitle}}</h1>
    <div id="nav" class="nav">
      <router-link v-on:click.native="changeTitle('Game of Thrones Database')" to="/">Home</router-link>&nbsp;
      <router-link v-on:click.native="changeTitle('Characters')" to="/Characters">Characters</router-link>&nbsp;
      <router-link v-on:click.native="changeTitle('Houses')" to="/Houses">Houses</router-link>&nbsp;
      <router-link v-on:click.native="changeTitle('Alliances')" to="/Alliances">Alliances</router-link>&nbsp;
      <router-link v-on:click.native="changeTitle('Specialties')" to="/Specialties">Specialties</router-link>&nbsp;
    </div> 
    <div class="content" > 
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {pageTitle: "Game of Thrones Database"};
  },
  methods: {
    handleScroll(){
      const nav_header = document.getElementById("nav");
      if (window.pageYOffset >= 130) {
        nav_header.classList.add("sticky");
      } else {
        nav_header.classList.remove("sticky");
      }
    },
    changeTitle(newTitle){
      this.pageTitle = newTitle;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
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
  color: #2d4659;
  margin-top: 60px;
}

h2 {
  height: 60px;
  text-align: center;
}

a {
  color: #2d4659;
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  color: #d78857;
  text-decoration: none;
}

.nav {
  text-align: center;
  padding-top: 18px;
  width: 100%;
  background: #d9d5d1;
}

.content {
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
