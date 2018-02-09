<template>
  <div class="characters">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Characters',
  data() {
    return {
      msg: 'Welcome to the characters page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>