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
      <div v-if="edit" class="delete-button">
        <button v-on:click="addHouse">Delete</button>
      </div>
      <div v-else/>
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
    house: {
      type: new HouseModel(),
      required: false
    },
    edit: {
      type: Boolean
    }
  }
};
</script>

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

.delete-button {
  padding-top: 5px;
  padding-right: 10px;
  justify-self: right;
}
</style>