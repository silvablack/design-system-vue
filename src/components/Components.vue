<template>
  <div class="row">
    <div class="column">
      <button class="button--primary" value="Button"/>
    </div>
    <div class="column">
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: 'Components',
  components: {Card},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
