angular
.module("bidUpApp")
.controller("AuctionsIndexCtrl", AuctionsIndexCtrl);

AuctionsIndexCtrl.$inject = ["Auction", "CurrentUserService"];
function AuctionsIndexCtrl(Auction, CurrentUserService){
  const vm = this;
  vm.johnnie = "Johnnie";
  console.log(`${vm.johnnie} is logged in`);
  Auction
  .query()
  .$promise
  .then(data => {
    console.log(data);
    vm.auctions = data;
  });
}
