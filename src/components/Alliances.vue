<template>
  <div>
    <h2>Alliances</h2>
    <div class="table-container">
      <row/>
    </div>
  </div>
</template>

<script>
import AllyTableRow from "./AllyTableRow.vue";
export default {
  name: "Alliances",
  data() {
    return {
      msg: "Alliances page"
    };
  },
  components: {
    row: AllyTableRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>