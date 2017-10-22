<template>
  <div class="demo-block">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="First Name" prop="firstName" required>
        <el-input placeholder="Please input" v-model.trim="form.firstName" @blur="toName('firstName', form.firstName)"></el-input>
      </el-form-item> 
      <el-form-item label="Surname" prop="lastName" required>
        <el-input placeholder="Please input" v-model.trim="form.lastName" @blur="toName('lastName', form.lastName)"></el-input>
      </el-form-item>  
      <el-form-item label="Mobile Number" prop="mobileNumber" required>
        <el-input placeholder="Please input" v-model.trim="form.mobileNumber" type="tel"></el-input>
      </el-form-item>  
      <el-form-item label="Email" prop="emailAddress" required>
        <el-input placeholder="Please input" v-model.trim="form.emailAddress" type="email"></el-input>
      </el-form-item>  
      <el-form-item label="Age" prop="age">
        <el-input-number placeholder="Please input" v-model.number="form.age" type="number" :max="150" :min="0"></el-input-number>
      </el-form-item>  
      <el-form-item label="Date Of Birth" prop="dateOfBirth">
        <el-date-picker
          v-model="form.dateOfBirth"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Customer Query" prop="customerQuery" required>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="Write your query here"
          v-model="form.customerQuery">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import Vue from 'vue'
import person from '@/stores/Person'
import RegexUtils from '@/utils/RegexUtils'
import ROUTES from '@/router/Routes'

export default {
  name: 'Form',

  data () {
    const validateMobileNumber = (rule, value, callback) => {
      const isValid = !!value.match(RegexUtils.ukPhoneNumber)

      if (isValid) {
        callback()
        return
      }

      callback(new Error('Please enter a valid telephone number'))
    }

    const validateName = (rule, value, callback) => {
      const isValid = !!value.match(RegexUtils.name)

      console.log('thats a name alright', isValid, value)

      if (isValid) {
        callback()
        return
      }

      callback(new Error('Names can only include letters'))
    }

    return {
      test: '',
      // Keep a private store for immediate internal changes.
      form: {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
        age: '',
        dateOfBirth: '',
        customerQuery: ''
      },

      rules: {
        firstName: [
          {required: true, message: 'First name is required'},
          {validator: validateName, trigger: 'blur'}
        ],

        lastName: [
          {required: true, message: 'Last name is required'},
          {validator: validateName, trigger: 'blur'}
        ],

        mobileNumber: [
          {required: true, message: 'Please enter a mobile number'},
          {type: 'tel', message: 'Must be a valid telephone number', validator: validateMobileNumber}
        ],

        emailAddress: [
          {required: true, message: 'Please enter a email address'},
          {type: 'email', message: 'Please enter a valid email address [NAME@DOMAIN.COM]', trigger: 'blur'}
        ],

        dateOfBirth: [
          {type: 'date', message: 'Date must be of format DD/MM/YYYY'}
        ],

        customerQuery: [
          {required: true, message: 'Please enter a query', trigger: 'blur'}
        ]
      }
    }
  },

  methods:
  {
    toName (key, value) {
      Vue.set(this.form, key, value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase())
    },

    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          // We should also run an action that saves the form details to the store at this point
          // now that validation is complete.
          person.dispatch('save', this.form)

          // Move to our results state, which will render the values from the store seperately.
          this.$router.push(ROUTES.RESULTS)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    onCancel () {
      this.$refs['form'].resetFields()
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
  text-align: left;
}

</style>
