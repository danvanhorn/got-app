<template>
  <div class="table-container">
    <h2>Characters</h2>
    <div class="loading" v-if="loading === false">
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
      msg: "Characters page",
      characters: null,
      loading: false
    };
  },
  components: {
    row: CharTableRow
  },
  created() {
    let chars = [];
    this.loading = true;
    this.axios
      .get("api/get/got_character")
      .then(function(response) {
        response.data.forEach(char => {
          console.log(char);
          chars.push(new CharacterModel(
            char.id,
            char.fname,
            char.lname,
            char.nickname,
            char.gender,
            char.age,
            char.house
          ));
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.loading = false;
    this.characters = chars;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>