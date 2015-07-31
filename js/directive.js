//dirctive libs
app.directive("pages",function(){
	return {
		template: '<nav>\
                   <ul class="pagination">\
    			   <li ng-repeat="v in list">{{title2}}<a href="javascript:void(0)" ng-click="itemClick(v)" >{{v.label}}</a></li>\
  				   </ul>\
                   </nav>',
		
		scope:{
			cur_page: "=",
			itemClick: "&"
		},
		link : function(scope,element,attr,controller){
              
			  scope.$watch("cur_page",function(){
			  	console.log("cur_page change");
			  });
		},
		controller:function($scope,$routeParams,$http){
			//init
			$scope.list= [];
			$scope.total_page = 10;
		
		
			$scope.init = function(){

				for(var i = 1; i <= $scope.total_page; i++) {
					var item = {label: i, p: i};
					$scope.list.push(item);
				}
			}
			$scope.init();
	
			
		},
	
	};
});
