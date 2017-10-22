<template>
  <div class="demo-block">
      <div>{{firstName}}</div>
      <div>{{lastName}}</div>
      <div>{{age}}</div>
      <div>{{mobileNumber}}</div>
      <div>{{emailAddress}}</div>
      <div>{{dateOfBirth}}</div>
      <div>{{customerQuery}}</div>
  </div>
</template>

<script>

import person from '@/stores/Person'

export default {
  name: 'Results',

  computed: {
    firstName () {
      return person.getters.getFirstName
    },

    lastName () {
      return person.getters.getLastName
    },

    age () {
      return person.getters.getAge
    },

    mobileNumber () {
      return person.getters.getMobileNumber
    },

    emailAddress () {
      return person.getters.getEmailAddress
    },

    dateOfBirth () {
      return person.getters.getDateOfBirth
    },

    customerQuery () {
      return person.getters.getCustomerQuery
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.demo-block
{
  border: 1px solid #eaeefb;
  border-radius: 4px;
  transition: .2s;
  padding: 10px;
}

</style>
