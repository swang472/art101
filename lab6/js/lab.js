// index.js - Lab 6: Arrays and Objects
// Author: Angela Wang
// Date: 4/24/25

myTransport = ["walking", " biking", " taking the bus", " driving"];

myMainRide = {
    make:"BMW",
    model:"mini cooper",
    color:"yellow",
    year:2017,

    age: function(){
      return 2025 - this.year;
    }
}

document.writeln("Getting around: "+ myTransport+ "<br>");
document.writeln("myMainRide: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");





// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
