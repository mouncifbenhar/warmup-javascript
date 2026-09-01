const prenom = "Amina";
const ville = "casablanca";
let age = 22;
let estEnFormation = true;

console.log(`${prenom}, ${age} ans, habite a ${ville}.`);
if(age >= 18){
   console.log("Statut : majeur.");
}else{
   console.log("Statut : mineur.");
}
console.log("Formation en cours" + " : " + estEnFormation);

console.log(typeof(prenom));
console.log(typeof(ville));
console.log(typeof(age));
console.log(typeof(estEnFormation));


