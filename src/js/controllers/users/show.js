angular
.module("bidUpApp")
.controller("UsersShowCtrl", UsersShowCtrl);

UsersShowCtrl.$inject = ["User", "$stateParams", "$state", "$http"];
function UsersShowCtrl(User, $stateParams, $state, $http){
  console.log("Users page");
  const vm = this;
  User.get($stateParams, data => {
    vm.user = data;
    console.log(data);
  });
}
