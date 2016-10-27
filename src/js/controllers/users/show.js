angular
.module("bidUpApp")
.controller("UsersShowCtrl", UsersShowCtrl);

UsersShowCtrl.$inject = ["User", "$stateParams", "$state", "$http"];
function UsersShowCtrl(User, $stateParams, $state, $http){
  const vm = this;
  User.get($stateParams, data => {
    vm.user = data;
    vm.user.bids.reverse();
      console.log(data);
  });
}
