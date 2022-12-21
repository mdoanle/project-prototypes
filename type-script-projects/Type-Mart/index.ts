import products from "./products";

const productName: string = 'tote bag';
const product = products.filter(product => product.name === productName)[0];

if (product.preOrder === "true") {
  console.log('We will send you a message when its on the way!');
}

let shipping: number;
let taxPercent: number = 0.05;
let taxTotal: number;
let total: number;
const shippingAddress: string = '69 Donkey Way, Oregon';
const price: number = Number(product.price);

if (price > 25) {
  shipping = 0;
} else {
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
