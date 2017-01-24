angular
.module("bidUpApp")
.controller("AuctionsNewCtrl", AuctionsNewCtrl);

AuctionsNewCtrl.$inject = ["Auction", "$state", 'CurrentUserService', '$http', 'AuctionUpload'];
function AuctionsNewCtrl(Auction, $state, CurrentUserService, $http, AuctionUpload){
  const vm = this;
  vm.submit = () => {
    // console.log('running');
    // console.log(formData);
    // vm.auction.date += (8*60*60);
    // Auction
    // .save({ auction: vm.auction })
    // .$promise
    // .then(data => {
    //   $state.go("auctionsIndex");
    // });
    AuctionUpload.createWithAttachment(vm.auction);
  };
  vm.searchCharities = searchCharities;
  function searchCharities(){
    if (vm.charitySearch) {
      $http({
        method: 'GET',
        url: `https://api.justgiving.com/780bb3da/v1/charity/search?q=${vm.charitySearch}&pageSize=5`
      }).then(response => {
        vm.charitiesList = response.data.charitySearchResults;
      });
    }
  }
  vm.restartSearch = restartSearch;
  function restartSearch(){
    vm.charitiesList = null;
    vm.charitySearch = null;
    vm.auction.charity = null;
  }
}
