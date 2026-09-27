import halfDozen from "./assets/images/TheHalfDozen.png";
import leGouter from "./assets/images/LeGouter.png"; 
import espressoMacaron from "./assets/images/TheEspressoMacaron.png"; 
import twoOfAKind from "./assets/images/TwoOfAKind.png"; 
import obsidianBox from "./assets/images/TheObsidianBox.png"; 
import romanceBox from "./assets/images/TheRomanceBox.png";  

function LoadMenuPage() { 

    const getContentDiv = document.getElementById('content'); 
    const sectionContainer = document.createElement('div');
    const menuFilterContainer = document.createElement('div');
    sectionContainer.className = "menu-container"; 
    menuFilterContainer.className = "menu-filter-container"; 

    // Nav Menu Section 
    const navMenuWrapper = document.createElement("div"); 
    navMenuWrapper.className = "menu-nav-links"; 

    const linkNames = ["Special Offers", "Populars", "Donuts", "Cakes", "Cookies", "Pastries", "Beverages"];  
    linkNames.forEach((value, index) => { 
        const newButton = document.createElement('button'); 
        newButton.className = "menu-link"; 
        newButton.textContent = value;
        
        if (index === 0) { 
            newButton.classList.add("active"); 
        }

        navMenuWrapper.appendChild(newButton); 
    })

    menuFilterContainer.append(navMenuWrapper);

    // Food Boxes Section 
    const foodContainer = document.createElement('div'); 
    foodContainer.className = "food-container"; 

    const foodDetails = [
        {
            foodName: "The Half Dozen", 
            description: "Mix and match any six of our house-baked creations into your own custom box.", 
            priceTag: "$16.50", 
            imageSrc: halfDozen, 
        }, 
        {
            foodName: "Le Goûter", 
            description: "A flaky, freshly baked pastry served with fruit preserves and a rich morning brew.", 
            priceTag: "$7.50", 
            imageSrc: leGouter,             
        }, 
        {
            foodName: "The Espresso Macaron", 
            description: "An authentic taste of France with Espresso macarons and velvet espresso.", 
            priceTag: "$6.80", 
            imageSrc: espressoMacaron,             
        }, 
        {
            foodName: "Two of a Kind", 
            description: "A synchronized pairing of any two signature hot brews, crafted for sharing.", 
            priceTag: "$9.00", 
            imageSrc: twoOfAKind,             
        }, 
        {
            foodName: "The Obsidian Box", 
            description: "Rich, bite-sized chocolate brownies accompanied by a signature beverage of your choice.", 
            priceTag: "$9.25", 
            imageSrc: obsidianBox,             
        }, 
        {
            foodName: "The Romance Box", 
            description: "A romantic selection of three handcrafted donuts designed for shared moments.", 
            priceTag: "$8.50", 
            imageSrc: romanceBox,             
        },
    ]

    foodDetails.forEach((value) => { 
        const foodBoxContainer = document.createElement('div'); 
        foodBoxContainer.className = "food-box"; 

        const foodImageWrapper = document.createElement('div'); 
        foodImageWrapper.className = "food-image"; 
        const foodImage = document.createElement('img'); 
        foodImage.src = value.imageSrc; 

        foodImageWrapper.appendChild(foodImage); 

        const foodDetailsWrapper = document.createElement('div'); 
        foodDetailsWrapper.className = "food-box-wrapper"; 
        
        const textContentWrapper = document.createElement('div');
        const ctaWrapper = document.createElement('div'); 
        ctaWrapper.className = "cta-container";  

        const boxHeader = document.createElement('h2'); 
        const boxDescription = document.createElement('p');
        boxDescription.className = "food-description";  
        boxHeader.textContent = value.foodName; 
        boxDescription.textContent = value.description;
        
        const priceTag = document.createElement('p'); 
        priceTag.textContent = value.priceTag;
    
        const iconWrapper = document.createElement('div'); 
        iconWrapper.className = "shopping-bag-icon";
        iconWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" 
        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path 
        d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 
        8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6"/><path 
        d="M9 11V6a3 3 0 0 1 6 0v5"/></g></svg>`

        textContentWrapper.append(boxHeader, boxDescription);
        ctaWrapper.append(priceTag, iconWrapper); 

        foodDetailsWrapper.append(textContentWrapper, ctaWrapper);
        foodBoxContainer.append(foodImageWrapper, foodDetailsWrapper); 
        foodContainer.appendChild(foodBoxContainer); 

    })

    sectionContainer.append(menuFilterContainer, foodContainer);
    getContentDiv.appendChild(sectionContainer)

    function eventHandlers() { 

        const getMenuNavLinks = document.querySelector('.menu-nav-links');
        getMenuNavLinks.addEventListener('click', (e) => { 

            if (e.target.classList.contains('menu-link')) { 
                e.target.closest(".menu-nav-links").querySelectorAll('.menu-link').forEach(btn => {btn.classList.remove('active')})
                e.target.classList.add('active')
            }

        })

    }    

    eventHandlers()

}


export { LoadMenuPage }