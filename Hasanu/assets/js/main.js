//booking
const bookBtns = document.querySelectorAll('.js-booking')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeBtn = document.querySelector('.js-modal-close')

function showBooking() {
    modal.classList.add('open')
}
for (const bookBtn of bookBtns) {
    bookBtn.addEventListener('click', showBooking)
}
closeBtn.addEventListener('click', closeBuytickets)
modal.addEventListener('click', closeBuytickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

function closeBuytickets() {
    modal.classList.remove('open')
}