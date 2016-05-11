(function () {
'use strict';

angular.module('pizza5App', []);

// CONTROLLERS
angular.module('pizza5App').controller('PizzaMenuCtrl', ['OrderService','$http', function (OrderService, $http) {
    this.addPizza = function (pizza) {
        OrderService.addPizza(pizza);
    };

    var apiBaseUrl = 'http://localhost:8080/pizza5-api';
    // vm stands for 'view model'
    var vm = this;
    vm.menu = [];
    vm.menuPresent = false;

	$http.jsonp(apiBaseUrl+'/api/menu?callback=JSON_CALLBACK')
        .success(function(data){
            console.log('Success', data);
            vm.menu = data;
            if (vm.menu.length > 0) {
                vm.menuPresent = true;
            }
        })
        .error(function(data, status, headers, config){
            console.log('Error getting menu',data, status, headers, config);
        });

}]);



// SERVICES
angular.module('pizza5App').service('OrderService', function() {
  var order = {
    pizzaCount: 0,
    totalPrice: 0,
    items: []
  };

  this.addPizza = function(pizza) {
    order.items.push(pizza);
    order.pizzaCount++;
    order.totalPrice +=  pizza.price;
  };

  this.getOrder = function() {
    return order;
  };

});


// DIRECTIVES 
angular.module('pizza5App').directive('order', function() {
    return {
        restrict: "E",
        scope: {},
        controller: ['OrderService', function (OrderService) {
            this.order = OrderService.getOrder();
        }],
        controllerAs: "orderCtrl",
        bindToController:true,
        templateUrl: "../views/directives/order.html"
    };
});


}());