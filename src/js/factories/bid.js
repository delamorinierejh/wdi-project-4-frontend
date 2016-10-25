angular
.module("bidUpApp")
.factory("Bid", Bid);

Bid.$inject = ["$resource", "API"];
function Bid($resource, API) {
  return $resource(`${API}/bids/:id`, { id: "@_id" }, {
    'query':  { method: "GET", isArray: true },
  });
}
