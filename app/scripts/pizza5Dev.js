(function () {
'use strict';

var pizza5AppDev = angular.module('pizza5AppDev', ['pizza5App','ngMockE2E']);

pizza5AppDev.run(function($httpBackend) {
    var apiBaseUrl = 'http://localhost:8080/pizza5-api';
    var menu = [
        {
            id: 0,
            name: 'Margherita',
            price: 5.5,
            ingredients: ['Flour', 'Salt', 'Cheese', 'Tomato']
        },
        {
            id: 1,
            name: 'Napoli',
            price: 4.5,
            ingredients: ['Flour', 'Salt', 'Cheese', 'Tomato', 'Anchovies']
        },
        {
            id: 2,
            name: 'Four Seasons',
            price: 6.7,
            ingredients: ['Flour', 'Salt', 'Cheese', 'Tomato', 'Mushrooms', 'Olives']
        }
    ];

    $httpBackend.whenGET(apiBaseUrl + '/api/menu').respond(menu);
    $httpBackend.whenGET(/^views\/directives\/order.html/).passThrough();

});

}());