angular
.module("bidUpApp")
.controller("LoginCtrl", LoginCtrl);

LoginCtrl.$inject = ["User", "CurrentUserService", "$state", "$rootScope"];
function LoginCtrl(User, CurrentUserService, $state, $rootScope) {
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
    $("form.login input").css({"border": "1px solid rgba(255,0,0,0.5)"});
  };

}
