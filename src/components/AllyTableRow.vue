<template>
    <div v-if="ally === undefined" class='table-row'>
        <div/>
        <div><strong>Alliance</strong></div>
        <div><strong>Character Name</strong></div>
        <div><strong>House Name</strong></div>
        <div/>
    </div>
    <div v-else class='table-row'>
      <div/>
      <div class="table-item">{{ ally.alliance.name }}</div>
      <div v-if="ally.character !== undefined" class="table-item">{{ fullName }}</div>
      <div v-else/>
      <div v-if="ally.house !== undefined" class="table-item">{{ ally.house.name }}</div>
      <div v-else/>
      <div/>
    </div>
</template>

<script>
import { AllianceModel, AllianceViewModel, CharacterModel, HouseModel } from "../models/models";
export default {
  name: "AllyTableRow",
  props: ["ally"],
  computed: {
    fullName(){
      const {fname, lname} = this.ally.character
      return `${fname} ${lname}`
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 12.5% 25% 25% 25% 12.5%;
}
.table-item {
  text-align: center;
  padding-top: 5px;
  padding-right: 5px;
}

</style>
