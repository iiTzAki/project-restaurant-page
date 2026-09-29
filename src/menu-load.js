import halfDozen from "./assets/images/TheHalfDozen.webp";
import leGouter from "./assets/images/LeGouter.webp"; 
import espressoMacaron from "./assets/images/TheEspressoMacaron.webp"; 
import twoOfAKind from "./assets/images/TwoOfAKind.webp"; 
import obsidianBox from "./assets/images/TheObsidianBox.webp"; 
import romanceBox from "./assets/images/TheRomanceBox.webp";  
import { bagIcon } from "./icons.js";

function setupMenuListeners(menuNavWrapper) { 
    menuNavWrapper.addEventListener('click', (e) => { 
        if (e.target.classList.contains('menu-link')) { 
            menuNavWrapper.querySelectorAll('.menu-link').forEach(btn => {btn.classList.remove('active')})
            e.target.classList.add('active')
        }
    })
}    

function loadMenuPage() { 

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
            description: "A custom box featuring any six of our freshly house-baked artisanal donuts, loaded with assorted glazes, textures, and toppings.", 
            priceTag: "$16.50", 
            imageSrc: halfDozen, 
        }, 
        {
            foodName: "Le Goûter", 
            description: "A buttery, flaky French croissant served alongside a side of rich fruit preserves, paired with a warm morning coffee.", 
            priceTag: "$7.50", 
            imageSrc: leGouter,             
        }, 
        {
            foodName: "The Espresso Macaron", 
            description: "A delicate plate of sweet French macarons accompanied by a rich, aromatic shot of freshly brewed espresso.", 
            priceTag: "$6.80", 
            imageSrc: espressoMacaron,             
        }, 
        {
            foodName: "Two of a Kind", 
            description: "A synchronized pairing of two expertly crafted signature hot lattes featuring delicate heart art, designed specifically for sharing.", 
            priceTag: "$9.00", 
            imageSrc: twoOfAKind,             
        }, 
        {
            foodName: "The Obsidian Box", 
            description: "A decadent box of bite-sized dark chocolate brownies served alongside a refreshing iced beverage.", 
            priceTag: "$9.25", 
            imageSrc: obsidianBox,             
        }, 
        {
            foodName: "The Romance Box", 
            description: "A trio of handcrafted, berry-glazed specialty donuts decorated with sweet cream and delicate toppings for shared moments.", 
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
        foodImage.alt = value.foodName; 

        foodImageWrapper.appendChild(foodImage); 

        const foodDetailsWrapper = document.createElement('div'); 
        foodDetailsWrapper.className = "food-box-wrapper"; 
        
        const textContentWrapper = document.createElement('div');
        const ctaWrapper = document.createElement('div'); 
        ctaWrapper.className = "cta-container";  

        const boxHeading = document.createElement('h2'); 
        const boxDescription = document.createElement('p');
        boxHeading.className = "food-header";
        boxDescription.className = "food-description";  
        boxHeading.textContent = value.foodName; 
        boxDescription.textContent = value.description;
        
        const priceTag = document.createElement('p'); 
        priceTag.textContent = value.priceTag;
    
        const iconWrapper = document.createElement('div'); 
        iconWrapper.className = "shopping-bag-icon";
        iconWrapper.innerHTML = bagIcon;

        textContentWrapper.append(boxHeading, boxDescription);
        ctaWrapper.append(priceTag, iconWrapper); 

        foodDetailsWrapper.append(textContentWrapper, ctaWrapper);
        foodBoxContainer.append(foodImageWrapper, foodDetailsWrapper); 
        foodContainer.appendChild(foodBoxContainer); 

    })

    sectionContainer.append(menuFilterContainer, foodContainer);
    getContentDiv.appendChild(sectionContainer);

    setupMenuListeners(navMenuWrapper);
}

export { loadMenuPage }