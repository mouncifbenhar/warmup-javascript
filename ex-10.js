const ventes = [
{ vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
{ vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
{ vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
{ vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
{ vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
{ vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

const total = ventes.reduce((a, b) => a + b.montant, 0)
console.log(total)

const find = ventes.reduce((a, b) => b.montant > a.montant ? b : a)
console.log(find)

function caParVendeur(ventes){
    return ventes.reduce(function(a, b) {
        if(!a[b.vendeur]){
            a[b.vendeur] = 0
        }
        a[b.vendeur] += b.montant
        return a
    }, {})
}
console.log(caParVendeur(ventes))
const avg = ventes.reduce((a, b) => a + b.montant, 0)
const moy = avg / 3
console.log(moy)


function genererRapport(ventes) {

    const total = ventes.reduce(function(a, b) {
        return a + b.montant;
    }, 0);

    const find = ventes.reduce(function(a, b) {
        return b.montant > a.montant ? b : a;
    });

    const ca = caParVendeur(ventes);

    const moyenne = total / 3;

    const vendeurs = Object.keys(ca);

    const auDessus = vendeurs.filter(function(vendeur) {
        return ca[vendeur] > moyenne;
    });

    let rapport = "=== RAPPORT DES VENTES ===\n";

    rapport += "Chiffre d'affaires total : " + total + " DH\n";

    rapport += "Meilleure vente : " + find.produit + " (" + find.vendeur + ") - " + find.montant + " DH\n";

    rapport += "CA par vendeur :\n";

    rapport += "Amina : " + ca.Amina + " DH\n";
    rapport += "Youssef : " + ca.Youssef + " DH\n";
    rapport += "Sara : " + ca.Sara + " DH\n";

    rapport += "Moyenne par vendeur : " + moyenne.toFixed(2) + " DH\n";

    rapport += "Au-dessus de la moyenne : " + auDessus.join(", ");

    return rapport;
}

console.log(genererRapport(ventes));