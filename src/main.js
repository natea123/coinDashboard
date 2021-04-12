// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

export default class UserInfo {
  constructor(fName, lName, email) {
      this.fName = fName;
      this.lName = lName;
      this.email = email;
  }

  confirmation() {
    alert(`Thanks ${this.fName} ${this.lName}! You will now receive crypto updates to ${this.email}`)
  }


}