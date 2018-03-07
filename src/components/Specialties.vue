<template>
  <div class="table-container">
    <h2>Specialties</h2>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-else>
      <row/>
      <row v-for="spec in specialties" 
        :key="`${spec.specialty.id}-${spec.character.id}`"
        :specialty="spec.specialty" 
        :character="spec.character"
      />
    </div>
  </div>
</template>

<script>
import SpecTableRow from "./SpecTableRow.vue";
import {
  SpecialtyViewModel,
  SpecialtyModel,
  CharacterModel
} from "../models/models";
export default {
  name: "Specialties",
  data() {
    return {
      loading: false,
      specTypes: null,
      specialties: null
    };
  },
  components: {
    row: SpecTableRow
  },
  computed: {
    getKey(spec) {
      return `${this.spec.specialty.id}-${this.spec.character.id}`;
    }
  },
  methods: {
    fetchViewData() {
      let specList = [];
      this.axios
        .get("api/view/got_specialty")
        .then(function(response) {
          response.data.forEach(s =>
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
    fetchSpecTypes() {
      let specTypesList = [];
      this.axios
        .get("api/get/got_specialty")
        .then(function(response) {
          response.data.forEach(t => specTypesList.push(new SpecialtyModel(t.id, t.specialty_type)));
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
    this.fetchSpecTypes();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>