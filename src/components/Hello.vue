<template>
  <div class="hello" style="text-align: center">
    <h1>{{ msg }}</h1>
    <h2>{{hostname}}</h2>
  </div>
</template>

<script>
import _hostname from './../api/config'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'the hostname is:',
      hostname: _hostname
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  background: url("../assets/emoji.jpg");
}
h1, h2 {
  font-weight: normal;
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
