import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Home from '@/components/Home'
import Results from '@/components/Results'
import ROUTES from './Routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: ROUTES.HOME,
      name: 'Home',
      component: Home
    },

    {
      path: ROUTES.FORM,
      name: 'Form',
      component: Form
    },

    {
      path: ROUTES.RESULTS,
      name: 'Results',
      component: Results
    }
  ]
})
