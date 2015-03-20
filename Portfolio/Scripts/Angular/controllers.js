var appControllers = angular.module('appControllers', []);

appControllers.controller('AboutController', ['$scope', '$location', '$anchorScroll', '$routeParams',
    function ($scope, $location, $anchorScroll, $routeParams) {

        $('.about-button').addClass('active-nav');
        $('.work-button').removeClass('active-nav');
        $('.contact-button').removeClass('active-nav');
        $('.projects-button').removeClass('active-nav');
        $('.freelance-button').removeClass('active-nav');
        
}]);

appControllers.controller('ProjectsController', ['$scope', '$location', '$anchorScroll', '$routeParams',
    function ($scope, $location, $anchorScroll, $routeParams) {
        $('.about-button').removeClass('active-nav');
        $('.work-button').removeClass('active-nav');
        $('.contact-button').removeClass('active-nav');
        $('.projects-button').addClass('active-nav');
        $('.freelance-button').removeClass('active-nav');
}]);

appControllers.controller('WorkController', ['$scope', '$location', '$anchorScroll', '$routeParams',
    function ($scope, $location, $anchorScroll, $routeParams) {
    $('.about-button').removeClass('active-nav');
    $('.work-button').addClass('active-nav');
    $('.contact-button').removeClass('active-nav');
    $('.projects-button').removeClass('active-nav');
    $('.freelance-button').removeClass('active-nav');

        
    }]);

appContollers.controller('FreelanceController', ['$scope', '$location', '$anchorScroll', '$routeParams',
    function ($scope, $location, $anchorScroll, $routeParams) {
        $('.about-button').removeClass('active-nav');
        $('.work-button').removeClass('active-nav');
        $('.contact-button').removeClass('active-nav');
        $('.projects-button').removeClass('active-nav');
        $('.freelance-button').addClass('active-nav');
    }]);
    
appControllers.controller('ContactController', ['$scope', '$location', '$anchorScroll', '$routeParams',
    function ($scope, $location, $anchorScroll, $routeParams) {

    $('.about-button').removeClass('active-nav');
    $('.work-button').removeClass('active-nav');
    $('.contact-button').addClass('active-nav');
    $('.projects-button').removeClass('active-nav');
    $('.freelance-button').removeClass('active-nav');
    //Sent message
    $scope.show = false;
    $scope.sendMessage = "Send Me a Message";
    $scope.giveCall = "Or Give Me a Call: 720 838 5916";

    //contact info
    $scope.Name = "";
    $scope.Email = "";
    $scope.Number = "";
    $scope.Message = "";

    $('#sendButton').on('click', function () {
        $.ajax({
            url: '/Home/ContactForm',
            type: 'Post',
            data: {name: $scope.Name, email: $scope.Email, number: $scope.Number, message: $scope.Message},
            success: function (data) {

                $scope.$apply(function () {
                    $scope.show = true;
                    if (data = true) {
                        $('#contactForm').hide();
                        $scope.sendMessage = "Message Successfully Sent! ";
                        $scope.giveCall = "You're Still Free To Give Me a Call: 720 838 5916";
                        $location.hash($routeParams.scrollTo);
                        $anchorScroll();
                    }
                    else {
                        $('#contactForm').hide();
                        $scope.giveCall = "";
                        $scope.sendMessage = "Your Message Failled To Send. Email Me at mattfish490@gmail.com or Give Me a Call at 720 838 5916.";
                        $location.hash($routeParams.scrollTo);
                        $anchorScroll();
                    }
                });

            }
        });
    });
}]);
