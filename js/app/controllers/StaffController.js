function StaffController() {
  var vm = this;
  this.name = "Sam";
  this.email = "sam@email.com";
  this.phone = "7185552424"
}

angular
  .module('app')
  .controller('StaffController', StaffController);
