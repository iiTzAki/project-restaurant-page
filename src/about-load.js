import { jupiterIcon, earthIcon, saturnIcon } from "./icons.js"
import shopAesthetic from "./assets/images/ShopAesthetic.webp"; 
import dustingCocoa from "./assets/images/DustingCocoa.webp"; 
import solariasCraft from "./assets/images/SolariasCraft.webp";

function createTextContent(textContentData, sectionContainer) { 
        
    const contentContainer = document.createElement('div'); 
    const headingWrapper = document.createElement('div');
    contentContainer.className = "story-content-container";
    headingWrapper.className = "story-heading-wrapper"; 
        
    // Heading Content Container
    const headingIcon = document.createElement('span'); 
    headingIcon.innerHTML = textContentData.headingSvg
    const sectionHeading = document.createElement('span'); 
    sectionHeading.className = "section-heading"
    sectionHeading.textContent = textContentData.sectionName;

    // Paragraph Content Container 
    const sectionPara = document.createElement('p'); 
    sectionPara.textContent = textContentData.sectionParagraph;

    headingWrapper.append(headingIcon, sectionHeading);
    contentContainer.append(headingWrapper, sectionPara);
    sectionContainer.appendChild(contentContainer); 

}; 

function createCards(cardData, cardContainer) { 
    cardData.forEach((value) => {
        const card = document.createElement('div'); 
        card.classList.add("card");
        if(value.specialClass) { 
            card.classList.add(value.specialClass); 
        } 
        const cardImage = document.createElement('img'); 
        cardImage.className = "card-image"; 
        cardImage.src = value.imageSrc; 

        card.appendChild(cardImage); 
        cardContainer.appendChild(card);  
    });
}; 

function loadAboutPage() { 

    const getContentDiv = document.getElementById('content'); 
    const sectionContainer = document.createElement('div'); 
    sectionContainer.className = "about-container"

    // Story Section 
    function createStorySection() { 
        const storySection = document.createElement('div'); 
        const cardContainer = document.createElement('div'); 
        storySection.className = "story-section"; 
        cardContainer.className = "cards-container"; 
        
        createCards([
            {
                imageSrc: shopAesthetic
            },
            {
                imageSrc: dustingCocoa, 
                specialClass: "on-top"
            }
        ], cardContainer)
        storySection.appendChild(cardContainer);
        createTextContent(
            {
                headingSvg: jupiterIcon, 
                sectionName: "ur Story", 
                sectionParagraph: '"Solaria began with a simple vision: to elevate everyday baking into an extraordinary sensory experience. Rooted in classical French techniques yet defined by modern aesthetics, we handcraft each collection in small batches. We source only the finest ingredients, ensuring that every bite reflects our uncompromising standards for quality and taste."' 
            }, storySection)
        sectionContainer.appendChild(storySection);
    }

    function createCraftSection() { 
        const craftSection = document.createElement('div'); 
        craftSection.className = "craft-section";

        createTextContent(
            {
                headingSvg: earthIcon, 
                sectionName: "ur Craft", 
                sectionParagraph: '"True patisserie is a dialogue between raw ingredients and disciplined technique. In our kitchen, every layer of pastry, every dusting of cocoa, and every carefully placed fruit is treated as an exercise in fine detail. We rely on patience, intuition, and uncompromising standards to transform simple ingredients into extraordinary moments of indulgence."' 
            }, craftSection)    
        createCards([
            {
                imageSrc: solariasCraft, 
                specialClass: "aesthetic-card"
            }
        ], craftSection)    
        sectionContainer.appendChild(craftSection);
    }

    function createPromiseSection() { 
        const promiseSection = document.createElement('div'); 
        promiseSection.className = "promise-section";
        createTextContent(
            {
                headingSvg: saturnIcon, 
                sectionName: "ur Promise", 
                sectionParagraph: '"We believe that true patisserie is an act of absolute intention. Every flavor combination, precise measurement, and delicate finish is considered down to the last detail—ensuring that nothing ever leaves our kitchen unless it meets our highest standard of artistry and flavor."' 
            }, promiseSection)       
        sectionContainer.appendChild(promiseSection);  
    }

    createStorySection();
    createCraftSection();
    createPromiseSection();
    getContentDiv.appendChild(sectionContainer)

};

export { loadAboutPage }