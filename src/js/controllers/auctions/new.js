angular
.module("bidUpApp")
.controller("AuctionsNewCtrl", AuctionsNewCtrl);

AuctionsNewCtrl.$inject = ["Auction", "$state", 'CurrentUserService', '$http'];
function AuctionsNewCtrl(Auction, $state, CurrentUserService, $http){
  const vm = this;
  console.log("I am loaded");
  vm.submit = () => {
    Auction
    .save({ auction: vm.auction })
    .$promise
    .then(data => {
      $state.go("auctionsIndex");
    });
  };
  vm.searchCharities = searchCharities;
  function searchCharities(){
    console.log("clicked");
    if (vm.charitySearch) {
      $http({
        method: 'GET',
        url: `https://api.justgiving.com/780bb3da/v1/charity/search?q=${vm.charitySearch}&pageSize=5`
      }).then(response => {
        console.log(response);
        vm.charitiesList = response.data.charitySearchResults;
        console.log(vm.charitiesList);
      });
    }
  }
  vm.restartSearch = restartSearch;
  function restartSearch(){
    console.log("clicked");
    vm.charitiesList = null;
    vm.charitySearch = null;
    vm.auction.charity = null;
  }
}
