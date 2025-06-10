/*
Angela Wang
Lab 16: JSON and APIs
06/02/2025
*/

const ajaxObj = {
    url: "https://imgs.xkcd.com/comics/neighbor_source_heat_pump.png",
    data: {},
    type: "GET",
    dataType: "json"
};

$("#button").click(function(){
    $.ajax(ajaxObj)
    .done(function(data){
        console.log(data);
        let title = data.title;
        let num = data.num;
        let desc = data.transcript;
        let imageUrl = data.img;

        $("#output").html(`<h2>${title}</h2>`);
        $("#output").append(`<img src='${imageURL}'/>`);
        $("#output").append(`<p class= 'date'>Comic: ${num}</p>`);
        $("#output").append(`<p class= 'desc'>${desc}</p>`);
    })
    .fail(function(xhr, status, error){
        console.error(error);
    })
})