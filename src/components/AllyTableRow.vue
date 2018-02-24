<template>
    <div class='table-row'>
        <div/>
        <div>alliance</div>
        <div>character_name</div>
        <div>housee_name</div>
        <div/>
    </div>
</template>

<script>
import { AllianceModel } from "../models/models";
export default {
  name: "AllyTableRow",
  props: {
    // we will probably turn the required attribute to true when we have data
    ally: {
      type: new AllianceModel(),
      required: false
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
</style>