import "./styles.css"; 
import { loadInitialPage } from "./initial-load.js"; 
import { loadMenuPage } from "./menu-load.js"; 
import { loadAboutPage } from "./about-load.js";
import { loadContactPage } from "./contact-load.js";

function initRouter() { 

    loadInitialPage()

    const getContentDiv = document.getElementById("content"); 
    const getNavLinks = document.querySelector(".link-container"); 
    getNavLinks.addEventListener('click', (e) => { 
        const targetPage = e.target.dataset.page; 

        getContentDiv.innerHTML = "";
        if (e.target.classList.contains('nav-link')) { 
            e.target.closest('.link-container').querySelectorAll('.nav-link').forEach(btn => {btn.classList.remove('active')}); 
            e.target.classList.add('active');
        }

        if (!targetPage) return; 

        if(targetPage === "home") { 
            loadInitialPage();
        };

        if(targetPage === "menu") { 
            loadMenuPage();
        };

        if(targetPage === "about") { 
            loadAboutPage();
        };

        if(targetPage === "contact") { 
            loadContactPage();
        };


    })

}

initRouter()