var app = new Vue({
    el: '#app',
    data: {
      users: [],
      usersService: null,
      newUserName: '',
      newUserCity: '',
      updateUserCity: '',
      updateUserName: '',
      updateUserIndex: null 
    },

    created: function() {
      this.usersService = users();
      this.usersService.get().then(response => (this.users = response.data));
    },

    methods: { //the delete user method
      deleteUser: function(index) {
        const user = this.users[index];
        this.users.splice(index, 1);
        axios.delete(`http://localhost:3000/users/${user.id}`);
      },
      addUser: function() {//the add user method
        const newUser = {
          name: this.newUserName,
          city: this.newUserCity
        };
        this.users.push(newUser);
        axios.post(`http://localhost:3000/users`, newUser);
        this.newUserName = '';
        this.newUserCity = '';
      },
      setUpdateUser: function(index) { //the update user method
        const user = this.users[index];
        this.updateUserIndex = index;
        this.updateUserName = user.name;
        this.updateUserCity = user.city;
      },
      updateUser: function() { //update method
        const index = this.updateUserIndex;
        const user = this.users[index];
        user.name = this.updateUserName;
        user.city = this.updateUserCity;
        axios.put(`http://localhost:3000/users/${user.id}`, user);
        this.updateUserName = '';
        this.updateUserCity = '';
        this.updateUserIndex = null;
      }
    }
  });