const grid =document.querySelector(".grid-gallery")
const show =document.querySelector(".show-image")
const showimage =document.querySelector(".show-image img")
const kapat =document.querySelector(".kapat")
grid.addEventListener("click",(e)=>{
show.classList.add("active")
console.log(e.target.src)
showimage.src=e.target.src
})
kapat.addEventListener("click",()=>{
    show.classList.remove("active")
})