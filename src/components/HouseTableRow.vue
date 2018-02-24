<template>
    <div class='table-row'>
        <div/>
        <div>name</div>
        <div>sigil</div>
        <div>location</div>
        <div>lord</div>
        <div>castle</div>
        <div>words</div>
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
</style>