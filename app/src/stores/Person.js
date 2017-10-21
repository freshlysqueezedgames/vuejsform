const person =
  {
    debug: true,

    state:
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 27,
      mobileNumber: '',
      emailAddress: '',
      dateOfBirth: new Date(1990, 1, 1),
      customerQuery: ''
    },

    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },

    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    }

  }

export default person
