<template>
  <div>
    <h2>Characters</h2>
    <div class="table-container">
      <row/>
    </div>
  </div>
</template>

<script>
import CharTableRow from "./CharTableRow.vue";
export default {
  name: "Characters",
  data() {
    return {
      msg: "Characters page"
    };
  },
  components: {
    row: CharTableRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>