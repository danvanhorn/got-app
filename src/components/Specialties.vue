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
import {
  SpecialtyViewModel,
  SpecialtyModel,
  CharacterModel
} from "../models/models";
export default {
  name: "Specialties",
  data() {
    return {
      edit: false,
      loading: false,
      specTypes: null,
      specialties: null,
      characters: null,
    };
  },
  components: {
    row: SpecTableRow,
    'add-spec': AddSpecialty
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    fetchViewData() {
      let specList = [];
      window
        .fetch("api/view/got_specialty")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          data.forEach(s =>
            specList.push(
              new SpecialtyViewModel(
                new SpecialtyModel(s.specialty.id, s.specialty.specialty_type),
                new CharacterModel(
                  s.character.id,
                  s.character.fname,
                  s.character.lname,
                  s.character.nickname,
                  s.character.gender,
                  s.character.age,
                  s.character.house
                )
              )
            )
          );
        })
        .catch(function(error) {
          console.log(error);
        });
      this.specialties = specList;
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
    fetchSpecTypes() {
      let specTypesList = [];
      window
        .fetch("api/get/got_specialty")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          data.forEach(t =>
            specTypesList.push(new SpecialtyModel(t.id, t.specialty_type))
          );
        })
        .catch(function(error) {
          console.log(error);
        });
      this.specTypes = specTypesList;
    }
  },
  created() {
    this.loading = true;
    this.fetchViewData();
    this.fetchCharacters();
    this.fetchSpecTypes();
    console.log(this.specialties, this.specTypes, this.characters);
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>