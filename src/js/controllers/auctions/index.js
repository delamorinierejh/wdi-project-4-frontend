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
    console.log(data);
    vm.auctions = data;
  });
  vm.sortByReserveAsc = ()=> {
    vm.auctions.sort(function(a,b){
      return b.reserve - a.reserve;
    }).reverse();
  };
  vm.sortByReserveDesc = ()=> {
    vm.auctions.sort(function(a,b){
      return b.reserve - a.reserve;
    });
  };
  vm.sortByExpirySoonest = ()=> {
    vm.auctions.sort(function(a,b){
      return new Date(b.end_date) - new Date(a.end_date);
    }).reverse();
  };
  vm.sortByExpiryFurthest = ()=> {
    vm.auctions.sort(function(a,b){
      return new Date(b.end_date) - new Date(a.end_date);
    });
  };
}
