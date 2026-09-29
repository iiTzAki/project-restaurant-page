import DonutImage from "./assets/images/donut-image.png";

function createIngredientWidgets(container) { 

    const ingredientData = [ 
        {
            headingText: "Stellar Butter", 
            specialClass: "cookie",
            para: "Rich European butter folded into delicate layers for an exceptionally rich flavor.", 
        },
        { 
            headingText: "Dawn Baked", 
            specialClass: "cake", 
            para: "Prepared at first light so every batch arrives with warm morning crispness.",
        },
        { 
            headingText: "Hand Crafted", 
            specialClass: "cupcake", 
            para: "Individually perfected by hand using traditional techniques and premium ingredients.",
        },
    ];

    ingredientData.forEach(value => { 
        const ingredientWidget = document.createElement('div'); 
        ingredientWidget.className = "ingredients-widget"; 

        const widgetHeading = document.createElement('h1'); 
        const widgetPara = document.createElement('p'); 
            
        widgetHeading.classList.add("ingredient-heading", value.specialClass);
        widgetHeading.textContent = value.headingText;
        widgetPara.textContent = value.para; 

        ingredientWidget.append(widgetHeading, widgetPara); 
        container.appendChild(ingredientWidget)
    })
};

function loadInitialPage() { 

    const getContentDiv = document.getElementById("content");
    const sectionContainer = document.createElement('div'); 
    sectionContainer.className = "home-container";    

    // Load Hero Section 
    const heroSectionContainer = document.createElement("div"); 
    heroSectionContainer.className = "hero-section-container"; 

    const heroSection = document.createElement("div"); 
    heroSection.className = "hero-section"; 
    const headingOne = document.createElement("h1"); 
    const headingTwo = document.createElement("h1");
    const heroParagraph = document.createElement("p"); 
    const ctaButton = document.createElement("button"); 
    ctaButton.textContent = "Order Now"
    ctaButton.className = "cta-button"; 

    headingOne.textContent = "Taste the";
    headingTwo.textContent = "Solaria Moon";
    heroParagraph.textContent = 
        "Rich Textures, Slow-Baked Layers, And A Stellar Sweet Escape Delivered Straight To Your Door."

    const donutWrapper = document.createElement("div"); 
    donutWrapper.className = "donut-image";
    const donutImage = document.createElement("img");  
    donutImage.src = DonutImage; 
    
    heroSection.append(headingOne, headingTwo, heroParagraph, ctaButton); 
    donutWrapper.appendChild(donutImage); 
    heroSectionContainer.append(heroSection, donutWrapper);

    // Load Widget Container 
    const widgetContainer = document.createElement("div"); 
    widgetContainer.className = "widget-container"; 
    const ingredientsContainer = document.createElement("div"); 
    ingredientsContainer.className = "ingredients-container"; 

    createIngredientWidgets(ingredientsContainer);

    widgetContainer.append(ingredientsContainer);
    sectionContainer.append(heroSectionContainer, widgetContainer)
    getContentDiv.appendChild(sectionContainer)

}; 

export { loadInitialPage };