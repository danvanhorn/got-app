<template>
  <div>
    <div class="table-container">
      <row/>
    </div>
  </div>
</template>

<script>
import SpecTableRow from './SpecTableRow.vue';
export default {
  name: 'Specialties',
  data() {
    return {
      msg: 'Specialties page',
    };
  },
  components: {
    'row': SpecTableRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>