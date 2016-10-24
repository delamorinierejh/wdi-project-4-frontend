angular
.module("bidUpApp")
.controller("AuctionsEditCtrl", AuctionsEditCtrl);

AuctionsEditCtrl.$inject = ["Auction", "$state", '$stateParams', '$http'];
function AuctionsEditCtrl(Auction, $state, $stateParams, $http){
  const vm = this;
  Auction.get($stateParams, data => {
    vm.auction = data;
    vm.auction.reserve = parseInt(vm.auction.reserve);
  });
  vm.update = () => {
    Auction
    .update($stateParams, { auction: vm.auction })
    .$promise
    .then(data => {
      $state.go("auctionsIndex");
    });
  };
}
