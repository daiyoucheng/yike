
var yike = angular.module("yike",["controller"])
yike.run(["$rootScope",function ($rootScope) {
    $rootScope.isCollapse = false
    $rootScope.toggle = function (param) {
        $rootScope.isCollapse = param;
        console.log(param);
        var dd = document.querySelectorAll(".navs dd");
        for(var i = 0; i< dd.length;i++){
            dd[i].style.transform = "translate("+ ($rootScope.isCollapse?"0%":"-100%") +")";
            dd[i].style.transitionDuration = "1s";
            dd[i].style.transitionDelay = 0.15*($rootScope.isCollapse?i:-i) + "s";
        }
    }
}])