(function () {
    'use strict';
   
     /*
        Define from angular not use cache, from templates, page1,page2,page3
     */
     
   // var cacheApp = angular.module('CacheApp',['RotaApp']);  
  
    // clear All cache
    /*
    cacheApp.run(function($rootScope, $templateCache) {
     $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
       });
    });// end
   */
  
  
    // clear current template in cache
   /*
    cacheApp.run(function($rootScope, $templateCache) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined'){
                $templateCache.remove(current.templateUrl);
            }
        });
    });
  
    */
  
  
  
  
})(); // end end

