(function () {
    'use strict';
 
  var Route = angular.module('RouteApp', ['ngRoute']);
  Route.config(['$routeProvider',  function($routeProvider) { 
         $routeProvider
                       .when('/home', {
                        template: 'home.html'  
                
                      }).when('/pagina1', { 
                        templateUrl: 'template/pagina1.html'  

                      }) .when('/pagina2', { 
                         templateUrl: 'template/pagina2.html' 

                      }).when('/pagina3', {
                        templateUrl: 'template/pagina3.html' 
                        
                    }).otherwise({
                            redirectTo: "#/home"
                    }); 
  
  
   }]); // end end      
      
          
          
})(); // end end


