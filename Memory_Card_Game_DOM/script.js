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
const movesElement = document.querySelector("#moves")
const pairsElement = document.querySelector("#pairs")
const messageElement = document.querySelector("#message")
const restart = document.querySelector("#restart")
const doubel_cards = []

let card1 = null
let card2 = null
let result = false
let lockBoard = false
let moves = 0
let pairs = 0

cards.forEach(e =>
    doubel_cards.push({ ...e, b: Math.random()}, { ...e, b: Math.random()})
)
doubel_cards.sort((a,b) => a.b - b.b)


doubel_cards.forEach(element => {
const card = document.createElement("div")
const img = document.createElement("img")

card.classList.add("card")
card.setAttribute("id",element.id)
img.setAttribute("src",element.image)
img.setAttribute("alt",element.name)

card.addEventListener("click", () => {

        if (lockBoard) {
            return
        }

        if (card.classList.contains("flipped")) {
            return
        }

        card.classList.add("flipped")


        if (card1 === null) {

            card1 = card

        } 
        

        else {
            
            card2 = card
            moves++
            movesElement.textContent = moves

            if (card1.id === card2.id) {
                
                result = true
                pairs++
                pairsElement.textContent = pairs
                if(pairs === doubel_cards.length / 2){
                messageElement.textContent = "You won!"
                }

            } else {

                result = false

            }

            console.log("card1:", card1.id)
            console.log("card2:", card2.id)
            console.log("result:", result)


            if (!result) {
                lockBoard = true

                setTimeout(() => {

                    card1.classList.remove("flipped")
                    card2.classList.remove("flipped")

                    card1 = null
                    card2 = null
                    lockBoard = false

                }, 1000)

            }
            
            else {

                card1 = null
                card2 = null

            }
        }

    })






game_board.append(card)
card.append(img)
});

restart.addEventListener("click",()=>{
    location.reload()
})






































































