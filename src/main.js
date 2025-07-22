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

// // Pobieramy element obrazka
// const bgImage = document.querySelector(".bg-header-pic");

// // Sprawdzamy i ustawiamy obrazek zależnie od szerokości ekranu
// function updateBgImage() {
//   if (!bgImage) {
//     console.warn("Nie znaleziono elementu .bg-header-pic");
//     return;
//   }

//   const desktopSrc = "/background_pic_header.png";
//   const mobileSrc = "/background_pic_header_mobile.png";
//   const selectedSrc = window.innerWidth <= 600 ? mobileSrc : desktopSrc;

//   // Ustawiamy tylko jeśli src się zmienia
//   if (!bgImage.src.endsWith(selectedSrc)) {
//     bgImage.src = selectedSrc;

//     // Dodajemy fallback w razie błędu ładowania
//     bgImage.onerror = () => {
//       console.error("Nie udało się załadować obrazka:", selectedSrc);
//       bgImage.src = desktopSrc;
//     };
//   }
// }

// // Uruchamiamy przy załadowaniu strony i zmianie rozmiaru
// window.addEventListener("load", updateBgImage);
// window.addEventListener("resize", updateBgImage);



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





