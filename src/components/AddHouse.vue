<template>
  <div class="table-row">
      <div class="add-button">
        <button v-on:click="addHouse">Add</button>
      </div>
      <div class="table-item">
        <input v-model="name"/>
      </div>
      <div class="table-item">
        <input v-model="sigil"/>
      </div>
      <div class="table-item">
        <input v-model="location"/>
      </div>
      <div class="table-item">
        <select v-model="lord">
          <option 
            v-for="char in characters" 
            :key="char.id" 
            :value="char">
            {{getName(char)}}
          </option>
        </select>
      </div>
      <div class="table-item">
        <input v-model="castle"/>
      </div>
      <div class="table-item">
        <input v-model="words"/>
      </div>
      <div/>
  </div>
</template>

<script>
import { HouseModel } from "../models/models";
export default {
  name: "AddHouse",
  data() {
    return {
      id: this.house ? this.house.id : "",
      name: this.house ? this.house.name : "",
      sigil: this.house ? this.house.sigil : "",
      location: this.house ? this.house.location : "",
      lord: this.house ? this.house.lord : "",
      castle: this.house ? this.house.castle : "",
      words: this.house ? this.house.words : ""
    };
  },
  props: ["characters", "house"],
  methods: {
    addHouse() {
      let hs;
      if (this.house) {
        hs = new HouseModel(
          this.house.id,
          this.name,
          this.sigil,
          this.location,
          this.lord,
          this.castle,
          this.words
        );
        this.$emit("update-house", hs)
      } else {
        hs = new HouseModel(
          0,
          this.name,
          this.sigil,
          this.location,
          this.lord,
          this.castle,
          this.words
        );
        this.$emit("add-house", hs);
      }

      this.name = "";
      this.sigil = "";
      this.location = "";
      this.lord = "";
      this.castle = "";
      this.words = "";
    },
    getName(char) {
      return `${char.fname} ${char.lname}`;
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
  padding-right: 10px;
  justify-self: right;
}

input {
  background-color: #313740;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #7d828c;
  outline: none;
  color: #b6bdcc;
}

select {
  border: 0;
  background-color: #313740;
  border-bottom: 1px solid #7d828c;
  outline: none;
  color: #b6bdcc;
}

select:hover,
input:hover {
  border-bottom: 1px solid #d78857;
}
select:focus,
input:focus {
  border-bottom: 2px solid #d78857;
}
</style>