'use strict';

angular.module('russiahillbeersApp')
  .directive('popup', function ($templateCache, $document, $compile) {
    return {  
        restrict: 'E',                      
        link: function postLink(scope, element, attrs) {

            $(element).hide();
            
            scope.$watch(attrs.when, function(show) {
                console.log("clicked");
                $(element).on('mouseleave', function(e) {
                   $(element).hide();                    
                });
                if(show){
                    $(element).show();
                } else {                    
                    if($(element).css('display') == 'block') {
                        $(element).hide();                              
                    }
                }                    
            });     
        }       
      }
});
