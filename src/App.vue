<template>
  <div id="app">
    <div class="banner">
      <div/>
    </div>
    <div id="nav" class="nav">
      <router-link to="/">Characters</router-link>&nbsp;
      <router-link to="/Houses">Houses</router-link>&nbsp;
      <router-link to="/Alliances">Alliances</router-link>&nbsp;
      <router-link to="/Specialties">Specialties</router-link>&nbsp;
      <router-link to="/api/*"></router-link>&nbsp;
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
    return { pageTitle: "Game of Thrones Database" };
  },
  methods: {
    handleScroll() {
      const nav_header = document.getElementById("nav");
      if (window.pageYOffset >= 200) {
        nav_header.classList.add("sticky");
      } else {
        nav_header.classList.remove("sticky");
      }
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
.banner {
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
}

.banner div {
  background-image: url(./assets/got-banner.png);
  height: 200px;
  width: 1600px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7d828c;
}

a {
  color: #7d828c;
  text-decoration: none;
  padding-left: 20px;
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
  padding-bottom: 16px;
  width: 100%;
  background: #272c33;
  box-shadow: 0px 5px 5px #272c33;
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

.table-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
}

button{
  background-color: black;
  color: #7d828c;
  border: 0;
  border-radius: 3px;
  padding: 5px;
  outline: 0;
}

button:active{
  backround-color: #d78857;
  color: #272c33;
}

button:hover{
  color: #d78857;
}
</style>




