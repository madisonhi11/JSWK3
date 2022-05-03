// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"

pizzaParty = [ "Jodi","Jordon","Madison","John","Jane"]
let slicesOfPizza= 20;
function sharePizza(){
    if ( pizzaParty.indexOf = 4){
        return slicesOfPizza/ 5// The actual number of people
        // i did  slicesofPizza/pizzaParty.indexOf but the math would be right because index starts at 0
    }
    
}
console.log(`Each person get ${sharePizza()} slices of pizza`)

//The second way without an array  

// let slicesOfPizza= 20;
// function sharePizza(x){
//     return slicesOfPizza/x;
// };

// console.log(`Each person get ${sharePizza(5)} slices of pizza`);
