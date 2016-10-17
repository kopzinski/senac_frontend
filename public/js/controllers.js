/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp.controllers',[])
.controller('MovieListController',function($scope,$state,popupService,$window,Movie){

    Movie.query(function(data){
        $scope.movies = data.movies;
    });

    $scope.deleteMovie=function(movie){
        if(popupService.showPopup('Really delete this?')){
            movie.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('MovieViewController',function($scope,$stateParams,Movie){

    Movie.get({id:$stateParams.id}, function(data){
      $scope.movie=data.movie;
    });


}).controller('MovieCreateController',function($scope,$state,$stateParams,Movie){

    $scope.movie=new Movie();

    $scope.addMovie=function(){
        $scope.movie.$save(function(){
            $state.go('movies');
        });
    }

}).controller('MovieEditController',function($scope,$state,$stateParams,Movie){

    $scope.updateMovie=function(){
      console.log($scope.movie)
      console.log($stateParams.id)
        Movie.update({id:$stateParams.id},$scope.movie, function(data){
          $state.go('movies');
          console.log(data);
        });
        
    };

    $scope.loadMovie=function(){
      Movie.get({id:$stateParams.id}, function(data){
        $scope.movie=data.movie;
      });
    };

    $scope.loadMovie();
});
