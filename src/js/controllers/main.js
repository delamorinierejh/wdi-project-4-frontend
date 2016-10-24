angular
.module("bidUpApp")
.controller("MainCtrl", MainCtrl);

MainCtrl.$inject = ["$rootScope", "CurrentUserService", "$state"];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;
  vm.user = CurrentUserService.getUser();
  console.log("MainCTRL LOADED");
  $rootScope.$on("loggedIn", () => {
    vm.user = CurrentUserService.getUser();
    $state.go("auctionsIndex");
  });

  vm.logout = () => {
    event.preventDefault();
    CurrentUserService.clearUser();
  };

  $rootScope.$on("loggedOut", () => {
    vm.user = null;
    $state.go("home");
  });


  // vm.toggleFilter = toggleFilter;
  // function toggleFilter(){
  //   event.stopPropagation();
  //   event.preventDefault();
  //   $("#menu-toggle").toggleClass("clicked");
  //   $("#sidebar-wrapper").toggleClass("active");
  // }
}
