<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Houses',
  data() {
    return {
      msg: 'Houses page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar{
        display: flex;
        width: 100%;
        background: black;
    }
</style>