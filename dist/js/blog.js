const blog = document.querySelectorAll(".blog-tab")
const tabs = document.querySelectorAll(".tabcontent")
const blogs = document.querySelector(".blog-tabs")

blogs.addEventListener("click",(e)=>{
    blog.forEach(tab=>tab.classList.remove("active"))
    e.target.classList.add("active")
    tabs.forEach(log=>log.classList.remove("active"))
    if(e.target.classList.contains("blog1")){
        tabs[0].style.display="block"
        tabs[1].style.display="none"
        tabs[2].style.display="none"
    }
    if(e.target.classList.contains("blog2")){
        tabs[1].style.display="block"
        tabs[0].style.display="none"
        tabs[2].style.display="none"
    }
    if(e.target.classList.contains("blog3")){
        tabs[2].style.display="block"
        tabs[0].style.display="none"
        tabs[1].style.display="none"
    }
})