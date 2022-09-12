const sidebars = document.querySelectorAll(".sidebar-menu li")
const sectionall = document.querySelectorAll("section")
console.log(sectionall)
console.log(sidebars)
function setActive(e){
    sidebars.forEach(item=>item.classList.remove("active"));
    e.classList.add("active")
}
function changeActiveMenu(){
    sidebars.forEach(item=>{
        const link = item.querySelector("a")
        const dot = item.querySelector(".dot")
        const section = document.querySelector(link.hash)
        console.log(section)
        let fromTop = window.scrollY

    if(section.offsetTop<= fromTop &&
     section.offsetTop+section.offsetHeight>fromTop){
        item.classList.add("active")
        dot.classList.add("active")

    }
    else{
        item.classList.remove("active")
        dot.classList.remove("active")
    }
}
)}
    
sidebars.forEach((item)=>{
    item.addEventListener("click",()=> setActive(item))
})
window.addEventListener("scroll",()=>changeActiveMenu())