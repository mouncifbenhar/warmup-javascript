const commandes = [
    { montant: 150, statut: "standard" },
    { montant: 620, statut: "standard" },
    { montant: 1200, statut: "premium" }
];

function calculerCommande(montant, statut) {
    let pourcentageRemise = 0;

    if (montant >= 1000) {
        pourcentageRemise = 15;
    } else if (montant >= 500) {
        pourcentageRemise = 10;
    } else if (montant >= 200) {
        pourcentageRemise = 5;
    }

    if (statut === "premium") {
        pourcentageRemise = pourcentageRemise + 5;
    }

    if (pourcentageRemise > 20) {
        pourcentageRemise = 20;
    }

    let remise = montant * pourcentageRemise / 100;
    let totalApresRemise = montant - remise;

    let livraison = 30;

    if (totalApresRemise >= 300) {
        livraison = 0;
    }

    let totalAPayer = totalApresRemise + livraison;

    return {
        montant: montant,
        pourcentageRemise: pourcentageRemise,
        remise: remise,
        totalApresRemise: totalApresRemise,
        livraison: livraison,
        totalAPayer: totalAPayer
    };
}

console.log(calculerCommande(150, "standard"));
console.log(calculerCommande(620, "standard"));
console.log(calculerCommande(1200, "premium"));