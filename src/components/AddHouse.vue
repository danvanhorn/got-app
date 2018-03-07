<template>
  <div class="table-row">
      <div/>
      <div class="table-item">
        <input v-model="house.name"/>
      </div>
      <div class="table-item">
        <input v-model="house.sigil"/>
      </div>
      <div class="table-item">
        <input v-model="house.location"/>
      </div>
      <div class="table-item">
        <select v-bind="house.lord">
          <option/>
        </select>
      </div>
      <div class="table-item">
        <input v-model="house.castle"/>
      </div>
      <div class="table-item">
        <input v-model="house.words"/>
      </div>
      <div class="add-button">
        <button v-on:click="addHouse">Add</button>
      </div>
  </div>
</template>

<script>
import { HouseModel } from "../models/models";
export default {
  name: 'AddHouse',
  data() {
    return {
      house: {
        type: new HouseModel(),
        required: false
      }
    };
  },
  props: ["characters"],
  methods: {
    addHouse(){
      console.log(this.house);
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

.add-button {
  padding-top: 5px;
  justify-self: left;
}
</style>