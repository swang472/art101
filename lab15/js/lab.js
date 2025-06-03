/*
Angela Wang
Lab 15: AJAX
06/02/2025
*/

const ajaxObj = {
    url: "https://yesno.wtf/api",
    type: "GET",
    dataType: "json"
}
$("#sumbuton").click(function(){
    console.log("click!");
    $.ajax(ajaxObj)
    .done(function(data){
        console.log("Success!");
        console.log(data);
        let answer = data.answer;
        let imageURL = data.image;
        let imageHTML = `<img src= '${imageURL}'>`;
        $("#output").html("<h1>"+answer);
        $("output").append(imageHTML);
    })
    .fail(function( xhr, status, errorThrown){
        console.log(errorThrown + " Status:" + status);
    });
})