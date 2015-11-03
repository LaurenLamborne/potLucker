(function() {
	'use strict';
	angular.module('app')
	.controller('CreatePotluckController', CreatePotluckController);

	function CreatePotluckController(HomeFactory, $stateParams, $state) {
		var vm = this;
		vm.potluck = {};
		vm.potluck.dish = [];
		// add your factory, state?

		vm.createPotluck = function() {
			// console.log($stateParams.id)
			// console.log(id);
			HomeFactory.createPotluck(vm.potluck).then(function(res) {
			$state.go('Home');
		}, function(res) {
			vm.potluck = res;
		});
	};

		// $scope.myDate = new Date();

// code above
	}
})();
