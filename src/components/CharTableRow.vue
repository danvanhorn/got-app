<template>
    <div class='table-row'>
        <div>full name</div>
        <div>nickname</div>
        <div>age</div>
        <div>gender</div>
        <div>house</div>
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
      }
  },
  computed:{
      fullName(){
          const {fname, lname} = props.character;
          if(fname && fname){
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
  grid-template-columns: 20% 20% 20% 20% 20%;
}
</style>