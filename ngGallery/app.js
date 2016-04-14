
//
// lxathuapp.config(function($routeProvider) {
//       $routeProvider
//
//           // route for the home page
//           .when('#', {
//               templateUrl : 'pages/home.html',
//               controller  : '2014Control'
//           })
//
//           // route for the about page
//           .when('/about', {
//               templateUrl : 'pages/about.html',
//               controller  : 'aboutController'
//           })
//     });
//

angular.module('app', ['jkuri.gallery']).
  controller('Ctrl', function($scope, $document) {
    var self = this;
    $scope.title = "2014 Reunion"
    self.images = [
      {thumb: 'img/2014_Reunion/026_tn.jpg', img: 'img/2014_Reunion/026.JPG'},
		  {thumb: 'img/2014_Reunion/027_tn.jpg', img: 'img/2014_Reunion/027.JPG'},
		  {thumb: 'img/2014_Reunion/028_tn.jpg', img: 'img/2014_Reunion/028.JPG'},
		  {thumb: 'img/2014_Reunion/029_tn.jpg', img: 'img/2014_Reunion/029.JPG'},
		  {thumb: 'img/2014_Reunion/030_tn.jpg', img: 'img/2014_Reunion/030.JPG'},
		  {thumb: 'img/2014_Reunion/031_tn.jpg', img: 'img/2014_Reunion/031.JPG'},
      {thumb: 'img/2014_Reunion/032_tn.jpg', img: 'img/2014_Reunion/032.JPG'},
      {thumb: 'img/2014_Reunion/033_tn.jpg', img: 'img/2014_Reunion/033.JPG'},
      {thumb: 'img/2014_Reunion/034_tn.jpg', img: 'img/2014_Reunion/034.JPG'},
      {thumb: 'img/2014_Reunion/035_tn.jpg', img: 'img/2014_Reunion/035.JPG'},
      {thumb: 'img/2014_Reunion/036_tn.jpg', img: 'img/2014_Reunion/036.JPG'},
      {thumb: 'img/2014_Reunion/037_tn.jpg', img: 'img/2014_Reunion/037.JPG'},
      {thumb: 'img/2014_Reunion/038_tn.jpg', img: 'img/2014_Reunion/038.JPG'},
      {thumb: 'img/2014_Reunion/039_tn.jpg', img: 'img/2014_Reunion/039.JPG'},
      {thumb: 'img/2014_Reunion/040_tn.jpg', img: 'img/2014_Reunion/040.JPG'},
      {thumb: 'img/2014_Reunion/041_tn.jpg', img: 'img/2014_Reunion/041.JPG'},
      {thumb: 'img/2014_Reunion/042_tn.jpg', img: 'img/2014_Reunion/042.JPG'},
      {thumb: 'img/2014_Reunion/043_tn.jpg', img: 'img/2014_Reunion/043.JPG'},
      {thumb: 'img/2014_Reunion/044_tn.jpg', img: 'img/2014_Reunion/044.JPG'},
      {thumb: 'img/2014_Reunion/045_tn.jpg', img: 'img/2014_Reunion/045.JPG'},
      {thumb: 'img/2014_Reunion/046_tn.jpg', img: 'img/2014_Reunion/046.JPG'},
      {thumb: 'img/2014_Reunion/047_tn.jpg', img: 'img/2014_Reunion/047.JPG'},
      {thumb: 'img/2014_Reunion/048_tn.jpg', img: 'img/2014_Reunion/048.JPG'},
      {thumb: 'img/2014_Reunion/049_tn.jpg', img: 'img/2014_Reunion/049.JPG'},
      {thumb: 'img/2014_Reunion/050_tn.jpg', img: 'img/2014_Reunion/050.JPG'},
      {thumb: 'img/2014_Reunion/051_tn.jpg', img: 'img/2014_Reunion/051.JPG'},
      {thumb: 'img/2014_Reunion/052_tn.jpg', img: 'img/2014_Reunion/052.JPG'},
      {thumb: 'img/2014_Reunion/053_tn.jpg', img: 'img/2014_Reunion/053.JPG'},
      {thumb: 'img/2014_Reunion/054_tn.jpg', img: 'img/2014_Reunion/054.JPG'},
      {thumb: 'img/2014_Reunion/055_tn.jpg', img: 'img/2014_Reunion/055.JPG'},
      {thumb: 'img/2014_Reunion/056_tn.jpg', img: 'img/2014_Reunion/056.JPG'},
      {thumb: 'img/2014_Reunion/057_tn.jpg', img: 'img/2014_Reunion/057.JPG'},
      {thumb: 'img/2014_Reunion/058_tn.jpg', img: 'img/2014_Reunion/058.JPG'},
      {thumb: 'img/2014_Reunion/059_tn.jpg', img: 'img/2014_Reunion/059.JPG'},
      {thumb: 'img/2014_Reunion/060_tn.jpg', img: 'img/2014_Reunion/060.JPG'},
      {thumb: 'img/2014_Reunion/061_tn.jpg', img: 'img/2014_Reunion/061.JPG'},
      {thumb: 'img/2014_Reunion/062_tn.jpg', img: 'img/2014_Reunion/062.JPG'},
      {thumb: 'img/2014_Reunion/063_tn.jpg', img: 'img/2014_Reunion/063.JPG'},
      {thumb: 'img/2014_Reunion/064_tn.jpg', img: 'img/2014_Reunion/064.JPG'},
      {thumb: 'img/2014_Reunion/065_tn.jpg', img: 'img/2014_Reunion/065.JPG'},
      {thumb: 'img/2014_Reunion/066_tn.jpg', img: 'img/2014_Reunion/066.JPG'},
      {thumb: 'img/2014_Reunion/069_tn.jpg', img: 'img/2014_Reunion/069.JPG'},
      {thumb: 'img/2014_Reunion/070_tn.jpg', img: 'img/2014_Reunion/070.JPG'},
      {thumb: 'img/2014_Reunion/071_tn.jpg', img: 'img/2014_Reunion/071.JPG'},
      {thumb: 'img/2014_Reunion/072_tn.jpg', img: 'img/2014_Reunion/072.JPG'},
      {thumb: 'img/2014_Reunion/073_tn.jpg', img: 'img/2014_Reunion/073.JPG'},
      {thumb: 'img/2014_Reunion/074_tn.jpg', img: 'img/2014_Reunion/074.JPG'},
      {thumb: 'img/2014_Reunion/075_tn.jpg', img: 'img/2014_Reunion/075.JPG'},
      {thumb: 'img/2014_Reunion/076_tn.jpg', img: 'img/2014_Reunion/076.JPG'},
      {thumb: 'img/2014_Reunion/077_tn.jpg', img: 'img/2014_Reunion/077.JPG'},
      {thumb: 'img/2014_Reunion/078_tn.jpg', img: 'img/2014_Reunion/078.JPG'},
      {thumb: 'img/2014_Reunion/079_tn.jpg', img: 'img/2014_Reunion/079.JPG'},
      {thumb: 'img/2014_Reunion/080_tn.jpg', img: 'img/2014_Reunion/080.JPG'},
      {thumb: 'img/2014_Reunion/081_tn.jpg', img: 'img/2014_Reunion/081.JPG'},
      {thumb: 'img/2014_Reunion/082_tn.jpg', img: 'img/2014_Reunion/082.JPG'},
      {thumb: 'img/2014_Reunion/083_tn.jpg', img: 'img/2014_Reunion/083.JPG'},
      {thumb: 'img/2014_Reunion/084_tn.jpg', img: 'img/2014_Reunion/084.JPG'},
      {thumb: 'img/2014_Reunion/085_tn.jpg', img: 'img/2014_Reunion/085.JPG'},
      {thumb: 'img/2014_Reunion/086_tn.jpg', img: 'img/2014_Reunion/086.JPG'},
      {thumb: 'img/2014_Reunion/087_tn.jpg', img: 'img/2014_Reunion/087.JPG'},
      {thumb: 'img/2014_Reunion/088_tn.jpg', img: 'img/2014_Reunion/088.JPG'},
      {thumb: 'img/2014_Reunion/089_tn.jpg', img: 'img/2014_Reunion/089.JPG'},
      {thumb: 'img/2014_Reunion/090_tn.jpg', img: 'img/2014_Reunion/090.JPG'},
      {thumb: 'img/2014_Reunion/091_tn.jpg', img: 'img/2014_Reunion/091.JPG'},
      {thumb: 'img/2014_Reunion/092_tn.jpg', img: 'img/2014_Reunion/092.JPG'},
      {thumb: 'img/2014_Reunion/093_tn.jpg', img: 'img/2014_Reunion/093.JPG'},
      {thumb: 'img/2014_Reunion/094_tn.jpg', img: 'img/2014_Reunion/094.JPG'},
      {thumb: 'img/2014_Reunion/095_tn.jpg', img: 'img/2014_Reunion/095.JPG'},
      {thumb: 'img/2014_Reunion/096_tn.jpg', img: 'img/2014_Reunion/096.JPG'},
      {thumb: 'img/2014_Reunion/097_tn.jpg', img: 'img/2014_Reunion/097.JPG'},
      {thumb: 'img/2014_Reunion/098_tn.jpg', img: 'img/2014_Reunion/098.JPG'},
      {thumb: 'img/2014_Reunion/099_tn.jpg', img: 'img/2014_Reunion/099.JPG'},
      {thumb: 'img/2014_Reunion/100_tn.jpg', img: 'img/2014_Reunion/100.JPG'},
      {thumb: 'img/2014_Reunion/101_tn.jpg', img: 'img/2014_Reunion/101.JPG'},
      {thumb: 'img/2014_Reunion/102_tn.jpg', img: 'img/2014_Reunion/102.JPG'},
      {thumb: 'img/2014_Reunion/103_tn.jpg', img: 'img/2014_Reunion/103.JPG'},
      {thumb: 'img/2014_Reunion/104_tn.jpg', img: 'img/2014_Reunion/104.JPG'},
      {thumb: 'img/2014_Reunion/105_tn.jpg', img: 'img/2014_Reunion/105.JPG'},
      {thumb: 'img/2014_Reunion/106_tn.jpg', img: 'img/2014_Reunion/106.JPG'},
      {thumb: 'img/2014_Reunion/107_tn.jpg', img: 'img/2014_Reunion/107.JPG'},
      {thumb: 'img/2014_Reunion/108_tn.jpg', img: 'img/2014_Reunion/108.JPG'},
      {thumb: 'img/2014_Reunion/109_tn.jpg', img: 'img/2014_Reunion/109.JPG'},
      {thumb: 'img/2014_Reunion/111_tn.jpg', img: 'img/2014_Reunion/111.JPG'},
      {thumb: 'img/2014_Reunion/112_tn.jpg', img: 'img/2014_Reunion/112.JPG'},
      {thumb: 'img/2014_Reunion/113_tn.jpg', img: 'img/2014_Reunion/113.JPG'},
      {thumb: 'img/2014_Reunion/114_tn.jpg', img: 'img/2014_Reunion/114.JPG'},
      {thumb: 'img/2014_Reunion/115_tn.jpg', img: 'img/2014_Reunion/115.JPG'}

    ];
  }
);
