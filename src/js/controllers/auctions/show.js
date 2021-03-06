angular
.module("bidUpApp")
.controller("AuctionsShowCtrl", AuctionsShowCtrl);

AuctionsShowCtrl.$inject = ["Auction", "Bid", "CurrentUserService", "$stateParams", "$state", "$http"];
function AuctionsShowCtrl(Auction, Bid, CurrentUserService, $stateParams, $state, $http){
  const vm = this;

  Auction.get($stateParams, data => {
    console.log(data);
    window.scrollTo(0, 0);
    vm.auction = data;
    vm.auction.high_bid_user_id = CurrentUserService.getUser().id;
    vm.auction.bids.sort(compare).reverse();
    vm.user = CurrentUserService.getUser();
    vm.bid = {
      auction_id: vm.auction.id
    };
    vm.bidMinimum = vm.auction.reserve;
    if (vm.auction.bids.length){
      vm.bidMinimum = (parseInt(vm.auction.bids[0].amount) + 1);
      vm.highBid = vm.auction.bids[0];
    }


    vm.timerDate = Date.parse(vm.auction.end_date);

    $http({
      method: 'GET',
      url: `https://api.justgiving.com/780bb3da/v1/charity/search?charityId=${vm.auction.charity}`
    }).then(response => {
      vm.charity = response.data.charitySearchResults[0];
    });
    // vm.deadline = new Date(Date.parse(vm.auction.end_date));
    // initializeClock('clockdiv', vm.deadline);
  });

  vm.delete = () => {
    Auction
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("auctionsIndex");
    });
  };

  vm.placeBid = () => {
    Bid
    .save({bid : vm.bid})
    .$promise
    .then(data => {
      vm.auction.bids.unshift(data);
      vm.bid = {
        auction_id : vm.auction.id
      };
      vm.highBid = data;
      Auction
      .update($stateParams, { auction: vm.auction })
      .$promise
      .then(data => {
      });
    });
  };

  // function getTimeRemaining(endtime) {
  //   const t = Date.parse(endtime) - Date.parse(new Date());
  //   const seconds = Math.floor((t / 1000) % 60);
  //   const minutes = Math.floor((t / 1000 / 60) % 60);
  //   const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(t / (1000 * 60 * 60 * 24));
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds
  //   };
  // }
  //
  // function initializeClock(id, endtime) {
  //   const clock = document.getElementById(id);
  //   const daysSpan = clock.querySelector('.days');
  //   const hoursSpan = clock.querySelector('.hours');
  //   const minutesSpan = clock.querySelector('.minutes');
  //   const secondsSpan = clock.querySelector('.seconds');
  //
  //   function updateClock() {
  //     const t = getTimeRemaining(endtime);
  //
  //     daysSpan.innerHTML = t.days;
  //     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  //     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  //     if (t.days === 0 && t.minutes === 0 && t.hours === 0 && t.days === 0){
  //       vm.timeOut = true;
  //     }
  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }
  //   }
  //
  //   updateClock();
  //   const timeinterval = setInterval(updateClock, 1000);
  // }

  function compare(a,b) {
    return a.amount - b.amount;
  }

  vm.timerDone = () => {
    vm.hideTimer = true;
  };
}
