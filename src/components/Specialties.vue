<template>
  <div class="table-container">
    <h2>Specialties</h2>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-else>
      <button v-on:click="toggleEdit">{{edit ? 'Cancel ': 'Edit'}}</button>
      <row/>
      <div v-if="edit">
        <add-spec :edit="edit" 
          :characters="characters"
          :specialties="specTypes"
          />
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
  fetchSpecialtyViewModels
} from "../clients/SpecialtyClients";

export default {
  name: "Specialties",
  data() {
    return {
      edit: false,
      loading: false,
      specTypes: null,
      specialties: null,
      characters: null
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
<style scoped>

</style>