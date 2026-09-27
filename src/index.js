import "./styles.css"; 
import { LoadInitialPage } from "./initial-load.js"; 
import { LoadMenuPage } from "./menu-load.js"; 
import { LoadAboutPage } from "./about-load.js";

function eventHandlers() { 

    LoadInitialPage()

    const getContentDiv = document.getElementById("content"); 
    const getNavLinks = document.querySelector(".link-container"); 
    getNavLinks.addEventListener('click', (e) => { 
        const targetPage = e.target.dataset.page; 

        if (e.target.classList.contains('nav-link')) { 
            e.target.closest('.link-container').querySelectorAll('.nav-link').forEach(btn => {btn.classList.remove('active')}); 
            e.target.classList.add('active');
        }

        if (!targetPage) return; 

        if(targetPage === "home") { 
            getContentDiv.innerHTML = ""
            e.target
            LoadInitialPage()
        } 

        if(targetPage === "menu") { 
            getContentDiv.innerHTML = ""
            LoadMenuPage()
        }

        if(targetPage === "about") { 
            getContentDiv.innerHTML = ""
            LoadAboutPage()
        }


    })

}

eventHandlers()