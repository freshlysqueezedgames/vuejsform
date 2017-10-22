<template>
  <div>
    <el-row>
      <el-col :span="12" :xs="{span: 22, offset: 1}" :offset="6">
        <h1>Enter your details below</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :xs="{span: 22, offset: 1}" :offset="6">
        <div class="demo-block">
          <el-form ref="form" :model="form" :rules="rules" label-width="120px">
            <h2>1 Name</h2>
            <el-form-item label="First Name" prop="firstName" required>
              <el-input placeholder="Please input" v-model.trim="form.firstName" @blur="toName('firstName', form.firstName)"></el-input>
            </el-form-item> 
            <el-form-item label="Surname" prop="lastName" required>
              <el-input placeholder="Please input" v-model.trim="form.lastName" @blur="toName('lastName', form.lastName)"></el-input>
            </el-form-item>
            <h2>2 Contact Details</h2>
            <el-form-item label="Mobile Number" prop="mobileNumber" required>
              <el-input placeholder="Please input" v-model.trim="form.mobileNumber" type="tel"></el-input>
            </el-form-item>  
            <el-form-item label="Email" prop="emailAddress" required>
              <el-input placeholder="Please input" v-model.trim="form.emailAddress" type="email"></el-input>
            </el-form-item>  
            <h2>3 Age</h2>
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
            <h2>4 Your Query</h2>
            <el-form-item label="Customer Query" prop="customerQuery" required>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="Write your query here"
                v-model="form.customerQuery">
              </el-input>
            </el-form-item>
            <h2>5 Submission</h2>
            <p>
              Please check your above details before submitting
            </p>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
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
          this.$message('Please fix the errors before proceeding')
          return false
        }
      })
    },

    onCancel () {
      this.$refs['form'].resetFields()
      this.$message('Details have been cleared')
    }
  },

  watch: {
    'form.dateOfBirth': function (dateOfBirth) { // Age and DOB should match up. DOB infers Age
      const today = new Date()
      let age = today.getFullYear() - dateOfBirth.getFullYear()
      const month = today.getMonth() - dateOfBirth.getMonth()

      if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--
      }

      Vue.set(this.form, 'age', age)
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
  padding: 30px;
  text-align: left;
}

</style>
