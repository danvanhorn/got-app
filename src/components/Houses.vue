<template>
  <div class="table-container">
    <h2>Houses</h2>
    <div class="loading" v-if="loading">
        Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleEdit">{{edit ? 'Cancel ': 'Edit'}}</button>
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
import { HouseModel, CharacterModel } from "../models/models";
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
    fetchHouseViewModel() {
      let houseArray = [];
      window
        .fetch("api/view/got_house")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          data.forEach(house => {
            houseArray.push(
              new HouseModel(
                house.id,
                house.name,
                house.sigil,
                house.location,
                house.lord,
                house.castle,
                house.words
              )
            );
          });
        })
        .catch(function(error) {
          console.log(error);
        });

      this.houses = houseArray;
    },
    fetchCharacters() {
      let characterArray = [];
      window
        .fetch("api/get/got_character")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          data.forEach(char => {
            characterArray.push(
              new CharacterModel(
                char.id,
                char.fname,
                char.lname,
                char.nickname,
                char.gender,
                char.age,
                char.house
              )
            );
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      this.characters = characterArray;
    }
  },
  created() {
    this.loading = true;
    this.fetchHouseViewModel();
    this.fetchCharacters();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>