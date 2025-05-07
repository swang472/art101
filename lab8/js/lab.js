//Angela Wang
//5/6/25
//Lab 8: Anon Functions and Callbacks
const numArray = [1, 2, 3, 4];
console.log("My Array", numArray);


function changeEachElement(num) {
    return num * 2;
}

console.log(numArray);
console.log(numArray.map(changeEachElement));
numArray.map(changeEachElement);
function Addition(x){
    return x + 2;
}

var results = numArray.map(function(x) {
    return x - 2 ; 
})

console.log("Minus two", results);

var mapResults = numArray.map(Addition);
console.log("Results: ", mapResults);

Addition(4);
console.log("Four",Addition(4));


