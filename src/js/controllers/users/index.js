angular
.module("bidUpApp")
.controller("UsersIndexCtrl", UsersIndexCtrl);

UsersIndexCtrl.$inject = ["User"];
function UsersIndexCtrl(User){
  console.log("Users page");
  const vm = this;
  User
  .query()
  .$promise
  .then(data => {
    console.log(data);
    vm.users = data;
  });
}
