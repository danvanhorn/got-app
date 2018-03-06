<template>
  <div>
    <h2>Houses</h2>
    <div class="table-container">
      <row/>
      <row v-for="house in houses" v-bind:key="house.id" v-bind:house="house"/>
    </div>
  </div>
</template>

<script>
import HouseTableRow from './HouseTableRow.vue';
import {HouseModel} from '../models/models';
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
  },
  created() {
    let houseArray = [];
    this.loading = true;
    this.axios
      .get("api/view/got_house")
      .then(function(response) {
        console.log(response)
        response.data.forEach(house => {
          houseArray.push(new HouseModel(
            house.id,
            house.name,
            house.sigil,
            house.location,
            house.lord,
            house.castle,
            house.words
          ));
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.loading = false;
    this.houses = houseArray;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>