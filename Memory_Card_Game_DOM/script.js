const cards = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Blue_merle_koolie_short_coat_heading_sheep_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        name: "Dog"
    },
    {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1280px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        name: "Cat"
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/3840px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        name: "Lion"
    },
    {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/3840px-Grosser_Panda.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        name: "Panda"
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vulpes_vulpes_ssp_fulvus.jpg/500px-Vulpes_vulpes_ssp_fulvus.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        name: "Fox"
    },
    {
        id: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Red-eyed_Leaf_Frog_%2849661076226%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        name: "Frog"
    }
];


const game_board = document.querySelector("#game-board")
const doubel_cards = []

cards.forEach(e => 
    doubel_cards.push(e,e)
)

doubel_cards.forEach(element => {
const card = document.createElement("div")
const img = document.createElement("img")

card.classList.add("card")
img.setAttribute("src",element.image)
img.setAttribute("alt",element.name)
img.classList.add("img")


game_board.append(card)
card.append(img)

console.log(img)
});






































































