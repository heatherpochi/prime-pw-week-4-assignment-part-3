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
