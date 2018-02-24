<template>
    <div class='table-row'>
        <div/>
        <div>specialty_type</div>
        <div>character_name</div>
        <div/>
    </div>
</template>

<script>
import { SpecialtyModel } from "../models/models";
export default {
  name: "SpecTableRow",
  props: {
    // we will probably turn the required attribute to true when we have data
    ally: {
      type: new SpecialtyModel(),
      required: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 12.5% 37.5% 37.5% 12.5%;
}
</style>