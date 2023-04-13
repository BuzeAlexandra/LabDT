var socket = new io.Socket();

socket.connect('http://127.0.0.1:8080'); 


new Vue({
  el: '#app',
  data: {
    message: '',
    messages: []
  },
  mounted: function () {
    var self = this;

    // when the socket connects,send message
    socket.on('connect', function () {
      socket.emit('message-from-client', 'Hello to everyone from ' + self.checkBrowser());
      console.log('client started');
    });

    // when a message is received,add it
    socket.on('message-from-server', function (message) {
      self.messages.push(message);
      console.log('received message: ' + message);
    });
  },
  methods: {
    // send a message to the server
    sendMessage: function () {
      socket.emit('message-from-client', this.message);
      console.log('sent message: ' + this.message);
      this.message = '';
    },

    checkBrowser: function () {
      var browser = 'Noname browser';
      if (navigator.userAgent.search('Chrome') > -1) {
        browser = 'Chrome';
      }
      if (navigator.userAgent.search('Firefox') > -1) {
        browser = 'Firefox';
      }
      return browser;
    }
  }
});