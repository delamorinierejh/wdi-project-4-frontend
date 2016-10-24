angular
.module("bidUpApp")
.controller("LoginCtrl", LoginCtrl);

LoginCtrl.$inject = ["User", "CurrentUserService", "$state"];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(data => {
      const user = data.user || null;
      if (user){
        CurrentUserService.saveUser(user);
      }
    });
  };

}
