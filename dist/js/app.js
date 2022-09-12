// const slide=document.querySelector(".slideshow")
// const eleman = [...(slide.children)]
// console.log(eleman.length)
// sayı = 0
// function slider(){
//     eleman[sayı].classList.remove("active")
//     eleman[sayı+1].classList.add("active")
//     if(sayı>eleman.length-2){
//         sayı=0
//     }
//     sayı++
//     console.log(sayı)
// }
// setInterval(slider,2000)


let currentSlideIndex = 0;
let slides =document.querySelectorAll(".slides")
let prew =document.querySelectorAll(".slideshow-nav prew")
let next =document.querySelectorAll(".slideshow-nav next")
let container =document.querySelector(".slideshow-nav")
let lastSlidesIndex = slides.length-1;
let firstSlideIndex = 0;

container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("prew")){
        slides[currentSlideIndex].classList.remove("active")
        currentSlideIndex = currentSlideIndex === firstSlideIndex ? lastSlidesIndex : currentSlideIndex -1
        slides[currentSlideIndex].classList.add("active")
        console.log(currentSlideIndex)
    }
    if(e.target.classList.contains("next")){
        slides[currentSlideIndex].classList.remove("active")
        currentSlideIndex = currentSlideIndex === lastSlidesIndex ?firstSlideIndex : currentSlideIndex + 1
        slides[currentSlideIndex].classList.add("active")
        console.log(currentSlideIndex)
    }    
})
setInterval(
    function(){
        slides[currentSlideIndex].classList.remove("active")
currentSlideIndex = currentSlideIndex === lastSlidesIndex ?firstSlideIndex : currentSlideIndex + 1
slides[currentSlideIndex].classList.add("active")
        
    },4000
)



