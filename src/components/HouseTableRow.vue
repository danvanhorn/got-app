<template>
    <div v-if="house === undefined" class='table-row'>
        <div/>
        <div><strong>Name</strong></div>
        <div><strong>Sigil</strong></div>
        <div><strong>Location</strong></div>
        <div><strong>Lord</strong></div>
        <div><strong>Castle</strong></div>
        <div><strong>Words</strong></div>
        <div/>
    </div>
    <div v-else class='table-row'>
      <div/>
      <div class="table-item">{{house.name}}</div>
      <div class="table-item">{{house.sigil}}</div>
      <div class="table-item">{{house.location}}</div>
      <div class="table-item">{{house.lord}}</div>
      <div class="table-item">{{house.castle}}</div>
      <div class="table-item">{{house.words}}</div>
      <div/>
    </div>
</template>

<script>
import { HouseModel } from "../models/models";
export default {
  name: "HouseTableRow",
  props: {
    // we will probably turn the required attribute to true when we have data
    house: {
      type: new HouseModel(),
      required: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
}

.table-item {
  text-align: left;
  padding-top: 5px;
  padding-right: 5px;
}
</style>