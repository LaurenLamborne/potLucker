(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory, $state) {
		var vm = this;

		HomeFactory.getAllPotlucks().then(function(res) {
		vm.potlucks = res;
	});

	vm.goToPot = function(xid){
		$state.go('ViewPotluck', {id:xid});
};


// code above
	}
})();
