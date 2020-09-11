const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll ('.card')
const maximize = document.querySelector ('.modal')

for ( let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        const cardId = card.getAttribute("id")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`
    })
} 

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
})

document.querySelector(".maximize-modal").addEventListener("click", function(){

        if (maximize.classList.contains('maximize') === false){
            maximize.classList.add("maximize")
        }else{
            maximize.classList.remove("maximize")
        }

})
