const panier = [
    { nom: "Souris", prix: 150, quantite: 2 },
    { nom: "Casque", prix: 400, quantite: 1 },
    { nom: "Tapis", prix: 60, quantite: 3 },
    { nom: "Webcam", prix: 520, quantite: 1 }
];
    

    const names = panier.map(e => e.nom)

    names.forEach(e => {
    console.log(e)
    });

    const p = panier.map(e =>
    {
        return {
            name:  e.nom,
            total: e.prix * e.quantite
        }
    }
    )
    console.log(p)

    const panier_prix_bigger_than_100 = panier.filter( e => e.prix > 100).map(e => e.nom)

    console.log(panier_prix_bigger_than_100)

 
 function prix_total_of_oune_prodact(prix,quantite){
        return  prix * quantite
    }
    
const Total_panier = panier.reduce((total , element ) => total + prix_total_of_oune_prodact(element.prix,element.quantite) ,0)

console.log(Total_panier)

const total_prodact = panier.reduce((total, element) => total + element.quantite ,0);
console.log(total_prodact)