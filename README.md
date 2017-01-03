# BidUp

####A charity auction site by Johnnie de La Moriniere

![alt text](http://imgur.com/tJbeihh.png "BidUp Homepage")

###The Idea
My final project at WDI. BidUp is a charity auction site which allows individuals and business to post lots in an effort to raise money for their favourite charities. The idea for the app came from an observation that with the arrival of sites such as Just Giving, this whole process has become a lot easier. The internet is now the first port of call for anyone raising sponsorship money through running the marathon etc. Charity auctions are popular and effective ways to raise money at private events, ranging from political party conferences, to high-end events, to the local village fete. This brought me to my idea. Wouldn’t it be great to have a central site where individuals and businesses can post lots to raise money for their chosen charities? This would open up a new and effective way to raise money for charity (and a fun, interactive way for prominent organisations and people to give back a bit).

###The Build
![alt text](http://imgur.com/HjuMTDk.png "Profile Page")
The site was built using a PostgreSQL database on a Ruby on the Rails Backend, with Angular on the Frontend and Bootstrap for CSS. The site is fully mobile responsive. I used the Whenever Gem to schedule regular checks of the database and update the statuses of the auctions on a minute by minute basis. I also integrated the JustGiving API to provide rich data on charities and make the UX for setting up a lot far more seamless.  This was my first project using Rails, having stuck to the MEAN stack in previous projects. Using this new framework was a hugely enjoyable and educational process. Though I still do like the MEAN stack a lot, having got a decent understanding of associations, the speed  and legibility of Rails means I’ll definitely be looking to use it in future projects.

###Selected features of the site
#####Creating auctions:
Any user can post a lot, with details required including an image, description and a reserve. The user also can search for the name of their preferred charity in the relevant input - this does an AJAX request to the Just Giving API, returning the top 5 matches for the search terms. Once the user has chosen their charity from this list, the JustGiving Data is stored in an object as a property of the auction.

#####Bidding:
Bid can be placed as long as the following criteria are met:

1. The bid is higher than the current highest bid or the reserve
2. The bidder does not already have the highest bid
3. The bidder is not the owner of the auction
4. The auction is still live

#####Profile:
The profile page is a central hub from which the user can have an overview of thier activity on the site: 

1. Auctions they have posted (blue if the auction is live, red otherwise), 
2. Live auctions that they are involved in (green if they have the highest bid, red otherwise)
3. Expired auctions which they have won

###To view the app

![alt text](http://imgur.com/TsVy2lZ.png "Auction Page")

Though there is a version of the site on Heroku, it would cost a little too much for me to update the database as frequently as I’d like. So - in order to view the app, please do the following:

1. Download or clone both of the following repositories:
[https://github.com/delamorinierejh/wdi-project-4](https://github.com/delamorinierejh/wdi-project-4)
[https://github.com/delamorinierejh/wdi-project-4-frontend](https://github.com/delamorinierejh/wdi-project-4-frontend)
2. In Terminal, navigate to the relevant directories
3. In the WDI Project 4 directory run `rails db:drop db:create db:migrate db:seed` - then run `rails s`
4. In the WDI Project 4 Frontend directory run `gulp`
