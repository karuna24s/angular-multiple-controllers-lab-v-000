function ContactController() {
  var vm = this;
  this.name = "Karuna";
  this.email = "karuna@email.com";
  this.phone = "2125552424"

  this.changeName = function () {
    vm.name = "Karen";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
