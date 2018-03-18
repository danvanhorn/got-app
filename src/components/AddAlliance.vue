<template>
  <div class="table-row">
      <div v-if="charEdit || houseEdit" class="add-button">
        <button v-on:click="addRelationship">Add</button>
      </div>
      <div v-else/>
      <div class="table-item">
        <select v-model="alliance">
          <option v-for="a in alliances" :key="a.id" :value="a">{{a.name}}</option>
        </select>
      </div>
      <div class="table-item">
        <select v-show="charEdit" v-model="character">
          <option v-for="c in characters" :key="c.id" :value="c">{{`${c.fname} ${c.lname}`}}</option>
        </select>
      </div>
      <div class="table-item">
        <select v-show="houseEdit" v-model="house">
          <option v-for="h in houses" :key="h.id" :value="h">{{h.name}}</option>
        </select>
      </div>
      <div/>
  </div>
</template>

<script>
export default {
  name: "AddAlliance",
  data() {
    return {
      alliance: null,
      character: null,
      house: null,
    };
  },
  props: ["characters", "alliances", "houses", "houseEdit", "charEdit"],
  methods: {
    addRelationship() {
      console.log("IN ADD")
      let ally;
      if(this.alliance !== null){
        console.log("NOT NULL")
        if(this.character === null){
          ally = {
            alliance: this.alliance,
            house: this.house
          }
          this.$emit('add-house-rel', ally);
        }
        else if(this.house === null){
          ally = {
            alliance: this.alliance,
            character: this.character
          }
          this.$emit('add-char-rel', ally);
        }
      }
    }
  }
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

.add-button {
  padding-top: 5px;
  padding-right: 0px;
  justify-self: right;
}


</style>
