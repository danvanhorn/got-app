<template>
  <div class="table-container">
    <h2>Characters</h2>
    <search-char/>
    <div class="loading" v-if="loading === true">
      Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleEdit">{{edit ? 'Cancel ': 'Edit'}}</button>
      <row/>
      <div v-if="edit">
        <add-char :edit="edit" :houses="houses" v-on:add-char="addCharacter"/>
      </div>
      <row v-for="char in characters" :key="char.id" :character="char" :edit="edit" @delete-character="deleteCharacter"/>
    </div>
  </div>
</template>

<script>
import CharTableRow from "./CharTableRow.vue";
import AddCharacter from "./AddCharacter.vue";
import SearchCharacter from "./SearchCharacters.vue";
import { fetchHouseModels } from "../clients/HouseClients";
import { fetchCharacterModels, postCharacterModel, deleteCharacterModel } from "../clients/CharacterClients";
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
    "add-char": AddCharacter,
    "search-char": SearchCharacter
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    //search char thing here
    addCharacter(character){
      postCharacterModel(character)
        .then(data => console.log(data))
        .catch(err => console.err(err))
      this.getCharacters();
    },
    deleteCharacter(character){
      deleteCharacterModel(character)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      this.getCharacters();
    },
    getHouses() {
      fetchHouseModels()
        .then(result => this.houses = result)
        .catch(err => console.log(err));
    },
    getCharacters() {
      fetchCharacterModels()
        .then(result => this.characters = result)
        .catch(err => console.log(err));
    }
  },
  created() {
    this.loading = true;
    this.getCharacters();
    this.getHouses();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
