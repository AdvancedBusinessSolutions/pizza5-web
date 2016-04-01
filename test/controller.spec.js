(function () {
'use strict';

describe('The pizza5App controllers', function() {
    var scope, menuController, orderService;
    
    beforeEach(module('pizza5App'));

    beforeEach(inject(function ($rootScope, $controller, OrderService) {
        
        // add child scope
        scope = $rootScope.$new();

        orderService = OrderService;
        menuController =  $controller('PizzaMenuCtrl as menuCtrl', {'$scope': scope} );
    }));
    
    describe('the Order controller', function() {

        it('should initially contain no pizzas', function() {
            expect(orderService.getOrder().items.length).toEqual(0);
        });

        it('should increment order\'s items count when an item is added', function(){
            var item = {
                name:'pizza margherita',
                price:10
            };

            // using the 'controller as' defined reference to the controller
            scope.menuCtrl.addPizza(item);

            expect(orderService.getOrder().pizzaCount).toEqual(1);
            expect(orderService.getOrder().totalPrice).toEqual(10);

            // we can use also this reference to the controller
            menuController.addPizza(item);

            expect(orderService.getOrder().pizzaCount).toEqual(2);
            expect(orderService.getOrder().totalPrice).toEqual(20);            
        });


    });

});
}());