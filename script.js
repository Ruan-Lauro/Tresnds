const img_one = window.document.getElementById("nfr")

const imgs_one = ["assets/1.png", "assets/2.png", "assets/3.png"]

const img_two = window.document.getElementById("nfs")

const imgs_two = ["assets/4.png", "assets/5.png", "assets/6.png", "assets/7.png"]

const imgs_tree = ["assets/8.png", "assets/9.png", "assets/10.png", "assets/11.png", "assets/12.png", "assets/13.png", "assets/14.png", "assets/15.png"]

const img_tree = window.document.getElementById("nfd")


let i = 0

function troca(){ 
    console.log(i)
    img_one.src = imgs_one[i]
    i++
    if(i >= imgs_one.length){
        i = 0
    } 
}   

setInterval(troca, 5000)

let j = 0

function troca_o(){ 
    console.log(j)
    img_two.src = imgs_two[j]
    j++
    if(j >= imgs_two.length){
        j = 0
    } 
}   

setInterval(troca_o, 5000)

let q = 0

function troca_t(){ 
    console.log(q)
    img_tree.src = imgs_tree[q]
    q++
    if(q >= imgs_tree.length){
        q = 0
    } 
}   

setInterval(troca_t, 5000)








