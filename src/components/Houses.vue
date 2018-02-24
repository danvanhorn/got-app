<template>
  <div>
    <h2>Houses</h2>
    <div class="table-container">
      <row/>
    </div>
  </div>
</template>

<script>
import HouseTableRow from './HouseTableRow.vue';
export default {
  name: 'Houses',
  data() {
    return {
      msg: 'Houses page',
      houses: null
    };
  },
  components: {
    'row': HouseTableRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>