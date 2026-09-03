const inscription = {
nom: "",
email: "aminaexample.com",
motDePasse: "123",
age: 17
};

function validerInscription(donnes){
    
const erreurs = []

if(donnes.nom.length < 2){
    erreurs.push("Le nom doit contenir au moins 2 caracteres")
}

if(!donnes.email.includes('@') || !donnes.email.includes(".")){
    erreurs.push("l'email n'est pas valide")
}

if(donnes.motDePasse.length < 8){
    erreurs.push("Le mot de passe doit contenir au moins 8 caracteres")
}

if(donnes.age < 18){
    erreurs.push("Vous devez avoir au moins 18 ans")
}

const valide = erreurs.length === 0
return {
    valide: valide,
    erreurs: erreurs
}
}
console.log(validerInscription(inscription))