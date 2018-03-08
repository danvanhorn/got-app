<template>
  <div class="table-row">
      <div v-if="edit" class="add-button">
        <button v-on:click="addSpecialty">Add</button>
      </div>
      <div v-else/>
      <div class="table-item">
        <select v-bind="specialty.specialty">
          <option v-for="s in specialties" :key="s.id" value="s">{{s.specialty_type}}</option>
        </select>
      </div>
      <div class="table-item">
        <select v-bind="specialty.character">
          <option v-for="c in characters" :key="c.id" value="c">{{`${c.fname} ${c.lname}`}}</option>
        </select>
      </div>
      <div/>
  </div>
</template>

<script>
import { SpecialtyViewModel, SpecialtyModel, CharacterModel } from "../models/models";
export default {
  name: "AddSpecialty",
  data() {
    return {
      specialty: {
        type: new SpecialtyModel(),
        required: false
      },
      character: {
        type: new CharacterModel(),
        required: false
      }
    };
  },
  props: ["characters", "specialties", "edit"],
  methods: {
    addSpecialty() {
      console.log(this.specialty);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 12.5% 37.5% 37.5% 12.5%;
}

.table-item {
  text-align: center;
  padding-top: 5px;
  padding-right: 5px;
}

.add-button {
  padding-top: 5px;
  padding-right: 0px;
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