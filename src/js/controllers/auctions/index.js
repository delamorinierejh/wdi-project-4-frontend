angular
.module("bidUpApp")
.controller("AuctionsIndexCtrl", AuctionsIndexCtrl);

AuctionsIndexCtrl.$inject = ["Auction", "CurrentUserService"];
function AuctionsIndexCtrl(Auction, CurrentUserService){
  const vm = this;

  Auction
  .query()
  .$promise
  .then(data => {
    vm.auctions = data;
    vm.auctions.reverse();
  });

  function newIndex(){
    $("#auctionslist").hide().fadeIn(400);
  }
  vm.sortByReserveAsc = ()=> {
    vm.auctions.sort(function(a,b){
      return b.reserve - a.reserve;
    }).reverse();
    newIndex();
    $("ul.sortbuttons li a").css({"background-color": "transparent", "color" : "#225560"});
    $("#button1").css({"background-color": "#225560", "color" : "white"});
  };
  vm.sortByReserveDesc = ()=> {
    vm.auctions.sort(function(a,b){
      return b.reserve - a.reserve;
    });
    newIndex();
    $("ul.sortbuttons li a").css({"background-color": "transparent", "color" : "#225560"});
    $("#button2").css({"background-color": "#225560", "color" : "white"});
  };
  vm.sortByExpirySoonest = ()=> {
    vm.auctions.sort(function(a,b){
      return new Date(b.end_date) - new Date(a.end_date);
    }).reverse();
    newIndex();
    $("ul.sortbuttons li a").css({"background-color": "transparent", "color" : "#225560"});
    $("#button3").css({"background-color": "#225560", "color" : "white"});
  };
  vm.sortByExpiryFurthest = ()=> {
    vm.auctions.sort(function(a,b){
      return new Date(b.end_date) - new Date(a.end_date);
    });
    newIndex();
    $("ul.sortbuttons li a").css({"background-color": "transparent", "color" : "#225560"});
    $("#button4").css({"background-color": "#225560", "color" : "white"});
  };
}
