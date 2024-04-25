window.onload = suma()
window.onload = comp()
window.onload = if1()
window.onload = op()

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
function op() {
    op1=document.getElementById("op1")
    op2=document.getElementById("op2")
    ops=document.getElementById("ops")
    resop=document.getElementById("resop")
    opf1=parseInt(op1.value)
    opf2=parseInt(op2.value)
    if (ops.value=="+") {
        res=opf1+opf2
        resop.innerHTML=res
    }
    if (ops.value=="-") {
        res=op1.value-op2.value
        resop.innerHTML=res
    }
    if (ops.value=="*") {
        res=op1.value*op2.value
        resop.innerHTML=res
    }
    if (ops.value=="/") {
        res=op1.value/op2.value
        resop.innerHTML=res
    }
}
function if1(input) {
    x=document.getElementById("hl")
    if (input.value>5) {
        x.innerHTML="hola mundo"
    }
}
function if2(input) {
   x=document.getElementById("hl2")
   if (input.value>5){
    x.innerHTML="hola mundo"
   }else{
    x.innerHTML="adios mundo"
   }
}
function if3(input){
    x=document.getElementById("hl3")
    if (input.value>10){
     if (input.value>15) {
        x.innerHTML=":)"
     }else{
        x.innerHTML=":("
     }
    }else{
        x.innerHTML=":D"
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