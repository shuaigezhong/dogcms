//usr controller
app.controller("usr_ctrl",function($scope,$http,$routeParams){
	$scope.name = "lee";
	$scope.title2 = "fff";
	$scope.datas={};
	console.dir($routeParams);
	var p = $routeParams.id;
	console.log(p)
    $http.get("/admin/usr/list?tel=&age=&p=" + p).success(function(rep){
		$scope.datas = rep.data.datas;
	});
})
