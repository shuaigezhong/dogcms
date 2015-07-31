var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/",{
        template:"<h1>{{datas}}中</h1>",
		controller:"usr_ctrl",
    }).when("/usr_list/:id",{
        templateUrl:"usr_list.html",
		controller : "usr_ctrl",
    }).otherwise({
        template:"<h2>这个是默认的模板哦</h2>"
    });
});
