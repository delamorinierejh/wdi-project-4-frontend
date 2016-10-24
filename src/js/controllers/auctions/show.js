angular
  .module("bidUpApp")
  .controller("AuctionsShowCtrl", AuctionsShowCtrl);

AuctionsShowCtrl.$inject = ["Auction", "CurrentUserService", "$stateParams", "$state", "$http"];
function AuctionsShowCtrl(Auction, CurrentUserService, $stateParams, $state, $http){
  const vm = this;
  Auction.get($stateParams, data => {
    console.log(data);
    vm.auction = data;
    vm.user = CurrentUserService.getUser();
    $http({
      method: 'GET',
      url: `https://api.justgiving.com/780bb3da/v1/charity/search?charityId=${vm.auction.charity}`
    }).then(response => {
      // console.log(response);
      vm.charity = response.data.charitySearchResults[0];
      console.log(vm.charity);
    });
  });

  vm.delete = () => {
    Auction
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("auctionsIndex");
      });
  };

}
