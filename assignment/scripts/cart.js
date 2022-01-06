console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [ ];
console.log(`basket is ${basket}`);

function addItem(item){
  basket.push(item);
  return true;
};

console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

console.log('Adding milk (expect true)', addItem('milk'));
console.log(`Basket is now ${basket}`);

console.log('Adding spinach (expect true)', addItem('spinach'));
console.log(`Basket is now ${basket}`);

console.log('Adding oranges (expect true)', addItem('oranges'));
console.log(`Basket is now ${basket}`);

console.log('Adding whole chicken (expect true)', addItem('whole chicken'));
console.log(`Basket is now ${basket}`);


function listItems(){
  for(let i = 0; i < basket.length; i++){
    console.log(basket[i]);
  }
};
listItems();


function empty(){
  for(let i = basket.length-1; i >= 0; i--){
    basket.pop(basket[i]);
  }
  return basket;
};

console.log('Emptying the basket, basket is now', empty());

const maxItems = 5;

function isFull(){
  if(basket.length < 5){
    return false;
  }
  return true;
}

console.log('Basket reached the maximum number of items', isFull());

function updatedAddItem(item){
  if(isFull() === true){
    return false;
  }
  basket.push(item);
  return true;
};

console.log('Adding apples (expect true)', updatedAddItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

console.log('Adding carrots (expect true)', updatedAddItem('carrots'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

console.log('Adding oranges (expect true)', updatedAddItem('oranges'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

console.log('Adding milk (expect true)', updatedAddItem('milk'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

console.log('Adding spinach (expect true)', updatedAddItem('spinach'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

console.log('Adding almond (expect true)', updatedAddItem('almond'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

console.log('Adding salmon (expect true)', updatedAddItem('salmon'));
console.log(`Basket is now ${basket}`);
console.log('Basket reached the maximum number of items', isFull());

function removeItem(item){
  let removedItem = [];
  if(basket.includes(item) === false){
    return null;
  }
  basket.indexOf(item);
  removedItem = basket.splice(basket.indexOf(item), 1);
  return removedItem;
}

console.log(removeItem('sugar'));
console.log(removeItem('milk'));
console.log(basket);
