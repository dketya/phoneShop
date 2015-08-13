(function () {
  var appName = 'myApp';
  angular.module(appName)
  .config(['$stateProvider',
    '$urlRouterProvider',
    ctrl
    ]);
  function ctrl(
    $stateProvider,
    $urlRouterProvider) {

    var homeRoute = function () {
      return {
        url: '/',
        views: {
          '': { templateUrl: 'resources/home/homeView.html' },
          'slide': { templateUrl: '_shared/_slideView.html' },
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: appName,
              files: ['_shared/_slideCtrl.js']
            });
          }]
        }
      };
    }
    // , aboutRoute = function () {
    //   return {
    //     url: '/about',
    //     templateUrl: '/app/resources/about/aboutView.html'
    //   };
    // }

    ;

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', homeRoute())
    // .state('about', aboutRoute())
    ;

  }
})();