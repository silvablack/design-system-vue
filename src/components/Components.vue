<template>
  <div class="row">
    <div class="column">
      <Button />
    </div>
    <div class="column">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import Button from "./Button";
export default {
  name: 'Components',
  components: { Card, Button },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
  justify-content: center;
}

.column{
  display: flex;
  flex-direction: column;
  margin: 10px
}
</style>
