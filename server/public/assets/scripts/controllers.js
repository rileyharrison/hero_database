myApp.controller("AddController", ["$scope", "$http", "HeroService", "$location", function($scope, $http, HeroService, $location){
    $scope.heroes = {};
    $scope.data = [];

    $scope.addHero = function(data){
        console.log("in controllers.js to add Hero", data);
        var postObject = {};
        postObject.alias = data.alias;
        postObject.first_name = data.first_name;
        postObject.last_name = data.last_name;
        postObject.city = data.city;
        postObject.power_name = data.power_name;
        HeroService.postHero(postObject);
        $location.url('/view');
    };
}]);

myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
    console.log("in ShowController");

    $scope.deleteHero = function(heroId){
        console.log("fixing to nuke hero with id", heroId);
        var nukeId = {"heroId": heroId};
        HeroService.nukeHero(nukeId);
    };

    HeroService.getHeroes();

    $scope.data=HeroService.data;
}]);
