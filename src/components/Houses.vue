<template>
  <div class="table-container">
    <h2>Houses</h2>
    <div class="loading" v-if="loading">
        Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleAdd">{{add ? 'Cancel ': 'New House'}}</button>
      <row/>
      <div v-if="add">
        <add-house/>
      </div>
      <row v-for="house in houses" v-bind:key="house.id" v-bind:house="house"/>
    </div>
  </div>
</template>

<script>
import HouseTableRow from './HouseTableRow.vue';
import AddHouse from './AddHouse';
import {HouseModel} from '../models/models';
export default {
  name: 'Houses',
  data() {
    return {
      msg: 'Houses page',
      add: false,
      houses: null
    };
  },
  components: {
    'row': HouseTableRow,
    'add-house': AddHouse
  },
  methods:{
    toggleAdd(){
      this.add = !this.add;
    },
    fetchHouseViewModel(){
      let houseArray = [];
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
      
      this.houses = houseArray;
    },
    fetchNonLords(){
      // fetch all characters who are not lords
    }
  },
  created() {
    this.loading = true;
    this.fetchHouseViewModel();
    //this.fetchNonLords();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>