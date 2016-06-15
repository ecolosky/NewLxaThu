//=============================================================================
//  Angular JS Script
//  Ed Colosky
//  April, 2016
//=============================================================================

var app = angular.module('app', ['jkuri.gallery','ui.bootstrap','ngRoute','ngAnimate']);
// configure the routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the gallery page
            .when('/gallery', {
                templateUrl : 'pages/gallery.html',
                controller  : 'galleryCtrl'
            })
            // route for the videos page
            .when('/videos', {
                templateUrl : 'pages/videos.html'
            })

            // route for the stories page
            .when('/stories', {
                templateUrl : 'pages/stories.html',
                controller : 'storyCtrl'
            })
            // route for the chapter history
            .when('/ChapterHistory', {
                templateUrl : 'pages/ChapterHistory/index.html'
            })
            // route for the links page
            .when('/links', {
                templateUrl : 'pages/links.html'
            })
            // route for the UsToday page
            .when('/UsToday', {
                templateUrl : 'pages/usToday.html'
            });
    });

app.controller('mainCtrl',function($scope){
  $scope.isCollapsed = true;
  $scope.message = "home controller is active";
  // $scope.verticalNav = "false";
  $scope.tabs = [
    { title:"Home", href:"/", icon: "glyphicon glyphicon-home"},
    { title:"Photo Vault", href:"/gallery", icon: "glyphicon glyphicon-picture" },
    { title:"Videos", href:"/videos", icon: "glyphicon glyphicon-facetime-video"},
    { title:"The Stories", href:"/stories", icon: "glyphicon glyphicon-book" },
    { title:"Chapter History", href:"/ChapterHistory", icon: "glyphicon glyphicon-hourglass" },
    { title:"Us Today", href:"/UsToday", icon: "glyphicon glyphicon-map-marker"},

    { title:"Links", href:"/links", icon: "glyphicon glyphicon-menu-hamburger" }

  ];

    $scope.navCollapsed = true;


  $scope.init = function () {
    $scope.labels = [];
    console.log("init() function")
    //pull SidebarLabels.json into the photo gallery
    $.getJSON("SidebarLabels.json", function(data){
          // I have placed alert here previously and realized it doesn't go into here
          console.log(data);
          $scope.labels = data
      })
      .fail(function() {
          console.log( "error pulling SidebarLabels" );
        });
    //pull Announcement.json into the photo gallery
    $.getJSON("Announcement.json", function(data){
        // I have placed alert here previously and realized it doesn't go into here
        console.log(data);
        $scope.annc = data
    })
    .fail(function() {
        console.log( "error pulling Announcement" );
      });
    //pull UsToday.json into the photo gallery
    $.getJSON("UsToday.json", function(data){
        // I have placed alert here previously and realized it doesn't go into here
        console.log(data);
        $scope.usToday = data
    })
    .fail(function() {
        console.log( "error pulling Us Today" );
      });
    };
  $scope.changeTab = function(data) {

    window.location.hash = data;
    $scope.navCollapsed = true;
  };
});

app.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]).controller('storyCtrl', ['$anchorScroll', '$location', '$scope',
  function ($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(x) {
      if ($location.hash() !== x) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
  }
]);



app.controller('galleryCtrl', function($scope, $document) {
  var self = this;
  $scope.status = "";
  $scope.title = "";
  $scope.ttTabEnable = "true";
  $scope.ttGalleryEnable = "true";
  $scope.ttImageEnable = "true";

  self.images= [];
  $scope.disableTT = function(TT){
    TT = false;
    alert("diable tt fired");
  };

  $scope.onGalleryClick = function(subitem, titleStr){
    self.images = subitem.images;
    $scope.title = titleStr + ' - ' + subitem.title;
    $scope.ttGalleryEnable = false;
  };


});
