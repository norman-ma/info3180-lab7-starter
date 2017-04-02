app.factory('thumbnails',['$http',function($http){
   return $http.get('https://info3180-lab7-norman-ma.c9users.io/api/thumbnails')
        .then(function(response){
            return response.data;
        }, function(err){
            return err;
        });
}]);