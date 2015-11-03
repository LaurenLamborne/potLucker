(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};

		o.createPotluck = function(potluck) { //second param = comID
			var q = $q.defer();
			var i = 0;
			while(i < potluck.dish.length)
			{
				if(!potluck.dish[i]) {
					potluck.dish.splice(i, 1);
				}
				else {i++;}
			}
			// if(recipe.ingredients.length < 1) {q.reject(recipe);}
			// else {
			$http.post('/api/potluck', potluck).then(function(res) {
				// console.log(res)
				q.resolve(res.data);
			});
			// }
			return q.promise;
		};

		o.getAllPotlucks = function() {
		var q = $q.defer();
		$http.get('/api/potluck').then(function(res) {
			q.resolve(res.data);
		});
		return q.promise;
	};

	o.getPotluckById = function(id) {
	console.log(id);
	var q = $q.defer();
	$http.get('/api/potluck/' + id).then(function(res) {
		console.log(res);
		q.resolve(res.data);
		// console.log(res.data);

	});
	return q.promise;
};

o.deletePotluck = function(id) {
	var q = $q.defer();
	$http.delete('/api/potluck/' + id.id).then(function(res) {
		q.resolve();
	});
	return q.promise;
};


o.getPotluckByIdToEdit = function(id) {
console.log(id);
var q = $q.defer();
$http.get('/api/potluck/edit/' + id).then(function(res) {
	console.log(res);
	q.resolve(res.data);
	// console.log(res.data);

});
return q.promise;
};

o.updatePotluck = function(potluckObj) {
	// console.log(recipeObj);

	var q = $q.defer();
	$http.put('/api/potluck', potluckObj).then(function (res) {
		q.resolve(res.data);
	});
	return q.promise;
};

o.createComment = function(comment, potId) {
		var q = $q.defer();
		$http.post('/api/potluck/' + potId + '/comment', comment).then(function(res) {
			q.resolve(res.data);
		});
		return q.promise;
	};

		// code above
		return o;
	}
})();
