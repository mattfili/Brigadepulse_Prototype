angular

	.module('BrigadePulse')

	.controller('Main', function ($http) {
		var vm = this;

		vm.speed = 5000
		vm.noWrapSLides = false

		var slides = vm.slides = [

		]

		function activate() {
			var it = slides.indexOfSlide()
			console.log(it)
		}

		var imageIndex = ['assets/images/nashville.jpg', 'assets/images/urbanfarm.jpg', 'assets/images/hackgroup2.jpg']
		vm.headers = ['Help underserved communities access fresh local farmed goods', 'Visualizing the worst sidewalks in Nashville', 'August 1st 2016 our second annual GLOBAL HACK']
		vm.listArray = [['Front End JS Devs', 'CSS Ninjas', 'UX and Design', 'Product Manager'],['Project Preview', 'Hack Nashville is at it again, crushing it with apps and stuff'],['Just One Week Unit the second annual global hack with live data via Brigade Pulse']]

		var headers = vm.headers 

		for (var i = 0; i<3; i++) {
			slides.push({image: imageIndex[i]})
		}

	})