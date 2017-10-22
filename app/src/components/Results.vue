<template>
  <div>
    <el-row>
      <el-col :span="12" :xs="{span: 22, offset: 1}" :offset="6">
        <h1>Thank You. Here Are Your Details</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :xs="{span: 22, offset: 1}" :offset="6">
        <div class="demo-block">
          <el-row>
            <el-col :span="24">
              <el-table
                :data="table">
                <el-table-column
                  prop="label"
                  label="Label"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="value"
                  label="Value">
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :xs="{span: 22, offset: 1}" :offset="6">
        <h2>Query</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :xs="{span: 22, offset: 1}" :offset="6">
        <div class="grid-content bg-purple-dark">{{customerQuery}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import person from '@/stores/Person'

export default {
  name: 'Results',

  data () { // We don't need a private state, we are rendering content from the store
    const data = {
      table: [{
        label: 'Name',
        value: person.getters.getFirstName + ' ' + person.getters.getLastName
      }, {
        label: 'Mobile',
        value: person.getters.getMobileNumber
      }, {
        label: 'Email',
        value: person.getters.getEmailAddress
      }]
    }

    const age = person.getters.getAge || '' // Age of 0, means not entered.
    const dob = person.getters.getDateOfBirth

    if (age !== '') {
      data.table.push({
        label: 'Age',
        value: age
      })
    }

    if (dob) {
      data.table.push({
        label: 'Date of Birth',
        value: dob.getDate() + ' / ' + (dob.getMonth() + 1) + ' / ' + dob.getFullYear()
      })
    }

    return data
  },

  computed: {
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

h2 {
  margin-bottom: 0px;
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

.bg-purple-dark {
  background: #eef1f6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 20px;
  margin-top: 20px;
}

</style>
