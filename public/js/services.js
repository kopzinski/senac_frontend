/**
 * Created by Sandeep on 01/06/14.
 */
var services = angular.module('movieApp.services',['ngResource']);
var baseUrl = 'http://localhost:5000';

services.factory('Movie',function($resource){
    return $resource('http://localhost:5000/movies/:id',{id:'@_id'},{
        query: { method: 'GET' },
        update: { method: 'PUT' }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
