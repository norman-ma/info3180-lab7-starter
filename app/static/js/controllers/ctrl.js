app.controller('ctrl',['$scope','thumbnails',
function($scope,thumbnails){
    thumbnails.then(function(data){
        $scope.data = data;
        $scope.data.thumbnails = filter($scope.data.thumbnails);
    });
}]);

function filter(array){
    var unique = [];
    array.forEach(function(item){
        if(unique.indexOf(item) === -1){
            unique.push(item);
        }
    });
    
    return unique;
    
}