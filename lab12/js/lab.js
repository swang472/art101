/*
Angela Wang
Lab 9: Libraries and JQuery
5/11/2025
*/
function getHouse(num){
  let remainder = num % 4;
  let str = "";
  if (remainder == 0){
    str = "House of Elrond: Known for wisdom, leadership, and the sanctuary of Rivendell.";
  } else if (remainder == 1){
    str = "House of Durin: A lineage of strength, endurance, and the heart of dwarven lore.";
  } else if (remainder == 2){
    str = "House of Beren: Celebrated for courage, perseverance, and an unyielding love for Luthien.";
  } else if (remainder == 3){
    str = "House of Feanor: A House of ambition, brilliance, and the creator of the Silmarils.";
  }
  return str;
}
$("#button"). click(function(){
  let name = $("#input" ).val()
  console. log (name) ;
  let nameLength = name.length;
  console. log (nameLength);
  let house = getHouse (nameLength);
  console. log (house);
  $("#Results").html("<h1>" + house + "</h1>");
})