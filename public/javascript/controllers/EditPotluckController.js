(function() {
	'use strict';
	angular.module('app')
	.controller('EditPotluckController', EditPotluckController);

	function EditPotluckController(HomeFactory, $stateParams, $state) {
		var vm = this;
		vm.editPotluck = {};
		vm.editPotluck.dish = [];

		HomeFactory.getPotluckByIdToEdit($stateParams.id).then(function(res) {
			console.log(res);
			// console.log(vm.editPotluck);
			vm.editPotluck = res;
		// vm.showResults = vm.survey.userAnswered;
	});

	vm.updatePotluck = function(edittedPotluck) {
		// console.log(edittedRecipe);
		HomeFactory.updatePotluck({potluckEditted: edittedPotluck}).then(function(res) {
			$state.go('ViewPotluck', {id: $stateParams.id}, {location: true});
		});
	};

		// add your factory, state?


// code above
	}
})();
