var app = angular.module("app",["ngRoute"]);

app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{
        template:"<h1>内容部分</h1>"
    }).when("/index",{
        templateUrl:"index.html"
    }).otherwise({
        template:"<h2>这个是默认的模板哦</h2>"
    });
}]);
