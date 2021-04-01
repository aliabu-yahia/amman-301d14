'use strict';

let pizza = 'PIZZA \u{1F355}';

function bake(pizza) {
    let toppingsPizza = addToping(pizza);
    console.log(toppingsPizza);
    console.log('baking \u{1F355} \u{1F476} ...');
}

function addToping(pizza) {
    makeDough(pizza)
    return `Toppings added to the ${pizza}`;
}

function makeDough(pizza) {
    console.log(`Made the ${pizza} dough`);
}

function consumeThePizza(pizza) {
    bake(pizza)
    console.log(`The ${pizza} is ready`);
}

consumeThePizza(pizza);
