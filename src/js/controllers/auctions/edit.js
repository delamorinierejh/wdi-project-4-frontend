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
