const produit = {
    nom: "Clavier mecanique",
    prix: 450,
    stock: 12,
    categorie: "Informatique"
};

console.log(`${produit.nom} - ${produit.prix} - ${produit.stock} en stock (${produit.categorie})`)

produit.prix =  produit.prix + (produit.prix * 0.1)

console.log(`Nouveau prix : ${produit.prix}`)

produit["enPromotion"] = false;

for( let i in produit){
    console.log(i + " : " + produit[i])
}

function estDisponible(p){
      if(p.stock <= 0){
        return false;
      }else{
        return true;
      }
}

console.log(estDisponible(produit));