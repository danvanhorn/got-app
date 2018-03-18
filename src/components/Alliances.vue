<template>
    <div class="table-container">
      <h2>Alliances</h2>
      <div class="loading" v-if="loading">
        Loading...
      </div>
      <div v-else>
      <button v-on:click="toggleEditChar">{{charEdit ? 'Cancel Add Character Relationship': 'Add Character Relationship'}}</button>
      <button v-on:click="toggleEditHouse">{{houseEdit ? 'Cancel Add House Relationship': 'Add House Relationship'}}</button>
      <button v-on:click="toggleAdd">{{add ? 'Cancel': 'Add New'}}</button>
      <button v-on:click="addAlliance" v-show="add">Add</button>
      <div class="add" v-if="add">
        <label for="ally-name"> Alliance</label>
        <input id="ally-name" v-model="allyName">
      </div>
      <row/>
      <div class="edit" v-if="charEdit">
        <add-alliance :houses="houses" :characters="characters" :alliances="allyTypes" :houseEdit="false" :charEdit="charEdit" @add-char-rel="addCharRel"/>
      </div>
      <div class="edit" v-if="houseEdit">
        <add-alliance :houses="houses" :characters="characters" :alliances="allyTypes" :houseEdit="houseEdit" :charEdit="false" @add-house-rel="addHouseRel"/>
      </div>
      </div>
        <row v-for="ally in alliances"
          :key = "`${ally.alliance.id}`"
          :ally = "ally"
      />
    </div>
  </div>
</template>

<script>
import AllyTableRow from './AllyTableRow.vue';
import {postAllianceModel, getAlliances, addAllyCharRel, addAllyHouseRel} from "../clients/AllianceClients"
import { AllianceModel, AllianceViewModel, CharacterModel, HouseModel } from "../models/models"
import {fetchCharacterModels} from "../clients/CharacterClients";
import {fetchHouseModels} from "../clients/HouseClients";
import AddAlliance from "./AddAlliance";
//import for updating and deleting
export default {
  name: "Alliances",
  data() {
    return {
      house: null,
      houseEdit: null,
      charEdit: null,
      add: false,
      msg: 'Alliances page',
      alliances: null,
      allyTypes: null,
      houses: null,
      loading: false,
      characters: null,
      allyName: ""
    };
  },
  components: {
    'row': AllyTableRow,
    'add-alliance':AddAlliance,
  },
  methods: {
    fetchAllianceViewModel() {
      let alliancesArray = [];
      window
        .fetch("api/view/got_alliance")
        .then((response) => {
          return response.json();
        })
          .then((data) => {
            data.forEach(ally => {
            alliancesArray.push(new AllianceViewModel(
              ally.alliance,
              ally.house,
              ally.character,
            ));
          });
        })
        .catch(function(error) {
          console.log(error);
        });
        this.alliances = alliancesArray;
    },
    toggleEditHouse() {
      this.houseEdit = !this.houseEdit;
    },
    toggleEditChar() {
      this.charEdit = !this.charEdit;
    },
    toggleAdd() {
      this.add = !this.add;
    },
    addAlliance(){
      postAllianceModel({name:this.allyName})
        .then(result => console.log(result))
        .catch(err => console.log(err));
        this.fetchAllianceViewModel();
    },
    getCharacters() {
      fetchCharacterModels()
          .then(
            result => {
              console.log(result);
              this.characters = result;
            })
          .catch(err => console.log(err));
    },
    getHouses() {
      fetchHouseModels()
        .then(result => this.houses = result)
        .catch(err => console.error(err));
    },
    getAllies() {
      getAlliances()
        .then(result => this.allyTypes =result)
        .catch(err => console.error(err));
    },
    addHouseRel(ally) {
      addAllyHouseRel(ally)
      .then(result => console.log(result))
      .catch(err => console.log(err));
      this.fetchAllianceViewModel();
    },
    addCharRel(ally) {
      addAllyCharRel(ally)
      .then(result => console.log(result))
      .catch(err => console.log(err));
      this.fetchAllianceViewModel();
    }
  },
  created() {
    this.loading = true;
    this.fetchAllianceViewModel();
    this.getAllies();
    this.getCharacters();
    this.getHouses();
    this.loading = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
