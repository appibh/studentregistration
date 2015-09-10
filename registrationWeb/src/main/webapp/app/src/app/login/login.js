/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  })
  .state( 'register', {
    url: '/register',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/register.tpl.html'
      }
    },
    data:{ pageTitle: 'Register' }
  });
})
.factory( 'loginService', function($http){
	var session = {};
	session.login = function(account, success){
		console.log("inside login function");
		console.log(account.userid);
		$http.post("/registrationWeb/login", "username=" + account.userid + "&password=" + account.password, 
			{ headers: {'Content-Type': 'application/x-www-form-urlencoded'}} 
		)
		.then(function(data) {
			success();
		}, function(data) {
				console.log(data);
				if (data.status ==  401){
					alert("error logging in.. Please register if you have not registered yet");
				}
		});
	};
	
	session.register = function(user, success, failure){
		$http.post('http://localhost:8080/registrationWeb/rest/user/create',angular.toJson(user),
			{ headers: {'Content-Type': 'application/json'}}
		)
		.then(function(data) {
			success(data);
		},function(data){
			error();
		});		
	};
	return session;
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'LoginCtrl', function LoginController( $scope, loginService, $state ) {
	$scope.login = function(){
		loginService.login($scope.account, function(){
			$state.go("home");
		});
	};
	
	$scope.register = function(){
		$scope.$broadcast('show-errors-check-validity');
		if ($scope.registerForm.$invalid) { return; }
		loginService.register($scope.user, function(user){
			$state.go("login");
		}, function(){
			alert("Failed to register the user");
		});
	};
	
	$scope.reset = function(){
		$scope.$broadcast('show-errors-reset');
	};
})

;

