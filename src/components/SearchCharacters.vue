<template>
  <div class="table-row">
    <div class="search-char">
      <label for="nameID">HARDEN THE FUCK UP</label>
      <input id="nameID" v-model="category"/>
      <button @click="SearchCharacter">Search</button>
    </div>
  </div>
</template>

<script>
import { CharacterModel } from "../models/models";
export default {
  name: "SearchCharacter",
  data() {
    return {
      category: ""
    };
  },
  methods: {
    SearchCharacter(){
      this.$emit('search-char', this.name)
      console.log(this.name);
    }
  }
};
</script>
<style scoped>

input {
  background-color: #313740;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #7d828c;
  outline: none;
  color: #b6bdcc;
}

select {
  border: 0;
  background-color: #313740;
  border-bottom: 1px solid #7d828c;
  outline: none;
  color: #b6bdcc;
}

select:hover,
input:hover {
  border-bottom: 1px solid #d78857;
}
select:focus,
input:focus {
  border-bottom: 2px solid #d78857;
}

</style>
