<template>
  <div class="table-container">
    <h2>Houses</h2>
    <div class="loading" v-if="loading">
        Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleEdit">
        {{edit ? 'Cancel ': 'Edit'}}
      </button>
      <row/>
      <div v-if="edit">
        <add-house :characters="characters"/>
      </div>
      <row v-for="house in houses" :key="house.id" :house="house" :edit="edit"/>
    </div>
  </div>
</template>

<script>
import HouseTableRow from "./HouseTableRow.vue";
import AddHouse from "./AddHouse";
import { fetchHouseViewModels } from "../clients/HouseClients";
import { fetchCharacterModels } from "../clients/CharacterClients";
export default {
  name: "Houses",
  data() {
    return {
      edit: false,
      houses: null,
      characters: null
    };
  },
  components: {
    row: HouseTableRow,
    "add-house": AddHouse
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    getHouses() {
      fetchHouseViewModels()
        .then(result => (this.houses = result))
        .catch(err => console.log(err));
    },
    getCharacters() {
      fetchCharacterModels()
        .then(result => (this.characters = result))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.loading = true;
    this.getHouses();
    this.getCharacters();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>