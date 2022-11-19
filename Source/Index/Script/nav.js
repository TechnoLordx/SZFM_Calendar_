const menuLines = document.querySelector(".menu_lines");
const navLinks = document.querySelector(".nav_links");

menuLines.addEventListener('click',()=>{
    navLinks.classList.toggle('mobil_menu');
    }
);