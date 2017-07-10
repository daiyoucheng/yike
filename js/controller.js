var controller = angular.module("controller",[])
controller.controller("controllers",["$scope",function ($scope) {
    $scope.navs = [
        {links:"#/today",icon:"icon-home",text:"今日一刻"},
        {links:"./older.html",icon:"icon-file-empty",text:"往期内容"},
        {links:"./author.html",icon:"icon-pencil",text:"热门作者"},
        {links:"./category.html",icon:"icon-menu",text:"栏目浏览"},
        {links:"./favourite.html",icon:"icon-heart",text:"我的喜欢"},
        {links:"./settings.html",icon:"icon-cog",text:"设置"}
    ]
}])
// controller.config(function ($loctionProvider) {
//     $loctionPrivider.hashPrefix('');
// })
//
// controller.config("$rotueProvider",function ($rotueProvider) {
//     $rotueProvider.when("/today",{
//         templateUrl:""
//     })
// })