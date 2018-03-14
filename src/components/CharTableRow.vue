<template>
    <div v-if="character === undefined" class='table-row'>
      <div/>
      <div class="table-item"><strong>Full Name</strong></div>
      <div class="table-item"><strong>Nickname</strong></div>
      <div class="table-item"><strong>Age</strong></div>
      <div class="table-item"><strong>Gender</strong></div>
      <div class="table-item"><strong>House</strong></div>
      <div/>
    </div>
    <div v-else class='table-row'>
      <div v-if="edit" class="delete-button">
        <button @click="$emit('delete-character', character)">Delete</button>
      </div>
      <div v-else/>
      <div class="table-item">{{fullName}}</div>
      <div class="table-item">{{character.nickname}}</div>
      <div class="table-item">{{character.age}}</div>
      <div class="table-item">{{character.gender}}</div>
      <div class="table-item">{{character.house}}</div>
      <div/>
    </div>
</template>

<script>
import { CharacterModel } from "../models/models";
export default {
  name: "CharTableRow",
  props: {
    // we will probably turn the required attribute to true when we have data
    character: {
      type: new CharacterModel(),
      required: false
    },
    edit: {
      type: Boolean
    }
  },
  computed: {
    fullName() {
      const { fname, lname } = this.character;
      if (fname && fname) {
        return `${fname} ${lname}`;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>