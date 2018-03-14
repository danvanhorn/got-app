<template>
  <div class="table-row">
      <div v-if="edit" class="add-button">
        <button v-on:click="addSpecialty">Add</button>
      </div>
      <div v-else/>
      <div class="table-item">
        <select v-model="specialty">
          <option v-for="s in specialties" :key="s.id" :value="s">{{s.specialty_type}}</option>
        </select>
      </div>
      <div class="table-item">
        <select v-model="character">
          <option v-for="c in characters" :key="c.id" :value="c">{{`${c.fname} ${c.lname}`}}</option>
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
      specialty: null,
      character: null,
    };
  },
  props: ["characters", "specialties", "edit"],
  methods: {
    addSpecialty() {
      const spec = new SpecialtyViewModel(this.specialty, this.character);
      this.$emit('add-spec-rel', spec);
      this.specialty = null;
      this.character = null;
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


</style>