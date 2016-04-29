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

            // route for the stories page
            .when('/stories', {
                templateUrl : 'pages/stories.html',
                controller : 'storyCtrl'
            })
            // route for the chapter history
            .when('/ChapterHistory', {
                templateUrl : 'pages/ChapterHistory/index.html'
            })
            // route for the stories page
            .when('/links', {
                templateUrl : 'pages/links.html'
            });
    });

app.controller('mainCtrl',function($scope){
  $scope.message = "home controller is active";
  $scope.tabs = [
    { title:"Home", href:"#/" },
    { title:"Photo Vault", href:"#/gallery" },
    { title:"Stories", href:"#/stories" },
    { title:"Chapter History", href:"#/ChapterHistory" },
    { title:"Links", href:"#/links" }
  ];
  $scope.init = function () {
    $scope.labels = [];
    console.log("init() function")
    $.getJSON("SidebarLabels.json", function(data){
          // I have placed alert here previously and realized it doesn't go into here
          console.log(data);
          $scope.labels = data
      })
      .fail(function() {
          console.log( "error" );
        });
    };
  $scope.changeTab = function(data) {
    window.location.hash = data;
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
  $scope.ttenable = "true";

  self.images= [];

  console.log($scope.index);
  // $scope.titles = [{
  //   title: '2000',
  //   children: [{
  //     name: 'Bob Hosken Photos',
  //     funct: 'on2000ReunionClick("Bob Hosken Photos")'},
  //     {name: 'Don Hayes Photos',
  //     funct: '"on2000ReunionClick({{child.name}})"'}]
  // }];


  // list of reunion years
  // $scope.years = ['2000','2002','2004','2008','2010','2014']
  // dropdown lists
  //
  // $scope.DropDown_2000 = ['Bob Hosken Photos','Don Hayes Photos','Guys and Gals','Herb and Pam Blomquist Photos','John Trani Photos','Sabatinos','The Cruise'];
  // $scope.DropDown_2002 = ['Don Hayes Photos','Herb and Pam Photos','Joe Curtis Photos','John Presper Photos'];
  // $scope.DropDown_2004 = ['Andy Anderson Photos','Bob Hosken Photos','Bob Schwab Photos','Charlie Opalek Photos','Don Hayes Photos','Ed Johnston Photos','Herb and Pam Blomquist Photos','John Presper Photos','Rich Pensebene Photos','Roger Grice Photos'];
  // $scope.DropDown_2006 = ['Charlie Opalek Photos','Don Hayes Photos','Ed Johnston Photos','Group Photo','Happy Birthday Joe','John Presper Photos','Larry Pepe photos','Roger Grice  Photos','Vinny Morabit Photos','Vinny Vintage Photos'];
  // $scope.DropDown_2008 = ['Don Hayes Photos','Ed Johnston Photos','Ed Waldbusser Photos','Group Photos','Joe and Barbara Curtiss','Roger Grice Photos','Tom McNicholas Photos'];
  // $scope.DropDown_2010 = ['Andy and Kathy photos','Charlie and Mary photos','Ed and Madeline photos'];
  // $scope.DropDown_2012 = ['Charlie and Mary photos','Joe and Barbara photos','Napa Flash Mob photos','Roger and Teri photos'];
  // $scope.DropDown_2014 = ['Roger and Teri photos'];
  // $scope.DropDown_Scrapbook = ['1956','1957','1958','1959','1960','1960-1964','1961','1962','1963','1964','1965','1966','1968','Dean Mittendorf','General Assembly 2000','Mortgage Burning 1973','Negatives Found at The House','Order of Merit Grice','Order of Merit Hayes','Post 1964','Pre 1960','Roger Visit to Brooklyn in 2001','Sky Diving','The Polywog 63 and 64'];
  //
  $scope.onGalleryClick = function(subitem, titleStr){
    self.images = subitem.images;
    $scope.title = titleStr + ' - ' + subitem.title;
  };

});
