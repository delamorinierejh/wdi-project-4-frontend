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
  });
  function newIndex(){
    $("#auctionslist").hide().fadeIn(400);
  }
  vm.sortByReserveAsc = ()=> {
    vm.auctions.sort(function(a,b){
      return b.reserve - a.reserve;
    }).reverse();
    newIndex();
  };
  vm.sortByReserveDesc = ()=> {
    vm.auctions.sort(function(a,b){
      return b.reserve - a.reserve;
    });
    newIndex();
  };
  vm.sortByExpirySoonest = ()=> {
    vm.auctions.sort(function(a,b){
      return new Date(b.end_date) - new Date(a.end_date);
    }).reverse();
    newIndex();
  };
  vm.sortByExpiryFurthest = ()=> {
    vm.auctions.sort(function(a,b){
      return new Date(b.end_date) - new Date(a.end_date);
    });
    newIndex();
  };
}
