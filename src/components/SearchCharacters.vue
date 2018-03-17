<template>
  <div class="container">
    <div class="loading" v-if="loading === true">
      Loading Search Tool...
    </div>
    <div class="search-char">
      <label for="nameID">Search On Characters Where</label> &nbsp;
      <select id="nameID" v-model="category">
        <option
        v-for="column in columns"
        :key = "column"
        :value = "column">
            {{column}}
        </option>
      </select>
      <div v-if="category !== '' && category !== 'Age Greater Than' && category !== 'Age Less Than'">
        Equals
      </div> &nbsp;
      <div v-if="category === 'Fname'">
        <select v-model="fname">
          <option
            v-for="name in fnames"
            :key = "name"
            :value = "name">
            {{name}}
          </option>
        </select>
      </div>
      <div v-if="category === 'Lname'">
        <select v-model="lname">
          <option
            v-for="name in lnames"
            :key = "name"
            :value = "name">
            {{name}}
          </option>
        </select>
      </div>
      <div v-if="category === 'Nickname'">
        <select v-model="nickname">
          <option
            v-for="name in nicknames"
            :key = "name"
            :value = "name">
            {{name}}
          </option>
        </select>
      </div>
      <div v-if="category === 'House'">
        <select v-model="house">
          <option
            v-for="house in houses"
            :key = "house"
            :value = "house">
            {{house}}
          </option>
        </select>
      </div>
      <div v-if="category === 'Age Greater Than'">
        <select v-model="ageGreaterThan">
          <option
            v-for="age in ageMax"
            :key = "age"
            :value = "age">
            {{age}}
          </option>
        </select>
      </div>
      <div v-if="category === 'Age Less Than'">
        <select v-model="ageLessThan">
          <option
            v-for="age in ageMax"
            :key = "age"
            :value = "age">
            {{age}}
          </option>
        </select>
      </div>
      <div v-if="category === 'Gender'">
        <select v-model="gender">
          <option
            v-for="gender in genders"
            :key = "gender"
            :value = "gender">
            {{gender}}
          </option>
        </select>
      </div>
      <button @click="Search">Search</button>
    </div>
      <div class="charList" v-if="characterList.length > 0">
        <searchrow/>
        <searchrow v-for="char in characterList" :key="char.id" :character="char"/>
      </div>
  </div>
</template>

<script>
import { CharacterModel } from "../models/models";
import CharTableRow from "./CharTableRow";
import {SearchCharacter, findCharacters} from "../clients/CharacterClients";
export default {
  name: "SearchCharacter",
  created() {
    this.loading = true;
    this.getFnames();
    this.getLnames();
    this.getNicknames();
    this.getHouses();
    this.loading = false;
  },
  components: {
    searchrow: CharTableRow
  },
  data() {
    return {
      category: "",
      fname: "",
      lname: "",
      nickname: "",
      house: "",
      ageLessThan:"",
      ageGreaterThan: "",
      gender: "",
      ageMax: 100,
      characterList: [],
      choices: [],
      fnames: [],
      lnames: [],
      houses: [],
      nicknames: [],
      genders: ["Male", "Female"],
      columns: ["Fname", "Lname", "House", "Nickname", "Gender", "Age Greater Than", "Age Less Than"]
    };
  },
  methods: {
    Search(){
      console.log(this.category)
      if(this.category === "Fname") {
        this.category = "fname";
        this.choice = this.fname;
      }
      else if(this.category === "Lname") {
        this.category = "lname";
        this.choice = this.lname;
      }
      else if(this.category === "House") {
        this.category = "house";
        this.choice = this.house;
      }
      else if(this.category === "Nickname") {
        this.category = "nickname";
        this.choice = this.nickname;
      }
      else if(this.category === "Gender") {
        this.category = "gender";
        this.choice = this.gender;
      }
      else if(this.category === "Age Less Than") {
        this.category = "AgeLessThan";
        this.choice = this.ageLessThan;
      }
      else if(this.category === "Age Greater Than") {
        this.category = "ageGreaterThan";
        this.choice = this.ageGreaterThan;
      }
      findCharacters(this.category, this.choice)
        .then(result => this.characterList = result)
        .catch(err => console.log(err));
        console.log(this.characterList);
    },
    getFnames(){
      let fnameArray = [];
      SearchCharacter("fname")
      .then(result => {
        result.forEach(res =>{
          console.log(res.fname);
          fnameArray.push(res.fname);
        })
      })
      .catch(err => console.log(err));
      console.log(fnameArray)
      this.fnames = fnameArray;
    },
    getLnames(column){
      let lnameArray = [];
      SearchCharacter("lname")
      .then(result => {
        result.forEach(res => lnameArray.push(res.lname));
      })
      .catch(err => console.log(err));
      this.lnames = lnameArray;

    },
    getNicknames(column){
      let nicknameArray = [];
      SearchCharacter("nickname")
      .then(result => {
        result.forEach(res => nicknameArray.push(res.nickname));
      })
      .catch(err => console.log(err));
      this.nicknames = nicknameArray;
    },
    getHouses(column){
      let houseArray = [];
      SearchCharacter("house")
      .then(result => {
        result.forEach(res => houseArray.push(res.house));
      })
      .catch(err => console.log(err));
      this.houses = houseArray;
    }
  }
};
</script>
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
.charList{
  padding-bottom: 40px;
}
.table-row {
  display: grid;
  grid-template-columns: 12.5% 15% 15% 15% 15% 15% 12.5%;
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
.container{
  display: flex;
  flex-flow: column nowrap;
}

.search-char{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

</style>
