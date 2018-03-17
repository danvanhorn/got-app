<template>
    <div class="table-container">
      <h2>Alliances</h2>
      <div class="loading" v-if="loading">
        Loading...
      </div>
      <div v-else>
        <row/>
        <row v-for="ally in alliances"
          :key = "`${ally.alliance.id}`"
          :ally = "ally"
      />
    </div>
  </div>
</template>

<script>
import AllyTableRow from './AllyTableRow.vue';
import { AllianceModel, AllianceViewModel, CharacterModel, HouseModel } from "../models/models"
//import for updating and deleting
export default {
  name: "Alliances",
  data() {
    return {
      msg: 'Alliances page',
      alliances: null,
      loading: false
    };
  },
  components: {
    'row': AllyTableRow
  },
  methods: {
    fetchAllianceViewModel() {
      let alliancesArray = [];
      window
        .fetch("api/view/got_alliance")
        .then(function(response) {
          return response.json();
        })
          .then(function(data){
            data.forEach(ally => {
            alliancesArray.push(new AllianceViewModel(
              ally.alliance,
              ally.house,
              ally.character,
            ));
          });
        })
        .catch(function(error) {
          console.log(error);
        });
        this.alliances = alliancesArray;
    }
  },
  created() {
    this.loading = true;
    this.fetchAllianceViewModel();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
