<template>
  <div class="table-container">
    <h2>Characters</h2>
    <div class="loading" v-if="loading === true">
      Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleEdit">{{edit ? 'Cancel ': 'Edit'}}</button>
      <row/>
      <div v-if="edit">
        <add-char :edit="edit" :houses="houses"/>
      </div>
      <row v-for="char in characters" :key="char.id" :character="char" :edit="edit"/>
    </div>
  </div>
</template>

<script>
import CharTableRow from "./CharTableRow.vue";
import AddCharacter from "./AddCharacter.vue";
import { CharacterModel, HouseModel } from "../models/models";
export default {
  name: "Characters",
  data() {
    return {
      edit: false,
      characters: null,
      houses: null,
      loading: false
    };
  },
  components: {
    row: CharTableRow,
    "add-char": AddCharacter
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    fetchCharacters() {
      let chars = [];
      window
        .fetch("api/get/got_character")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          data.forEach(char => {
            chars.push(
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
      this.characters = chars;
      },
      fetchHouseViewModel() {
      let houseArray = [];
      window
        .fetch("api/get/got_house")
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
    }
  },
  created() {
    this.loading = true;
    this.fetchCharacters();
    this.fetchHouseViewModel();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>