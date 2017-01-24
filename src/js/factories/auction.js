angular
.module('bidUpApp')
.factory('Auction', Auction);

Auction.$inject = ['$resource', 'API'];
function Auction($resource, API) {
  return $resource(`${API}/auctions/:id`, { id: '@_id' }, {
    'query':  { method: 'GET', isArray: true },
    'update': { method: 'PUT' }
  });
}
