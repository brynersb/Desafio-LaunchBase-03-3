const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const maximize = document.querySelector('.modal')
const flippage = document.querySelector('flip-page')

for (let card of cards) {
    card.addEventListener("click", function () {
        const cardId = card.getAttribute("id")
        window.location.href = `/courses/${cardId}`
    })
}


