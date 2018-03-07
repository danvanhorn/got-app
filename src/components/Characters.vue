<template>
  <div class="table-container">
    <h2>Characters</h2>
    <div class="loading" v-if="loading === true">
      Loading...
    </div>
    <div v-else>
      <row/>
      <row v-for="char in characters" v-bind:key="char.id" v-bind:character="char"/>
    </div>
  </div>
</template>

<script>
import CharTableRow from "./CharTableRow.vue";
import { CharacterModel } from "../models/models";
export default {
  name: "Characters",
  data() {
    return {
      characters: null,
      loading: false
    };
  },
  components: {
    row: CharTableRow
  },
  methods: {
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
    }
  },
  created() {
    this.loading = true;
    this.fetchCharacters();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>