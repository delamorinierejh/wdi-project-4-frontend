
UsersShow.$inject = ['$stateParams']
function UsersShow($stateParams){
  $http({
    method: 'get',
    url: `http://localhost:3000/api/users/${stateParams.id}`
  })
}
