//usr controller
app.controller("usr_ctrl",function($scope,$http,$routeParams){
$scope.datas={};
$scope.title="大在 在";
	$scope.change_page=function(item){
		console.dir(item);
		$scope.cur_page= 5;
		console.log("change_pagefff")
	};
	console.dir($routeParams);
	var p = $routeParams.id;
	console.log(p);
    $http.get("/admin/usr/list?tel=&age=&p=" + p).success(function(rep){
		$scope.datas = rep.data.datas;
	});
})
