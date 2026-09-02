const courses = ["pain", "lait", "riz", "cafe"];

let a =  courses.length
console.log(`Nombre d'articles : ${a}`)
courses.push("sucre")
console.log(courses.indexOf("cafe"))
courses.splice(courses.indexOf("cafe"),1)
courses.forEach(e => {
    console.log(e)
});

console.log(courses.indexOf("a"))

if(courses.indexOf("cafe") === -1){
    console.log("no")
}else{
    console.log("Le cafe est bien dans la liste.")
}



