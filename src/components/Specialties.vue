<template>
  <div>
    <h2>Specialties</h2>
    <div class="table-container">
      <row/>
    </div>
  </div>
</template>

<script>
import SpecTableRow from './SpecTableRow.vue';
import SpecialtyViewModel from '../models/models'
export default {
  name: 'Specialties',
  data() {
    return {
      loading: false,
      specialties: null
    };
  },
  components: {
    'row': SpecTableRow
  },
    created() {
    let specialtyArray = [];
    this.loading = true;
    this.axios
      .get("api/view/got_specialty")
      .then(function(response) {
        console.log(response)
        // specialtyArray.data.forEach(house => {
        //   console.log(house)
        // });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>