function Mosinf(card) {
    var infA = card.querySelector('.hidden');
    var infno = card.querySelector('.showw')
    if (infA==null) {
        infno.classList.toggle('hidden')
        infno.classList.toggle('showw')    
    }
    if (infno==null) {
        infA.classList.toggle('showw')
        infA.classList.toggle('hidden')
        }

}