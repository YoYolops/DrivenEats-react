/** 
 * Turns a string into an integer
 * @example parsePriceToInterger("12,99"); // 1299
 * @param {String} priceString the string that will be transformed
 * @return {Number} An interger that represents the price in cents
 */
 function parsePriceToInterger(priceString) {
    const arrayPriceString = priceString.split(",");
    const priceStringInCents = arrayPriceString[0] + arrayPriceString[1];
    const priceInCents = parseInt(priceStringInCents);
    return priceInCents;
}

/**
 * Turns a interger into a string that represents a price
 * @example parsePriceInString(1299); // "12,99"
 * @param priceInt the interger that will be transformed
 * @return {String} the formated price
 */
 function parsePriceToString(priceInt) {
    const stringedInt = priceInt.toString();
    let centsSlice = ""; // two last numbers represent the cents
    let intSlice = ""; // the other numbers represents the interger part of the value

    for(let i = 0; i < stringedInt.length; i++) {
        if(i >= stringedInt.length - 2) {
            centsSlice += stringedInt[i]
        } else {
            intSlice += stringedInt[i]
        }
    }

    return intSlice + "," + centsSlice;
}

/** 
 * Generates a proper link based in customer's selections
 * @return {String} custom link for rediecting to WhatApp
 */
 function generateLinkToWhatsApp(order, customer, totalOrderPrice) {
    const baseURL = "https://wa.me/5583996231204";

    const { dish, beverage, dessert } = order;
    const parsedTotalOrderPrice = parsePriceToString(totalOrderPrice)

    const message = `Olá, gostaria de fazer o pedido:\n 
        - Prato(s): ${dish.map(dish => dish.name + " / ")}\n 
        - Bebida(s): ${beverage.map(beverage => beverage.name + " / ")}\n 
        - Sobremesa(s): ${dessert.map(dessert => dessert.name + " / ")}\n
        Total: R$ ${parsedTotalOrderPrice} 
        \n\n Nome: ${customer["name"]}
        \nEndereço: ${customer["address"]}`; 
        
    const encodedMessage = encodeURIComponent(message);
    const finalURL = baseURL + "?text=" + encodedMessage;

    return finalURL;
}

const utils = {
    parsePriceToInterger,
    parsePriceToString,
    generateLinkToWhatsApp
}

export default utils;