window.onload = suma()
window.onload = comp()

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

function suma() {
    const num1 =document.getElementById("edc1")
    const num2 = document.getElementById("edc2")
    const div = document.getElementById("res") 
    const ch = document.getElementById("ch")
    const ch2 = document.getElementById("ch2")
    var res = 0
    res = parseInt(num1.value) + parseInt(num2.value)
    if (res==NaN) {
        div.innerHTML = ""
    }
    div.innerHTML = res
    ch.innerHTML= num1.value
    ch2.innerHTML= num2.value
}
function truofal(params) {
    const tof = document.getElementById("tof")
    if(tof.innerHTML=="true" || tof.innerHTML == ""){
        console.log(tof.innerHTML);
        tof.classList.add("tru")
        tof.classList.remove("fal")
    }else{
        if (tof.innerHTML=="false") {
         
        tof.classList.remove("tru")
        tof.classList.add("fal")       
        }
    }
}
function comp(){
    const co = document.getElementById("beo")
    const compi1 = document.getElementById("compi1")
    const compi2 = document.getElementById("compi2")

    console.log(tof.innerHTML);
    
    if (co.value==">") {
        if(compi1.value>compi2.value){
            tof.innerHTML=true
        }else{
            tof.innerHTML=false
        }
    }else
    if (co.value=="<") {
        if(compi1.value<compi2.value){
            tof.innerHTML=true

        }else{
            tof.innerHTML=false

        }
    }else
    if (co.value==">=") {
        if(compi1.value>=compi2.value){
            tof.innerHTML=true

        }else{
            tof.innerHTML=false

        }
    }else
    if (co.value=="<=") {
        if(compi1.value<=compi2.value){
            tof.innerHTML=true

        }else{
            tof.innerHTML=false

        }
    }else
    if (co.value=="==") {
        if(compi1.value==compi2.value){
            tof.innerHTML=true

        }else{
            tof.innerHTML=false

        }
    }else
    if (co.value=="!=") {
        if(compi1.value!=compi2.value){
            tof.innerHTML=true

        }else{
            tof.innerHTML=false

        }
    }
    truofal()
}