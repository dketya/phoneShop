(function() {

angular.module('myApp')
  .controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [];
  $scope.addSlide = function (index) {
    $scope.slides.push({
      image: 'images/slideImages/slide' + index + '.png',
      text: index
    });
  };
  for (var i = 1; i < 5; i++) {
    $scope.addSlide(i);
  }
  });
  
})();