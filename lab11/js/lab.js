/*
Angela Wang
Lab 9: Libraries and JQuery
5/11/2025
*/
function sortString(inputString) {
    return inputString.split('').sort().join('');
  }
$("#submit").click(function(){
    const userName = $("#user-name").val();
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


