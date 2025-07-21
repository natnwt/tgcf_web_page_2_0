import './style.css'
const navBtn= document.querySelector(".nav_button");
const navBar=document.querySelector(".header_nav_box");


navBtn.addEventListener('click', ()=>{
    const isVisible=navBar.getAttribute("data-visible");
    if(isVisible=="false"){
        navBar.setAttribute("data-visible", "true");
        navBtn.setAttribute("aria-expanded", true);
}
else{
    navBar.setAttribute("data-visible", "false");
    navBtn.setAttribute("aria-expanded", false);
}
})

// const bgImage = document.querySelector(".bg_header_pic");
// // const bgButterflyes = document.querySelector(".butterflyes_header_pic");

// function updateBgImage() {
//   if (window.innerWidth <= 400) {
//     bgImage.src = "./images/background_pic_header_mobile.jpg";
//   } else {
//     bgImage.src = "./images/background_pic_header.jpg";
//   }
// }

// window.addEventListener("resize", updateBgImage);
// window.addEventListener("load", updateBgImage);


const btnDescribe = document.getElementById("btnDescribe");
const backstoryReadMore = document.getElementById("backstory_read_more");
const btnMovie = document.getElementById("btnMovie");
const movieReadMore = document.getElementById("backstory_short_movie");
const closeBtn = document.querySelectorAll("#close");

const video = document.getElementById("videomp4");
const muteButton = document.getElementById("muteButton");
btnDescribe.addEventListener("click", () => {
    const isExpanded = btnDescribe.getAttribute("aria-expanded") === "true";
    
    btnDescribe.setAttribute("aria-expanded", isExpanded ? "false" : "true");

    if (!isExpanded) {
        backstoryReadMore.style.opacity = "1";
        backstoryReadMore.style.zIndex = "10";
    } else {
        backstoryReadMore.style.opacity = "0";
        backstoryReadMore.style.zIndex = "0";
    }
});
btnMovie.addEventListener("click", () =>{
   const isExpanded = btnMovie.getAttribute("aria-expanded") === "true";

   btnMovie.setAttribute("aria-expanded", isExpanded ? "false" : "true");

    if (!isExpanded) {
        movieReadMore.style.opacity = "1";
        movieReadMore.style.zIndex = "10";
    } else {
        movieReadMore.style.opacity = "0";
        movieReadMore.style.zIndex = "0";
    }
  })
closeBtn.forEach(button => {
    button.addEventListener("click", () => {
        backstoryReadMore.style.opacity = "0";

        setTimeout(() =>{
        backstoryReadMore.style.zIndex = "0";
        movieReadMore.style.zIndex = "0";
        }, 1000);
        movieReadMore.style.opacity = "0";
        btnMovie.setAttribute("aria-expanded", "false");
        btnDescribe.setAttribute("aria-expanded", "false");

        if(video.muted==false){
            video.muted=true;
            muteButton.textContent = "Unmute";
        }
    });
});
muteButton.style.border="none";
muteButton.style.padding="0";
muteButton.style.background="none";
muteButton.addEventListener("click", () => {
    video.muted = !video.muted; 
    muteButton.textContent = video.muted ? "Unmute" : "Mute";
});





