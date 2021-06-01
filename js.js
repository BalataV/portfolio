//beru si do huby ikonu hambace
let hambac = document.querySelector("#hamburger-ikona")

//beru si do huby krizek
let krizek = document.querySelector("#krizek")

//beru si ul I guess
let seznamNav = document.querySelector("#seznam-navigace")

//promenna na uchovani hodnoty true
let jeNavViditelna = false

//vemi si licka
let licka = document.querySelectorAll("#seznam-navigace li")

//co se má dít po kliknutí na hambac
hambac.addEventListener("click", function(event){
    seznamNav.classList.toggle('opened')
    let otevreno = seznamNav.classList.value.includes('opened')

    if (otevreno) {
        seznamNav.style.height ='136px'
        hambac.children[0].children[0].attributes[3].value = 'M6 18L18 6M6 6l12 12'
    }
    else if (!otevreno) {
        seznamNav.style.height = '0'
        hambac.children[0].children[0].attributes[3].value = 'M4 6h16M4 12h16M4 18h16'
    }
})


window.addEventListener("scroll", function(event){
    let scrolled = window.scrollY

    if (scrolled > window.innerHeight) {
        
        
}})