//function return  an array of character a of string
const returnArray = (str = "leagueoflegend") => {
  return str.split("");
}

console.log(returnArray());
//plan 2 :
const stringArray = (str = "leagueoflegend") => {
  var arr = new Array();
  for(var i = 0; i < str.length; i++)
  {
    arr.push(str.charAt(i));
  }
  return arr;
}
console.log("\n");
console.log(stringArray());
