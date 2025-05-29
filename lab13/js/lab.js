/*
Angela Wang
Lab 13: Loops
5/26/2025
*/

for (i=0; i <= 200; i++){
    let str = "";
    if (i % 3 == 0){
        str += "Fizz";
    }
    if (i % 5 == 0){
        str += "Buzz";
    }
    if (i % 7 == 0){
        str += "Boom";
    }
    if (!str){
        str = i;
    }
    else {
        str += "i";
    }
    console.log(str);
  $("#output").append("<p class= 'num'>" + str + "</p>");
}
    