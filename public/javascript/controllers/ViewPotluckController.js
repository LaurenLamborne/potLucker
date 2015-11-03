(function() {
	'use strict';
	angular.module('app')
	.controller('ViewPotluckController', ViewPotluckController);

	function ViewPotluckController(HomeFactory, UserFactory, $stateParams, $state) {
		var vm = this;
		vm.currentUser = UserFactory.status;
		vm.userType = {};
		vm.comment = {};

		vm.isItemChecked = function(item) {
			return !!item.broughtBy;
		};

		var determineUser = function(potluck, userID) {
			vm.userType = {
				isCreator: false,
				isGuest: false,
				isNobody: true
			};

			if(potluck.createdBy == userID) {
				vm.userType.isCreator = true;
				vm.userType.isGuest = false;
				vm.userType.isNobody = false;
			}

			if(potluck.dish){
			for (var i = 0; i < potluck.dish.length; i++) {
				if (potluck.dish[i].broughtBy && userID == potluck.dish[i].broughtBy) {
					vm.userType.isGuest = true;
					vm.userType.isCreator = false;
					vm.userType.isNobody = false;
					break;
				}
			}
		}
		};


		HomeFactory.getPotluckById($stateParams.id).then(function(res) {
		vm.potluck = res;
		determineUser(vm.potluck, UserFactory.status._id);
	});

	vm.editPotluck = function(id) {
	$state.go('EditPotluck', {id: id});
	};

vm.deletePotluck = function(){
	var response = confirm("Are You Sure You'd Like To Delete?");
	if(response){
		HomeFactory.deletePotluck({id:$stateParams.id}).then(function() {
				$state.go('Home');
			});
}
else{
	$state.go('ViewPotluck', {id:$stateParams.id});
}
};

vm.attend = function() {
	vm.selectedDish.broughtBy = vm.currentUser._id;
	HomeFactory.updatePotluck({potluckEditted: vm.potluck}).then(function(res) {

		vm.potluck.dish.broughtBy = vm.selectedDish.broughtBy;
		vm.userType.isGuest = true;
		vm.userType.isNobody = false;
	});//save selected dish
};

vm.addComment = function() {
	HomeFactory.createComment(vm.comment, $stateParams.id).then(function(res) {

	});
};


	}
})();
