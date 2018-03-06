<template>
    <div v-if="specialty === undefined && character === undefined" class='table-row'>
        <div/>
        <div><strong>Specialty Type</strong></div>
        <div><strong>Character Name</strong></div>
        <div/>
    </div>
    <div v-else class='table-row'>
      <div/>
      <div class="table-item">{{specialty.specialty_type}}</div>
      <div class="table-item">{{characterName}}</div>
      <div/>
    </div>
</template>

<script>
import { SpecialtyModel, CharacterModel } from "../models/models";
export default {
  name: "SpecTableRow",
  props: {
    // we will probably turn the required attribute to true when we have data
    specialty: {
      type: new SpecialtyModel(),
      required: false
    },
    character: {
      type: new CharacterModel(),
      required: false     
    }
  },
  computed: {
    characterName() {
      return `${this.character.fname} ${this.character.lname}`;
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
  padding-top: 5px;
  padding-right: 5px;
}
</style>