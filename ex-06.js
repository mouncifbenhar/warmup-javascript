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

    const p = panier.map