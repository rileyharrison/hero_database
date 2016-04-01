myApp.factory("HeroService", ["$http", function($http){
    var data = {};

    var postHero = function(data){
        $http.post("/hero", data).then(function(response){
            console.log("hero save", response);
            getHeroes();
        });
    };

    var getHeroes = function(){
        $http.get("/hero").then(function(response){
            console.log("get heroes", response.data);
            data.response = response.data;
        });
    };

    var nukeHero = function(heroId){
        console.log("in factory nuke hero id:", heroId.heroId);
        $http.delete("/hero/" + heroId.heroId).then(function(response){
            getHeroes();
        });
    };
    return{
        nukeHero : nukeHero,
        postHero : postHero,
        getHeroes : getHeroes,
        data : data

    };
}]);
