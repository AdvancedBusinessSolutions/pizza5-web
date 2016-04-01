(function () {
'use strict';


describe('The pizza5App services', function() {
    var scope, orderService;
    
    beforeEach(module('pizza5App'));

    beforeEach(inject(function (OrderService) {
        orderService = OrderService;
    }));

    
    describe('the Order service', function() {

        it('should initially contain no pizzas', function() {
            expect(orderService.getOrder().items.length).toEqual(0);
        });

        describe('when i add a pizza', function() {

            beforeEach(function () {
                var pizza = {
                    name: 'margerita',
                    price: 10
                }
                orderService.addPizza(pizza)
            });

            it('the cart should contain one item', function() {
                expect(orderService.getOrder().items.length).toEqual(1);
            });
            it('the total price should be correct', function() {
                expect(orderService.getOrder().totalPrice).toEqual(10);
            });
        })
    });


});

}());