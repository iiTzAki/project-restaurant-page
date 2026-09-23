import DonutImage from "./assets/images/donut-image.png";

function LoadInitialPage() { 

    const getContentDiv = document.getElementById("content");   

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
        "After A Long Day Exploring The Stars, Ending Your Day With Solaria Is Pure Bliss"

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

    const createIngredientWidgets = () => { 

        const ingredientData = [ 
            {
                headingText: "Stellar Butter", 
                specialClass: "cookie",
                para: "Premium European butter folded into delicate layers for an exceptionally rich flavor.", 
            },
            { 
                headingText: "Dawn Baked", 
                specialClass: "cake", 
                para: "Prepared at first light so every batch arrives fresh for the morning.",
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
            ingredientsContainer.appendChild(ingredientWidget)
        })
    }

    createIngredientWidgets();

    widgetContainer.append(ingredientsContainer);
    getContentDiv.appendChild(heroSectionContainer);
    getContentDiv.appendChild(widgetContainer); 

}; 

export { LoadInitialPage };