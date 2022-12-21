"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const productName = 'tote bag';
const product = products_1.default.filter(product => product.name === productName)[0];
if (product.preOrder === "true") {
    console.log('We will send you a message when its on the way!');
}
let shipping;
let taxPercent = 0.05;
let taxTotal;
let total;
const shippingAddress = '69 Donkey Way, Oregon';
const price = Number(product.price);
if (price > 25) {
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
taxTotal = taxPercent * Number(product.price);
total = price + taxTotal + shipping;
console.log('Product Name: ', productName);
console.log('Shipping Address: ', shippingAddress);
console.log('Price: ', price);
console.log('Tax total: ', taxTotal);
console.log('Shipping: ', shipping);
console.log('Total Amount: ', total);
