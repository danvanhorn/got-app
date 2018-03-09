<template>
  <div class="table-container">
    <h2>Specialties</h2>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleEdit">{{edit ? 'Cancel Edit': 'Edit'}}</button>
      <button v-on:click="toggleAdd">{{add ? 'Cancel': 'Add New'}}</button>
      <button v-on:click="addSpecialty" v-show="add">Add</button>
      <div class="add" v-if="add">
        <label for="s-name">Specialty Type</label>
        <input id="s-name" v-model="specName"/>
      </div>
      <row/>
      <div v-if="edit">
        <add-spec :edit="edit" 
          :characters="characters"
          :specialties="specTypes"
          @add-spec-rel="addSpecialtyRelation"/>
      </div>
      <row v-for="spec in specialties" 
        :key="`${spec.specialty.id}-${spec.character.id}`"
        :specialty="spec.specialty" 
        :character="spec.character"
        :edit="edit"
      />
    </div>
  </div>
</template>

<script>
import SpecTableRow from "./SpecTableRow.vue";
import AddSpecialty from "./AddSpecialty.vue";
import { fetchCharacterModels } from "../clients/CharacterClients";
import {
  fetchSpecialtyModels,
  fetchSpecialtyViewModels,
  postSpecialtyModel,
  postSpecialtyViewModel
} from "../clients/SpecialtyClients";

export default {
  name: "Specialties",
  data() {
    return {
      add: false,
      edit: false,
      loading: false,
      specTypes: null,
      specialties: null,
      characters: null,
      specName: ""
    };
  },
  components: {
    row: SpecTableRow,
    "add-spec": AddSpecialty
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    toggleAdd() {
      this.add = !this.add;
    },
    addSpecialty(spec_rel){
      postSpecialtyModel(spec_rel)
        .then(result => console.log(result))
        .catch(err => console.log(err));
      this.getSpecialtyModels();
    },
    addSpecialtyRelation(){
      postSpecialtyViewModel(this.specName)
        .then(result => console.log(result))
        .catch(err => console.log(err));
      this.getSpecialtyViewModels();
    },
    getSpecialtyModels() {
      fetchSpecialtyModels()
        .then(result => (this.specTypes = result))
        .catch(err => console.log(err));
    },
    getCharacters() {
      fetchCharacterModels()
        .then(result => (this.characters = result))
        .catch(err => console.log(err));
    },
    getSpecialtyViewModels() {
      fetchSpecialtyViewModels()
        .then(result => (this.specialties = result))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.loading = true;
    this.getSpecialtyViewModels();
    this.getCharacters();
    this.getSpecialtyModels();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.add{
  padding: 10px;
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