angular
.module("bidUpApp")
.controller("UsersShowCtrl", UsersShowCtrl);

UsersShowCtrl.$inject = ["User", "$stateParams", "$state", "$http"];
function UsersShowCtrl(User, $stateParams, $state, $http){
  const vm = this;
  User.get($stateParams, data => {
    vm.user = data;
    vm.user.bids.reverse();
    for (var i = 0; i < vm.user.bids.length; i++) {
    }
    var auctionIdArray = vm.user.bids.map(a => a.auction.id);
    var newArrayOne = [];
    var returnArray = [];
    $.each(auctionIdArray, function(i, el){
      if($.inArray(el, newArrayOne) === -1){
        newArrayOne.push(el);
        returnArray.push(vm.user.bids[i]);
      }
    });
    vm.user.bids = returnArray;
  });


}
