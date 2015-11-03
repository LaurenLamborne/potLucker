(function() {
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);

	function ProfileController($stateParams, UserFactory, HomeFactory, $state) {
		var vm = this;
		vm.status = UserFactory.status;


		UserFactory.getAllByUser(vm.status._id).then(function(res){
			vm.potluckArray = res;
		});

		vm.goToPot = function(xid){
			console.log(xid);
			$state.go('ViewPotluck', {id:xid}, {location: true});
	};


    // add your factory, state?

// code above
	}
})();
