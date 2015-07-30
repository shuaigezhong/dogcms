//dirctive libs
app.directive("pages",function(){
	return {
		template: '<nav>\
  <ul class="pagination">\
    <li>\
      <a href="#" aria-label="Previous">\
        <span aria-hidden="true">&laquo;</span>\
      </a>\
    </li>\
    <li ng-repeat="v in list"><a href="javascript:void(0)" ng-click="jump(this)">{{v}}</a></li>\
    <li><a href="#">{{title2}}</a></li>\
    <li><a href="#">3</a></li>\
    <li><a href="#">4</a></li>\
    <li><a href="#">5</a></li>\
    <li>\
      <a href="#" aria-label="Next">\
        <span aria-hidden="true">&raquo;</span>\
      </a>\
    </li>\
  </ul>\
</nav>',
		scope : {
			title: "=",
		},
		link : function(scope){},
		controller:function($scope,$routeParams,$http){
			$scope.list=[1,2,3];
			$scope.title="lee";
			$scope.jump = function(){
				console.log(this.v);
				
				$http.get("/admin/usr/list?tel=&age=&p=" + 0).success(function(rep){
				$scope.datas = rep.data.datas;
	});
			}
		}
	};
});
