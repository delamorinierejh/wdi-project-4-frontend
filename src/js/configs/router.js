angular
  .module("bidUpApp")
  .config(Router);

Router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
    controller: "HomeCtrl as home"
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl as users'
  })
  .state('usersNew', {
    url: '/users/new',
    templateUrl: '/js/views/users/new.html',
    controller: 'UsersNewCtrl as users'
  })
  .state("usersEdit", {
    url: "/users/:id/edit",
    templateUrl: "/js/views/users/edit.html",
    controller: "UsersEditCtrl as users"
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as users'
  })
  .state('auctionsIndex', {
    url: '/auctions',
    templateUrl: '/js/views/auctions/index.html',
    controller: 'AuctionsIndexCtrl as auctions'
  })
  .state('auctionsNew', {
    url: '/auctions/new',
    templateUrl: '/js/views/auctions/new.html',
    controller: 'AuctionsNewCtrl as auctions'
  })
  .state("auctionsEdit", {
    url: "/auctions/:id/edit",
    templateUrl: "/js/views/auctions/edit.html", 
    controller: "AuctionsEditCtrl as auctions"
  })
  .state('auctionsShow', {
    url: '/auctions/:id',
    templateUrl: '/js/views/auctions/show.html',
    controller: 'AuctionsShowCtrl as auctions'
  })
  ;

  $urlRouterProvider.otherwise("/");

}
