angular
.module("bidUpApp")
.controller("RegisterCtrl", RegisterCtrl);

RegisterCtrl.$inject = ["User", "CurrentUserService", "$state"];
function RegisterCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.register = () => {
    User
    .register(vm.userRegister)
    .$promise
    .then(data => {
      const user = data.user || null;
      if (user){
        CurrentUserService.saveUser(user);
      }
    });
  };

}
