//dirctive libs
app.directive("pages",function(){
	return {
	template: '<nav>\
 	<ul class="pagination">\
	<li ng-repeat="v in list" class="{{v.active}}"><a href="javascript:void(0)" ng-click="changePage({item:v})">{{v.label}}</a></li>\
	</ul>\
	</nav>',
scope : {
	curPage : "=",
	changePage : "&"
},
link : function(scope,element,attr){
      
},
controller:function($scope,$routeParams,$http){
	$scope.list=[];
	$scope.total_page = 15;
	$scope.curPage=2;
	$scope.page_length = 2;

	$scope.init = function()
	{
		$scope.list = [];
		var start_page = $scope.curPage - $scope.page_length;
		start_page = start_page >1 ? start_page : 1;
		console.log(start_page);
		if(start_page ==1){
			var end_page = $scope.curPage + $scope.page_length*2;
		}else{
			var end_page = $scope.curPage + $scope.page_length;
		}
		end_page = end_page < $scope.total_page ? end_page : $scope.total_page;
		if(end_page == $scope.total_page){
			start_page = $scope.total_page - $scope.page_length*2;
		}

		console.log(end_page);
		// render first page
		if(start_page > 1)
		{
			var item = {label : 1, p : 1}
			$scope.list.push(item);
			item = {label : "...", p : start_page}
			$scope.list.push(item);
		}

		for(var i = start_page; i <= end_page; i++)
		{
			if($scope.curPage == i){
			  var item = {label:i, p:i, active : "active"}
			}else{
				var item = {label:i, p:i}
			}
			$scope.list.push(item);
		}
		if(end_page < $scope.total_page)
		{
			item = {label : "...", p : start_page}
			$scope.list.push(item);
			item = {label: $scope.total_page, p: $scope.total_page};
			$scope.list.push(item);
		}
	}
	
   
	//do init
	$scope.init();
	$scope.$watch('curPage', function(){
		$scope.init();
	});
}
 };
});

