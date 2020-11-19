const app5 = new Vue({
  el: '#app',
  data: {
    message: 'michi'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


