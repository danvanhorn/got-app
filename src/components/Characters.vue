<template>
  <div v-on:title-change="$emit('title-change', 'Characters')">
    <div class="table-container">
      <row/>
    </div>
  </div>
</template>

<script>
import CharTableRow from './CharTableRow.vue';
export default {
  name: 'Characters',
  data() {
    return {
      msg: 'Characters page'
    };
  },
  components:{
    'row': CharTableRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.table-row{
  display: grid;

}

</style>