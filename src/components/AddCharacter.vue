<template>
  <div class="table-row">
      <div v-if="edit" class="add-button">
        <button v-on:click="addCharacter">Add</button>
      </div>
      <div v-else/>
      <div class="table-item">
        <input v-model="character.fname"/>
      </div>
      <div class="table-item">
        <input v-model="character.nickname"/>
      </div>
      <div class="table-item">
        <select v-bind="character.gender">
          <option key="1" value="Male">Male</option>
          <option key="2" value="Female">Female</option>
        </select>
      </div>
      <div class="table-item">
        <input v-model="character.age"/>
      </div>
      <div class="table-item">
        <select v-bind="character.house">
          <option 
            v-for="house in houses" 
            :key="house.id" 
            value="house">
            {{house.name}}
          </option>
        </select>
      </div>
      <div/>
  </div>
</template>

<script>
import { CharacterModel } from "../models/models";
export default {
  name: "AddCharacter",
  data() {
    return {
      character: {
        type: new CharacterModel(),
        required: false
      }
    };
  },
  props: ["houses", "edit"],
  methods: {
    addCharacter() {
      console.log(this.character);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 12.5% 15% 15% 15% 15% 15% 12.5%;
}

.table-item {
  text-align: left;
  padding-top: 5px;
  padding-right: 5px;
}

.add-button {
  padding-top: 5px;
  padding-right: 10px;
  justify-self: right;
}

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