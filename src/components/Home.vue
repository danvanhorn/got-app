<template>
  <div class="home">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Home page"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 1000px;
}
</style>
