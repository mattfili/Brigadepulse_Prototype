angular
	.module('BrigadePulse', ['ui.router', 'ui.bootstrap', 'firebase'])
	
	.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/landing')

    $stateProvider
      	.state('start', {
          abstract: true,
          templateUrl: 'assets/landing.html',
          controller: 'Main',
          controllerAs: 'Main'
      	})

        .state('start.landing', {
          url: '/landing',
          views: {
            'feature': {
              templateUrl: 'assets/projects/feature.html'
            },
            'preview': {
              templateUrl: 'assets/projects/preview.html'
            },
            'local': {
              templateUrl: 'assets/projects/local.html'
            },
            'global': {
              templateUrl: 'assets/projects/global.html'
            }
          }
        })

        .state('fullpage', {
          abstract: true,
          templateUrl: 'assets/fullpage.html',
          controller: 'Main',
          controllerAs: 'Main'
        })

        .state('fullpage.info', {
          url: '/fullpage',
          views: {
              'summary': {
                templateUrl: 'assets/projects/summary.html'
              },
              'detail': {
                templateUrl: 'assets/projects/detail.html'
              },
              'events': {
                templateUrl: 'assets/projects/events.html'
              },
              'modal': {
                templateUrl: 'assets/projects/modal.html'
              }
          }
        })

  })

