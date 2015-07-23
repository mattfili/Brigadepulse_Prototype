angular
	.module('BrigadePulse', ['ui.router', 'ui.bootstrap', 'firebase'])
	
	.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/landing')

    $stateProvider
      	.state('start', {
          abstract: true,
          url: '/home',
          templateUrl: 'assets/landing.html'
      	})

        .state('start.landing', {
          url: '/landing',
          views: {
            'feature': {
              templateUrl: 'assets/projects/feature.html'
            },
            'preview': {
              templateUrl: 'assets/projects/preview.html'
            }
          }
        })

  })

