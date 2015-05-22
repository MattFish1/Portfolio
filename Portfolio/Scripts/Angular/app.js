var app = angular.module('app', ['ngRoute', 'appControllers'])
    
.config(['$routeProvider',
     function ($routeProvider) {       
       $routeProvider
        .when('/about',{
            templateUrl: '/Templates/About.html',
            controller: 'AboutController'
        })
        .when('/work', {
            templateUrl: '/Templates/Work.html',
            controller: 'WorkController'
        })
        .when('/freelance',{
            templateUrl: 'Templates/Home.html',
            controller: 'FreelanceController'
        })
        .when('/projects', {
            templateUrl: '/Templates/Projects.html',
            controller: 'ProjectsController'
        })
        .when('/contact',{
            templateUrl: '/Templates/Contact.html',
            controller:'ContactController'
         })
        .otherwise({
            redirectTo: '/about'
        });
     }]);

app.run(function ($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
});
