<template>
    <div v-if="!update" class='table-row'>
      <div v-if="edit" class="update-button">
        <button v-on:click="toggleUpdate">Update</button>
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
    <add-house v-else :key="this.key" :characters="characters" :house="house" @update-house="updateHouse"/>
</template>

<script>
import { HouseModel } from "../models/models";
import { postUpdateHouseModel } from "../clients/HouseClients"
import AddHouse from "./AddHouse";
export default {
  name: "HouseTableRow",
  data(){
    return {
      update: false
    }
  },
  props: ["house", "edit", "characters"],
  components: {
    "add-house": AddHouse
  },
  methods: {
    toggleUpdate(){
      this.update = !this.update;
    },
    updateHouse(house){
      // call update house client
      postUpdateHouseModel(house)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        this.update = false; 
        this.$emit('house-updated');
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

.update-button {
  padding-top: 5px;
  padding-right: 10px;
  justify-self: right;
}
</style>