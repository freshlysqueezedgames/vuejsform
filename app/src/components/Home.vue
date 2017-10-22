<template>
  <div class="hello">
    <h1>Welcome</h1>
    <p>
      Click the link to begin entering details into our system.
    </p>
    <router-link to="/form">{{ msg }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Let\'s Go!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  div.hello {
    text-align: center;
  }

  h1, h2 {
    font-weight: normal;
  }

  h1 {
    margin-top: 100px;
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
