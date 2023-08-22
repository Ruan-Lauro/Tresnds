const img = window.document.getElementById("nfr")

const imgs = ["assets/1690249860479.png", "assets/1690249837272.png"]

let i = 0

function troca(){
    img.src = imgs[i]
    i++
    if(i >= imgs.length){
        i = 0
    }
}

setInterval(troca, 2000)