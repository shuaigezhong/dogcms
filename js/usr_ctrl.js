//usr controller
app.controller("usr_ctrl",function($scope,$http,$routeParams){
	$scope.datas={};
    $scope.curPage = "11";
	$scope.change_page = function(item){
	$scope.curPage = item.p;
		
		console.log("change_page1");
	};
    
})
