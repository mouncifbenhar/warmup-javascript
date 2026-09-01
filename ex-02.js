

function celsiusVersFahrenheit(c){
   return c * 9 / 5 + 32;
}
function decrireTemperature(c){
   if(c < 10){
      console.log("Froid")
   }else if( c >= 10 && c <= 25){
      console.log("Doux")
   }else{
      console.log("Chaud")
   }
}
console.log(celsiusVersFahrenheit(-5));
decrireTemperature(celsiusVersFahrenheit(-5))