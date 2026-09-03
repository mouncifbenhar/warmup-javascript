const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";



function genererSlug(a){
    return a = a.toLowerCase().trim().replace(/ +/g,'-')
}
const result = genererSlug(titre);
console.log(result)

function compterMots(b){
     return b.trim().split(/ +/).length
}
 const result_2 = compterMots(phrase)

console.log(result_2)
 function initiales(c){
    let a = c.trim().split(/ +/)
    let b = []
    a.forEach(e => {
        b.push(e[0])
    });
    return b.join('.').toUpperCase()
 }


const result_3 = initiales(nomComplet)
console.log(result_3)
 

