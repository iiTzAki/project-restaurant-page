import shopAesthetic from "./assets/images/ShopAesthetic.png"; 
import dustingCocoa from "./assets/images/DustingCocoa.png"; 
import solariasCraft from "./assets/images/SolariasCraft.png";
const jupiterIcon = `<svg class="jupiter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" 
                    stroke="#4d3328" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 16.5c1.105 0 2-.672 2-1.5s-.895-1.5-2-1.5s-2 .672-2
                    1.5s.895 1.5 2 1.5m13.272-.748c-3.607-.005-6.563.608-9.772 2.748a20 20 0 0 1-4.392 2.224m14.164-4.972a10 10 0 0 0 .704-4.454m-.704
                    4.454A10 10 0 0 1 12 22a9.96 9.96 0 0 1-4.892-1.276m14.868-9.426C16.903 14.248 14.335 13.112 9 10c-2.437-1.422-4.72-1.443-6.573-.9m19.549
                    2.198a10 10 0 0 0-.537-2.607m0 0C20.073 4.794 16.363 2 12 2c-2.535 0-4.85.943-6.612 2.498M21.44 8.69C17.38 8.69 17.5 4.775 12 6c-3.6.802-5.741-.834-6.612-1.502m0
                    0a10 10 0 0 0-2.96 4.601m0 0A10 10 0 0 0 2 12a10 10 0 0 0 5.108 8.724" color="currentColor"/></svg>`
const earthIcon = `<svg class="earth-icon" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 512">
                    <path fill="#4d3328" d="M414.39 97.74A224 224 0 1 0 97.61 414.52A224 224 0 1 0 414.39 97.74M64 256.13a191.6 191.6 0 0 
                    1 6.7-50.31c7.34 15.8 18 29.45 25.25 45.66c9.37 20.84 34.53 15.06 45.64 33.32c9.86 16.21-.67 36.71 6.71 53.67c5.36 12.31 
                    18 15 26.72 24c8.91 9.08 8.72 21.52 10.08 33.36a305 305 0 0 0 7.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 
                    256.13m192 192a193 193 0 0 1-32-2.68c.11-2.71.16-5.24.43-7c2.43-15.9 10.39-31.45 21.13-43.35c10.61-11.74 25.15-19.68 
                    34.11-33c8.78-13 11.41-30.5 7.79-45.69c-5.33-22.44-35.82-29.93-52.26-42.1c-9.45-7-17.86-17.82-30.27-18.7c-5.72-.4-10.51.83-16.18-.63c-5.2-1.35-9.28-4.15-14.82-3.42c-10.35
                    1.36-16.88 12.42-28 10.92c-10.55-1.41-21.42-13.76-23.82-23.81c-3.08-12.92 7.14-17.11 18.09-18.26c4.57-.48 9.7-1 14.09.68c5.78 2.14 8.51 7.8 13.7 10.66c9.73 5.34 11.7-3.19
                    10.21-11.83c-2.23-12.94-4.83-18.21 6.71-27.12c8-6.14 14.84-10.58 13.56-21.61c-.76-6.48-4.31-9.41-1-15.86c2.51-4.91 9.4-9.34 13.89-12.27c11.59-7.56 49.65-7
                    34.1-28.16c-4.57-6.21-13-17.31-21-18.83c-10-1.89-14.44 9.27-21.41 14.19c-7.2 5.09-21.22 10.87-28.43 3c-9.7-10.59 6.43-14.06 10-21.46c1.65-3.45 0-8.24-2.78-12.75q5.41-2.28
                    11-4.23a15.6 15.6 0 0 0 8 3c6.69.44 13-3.18 18.84 1.38c6.48 5 11.15 11.32 19.75 12.88c8.32 1.51 17.13-3.34 19.19-11.86c1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 0 1 105
                    32.21c-2-.76-4.39-.67-7.34.7c-6.07 2.82-14.67 10-15.38 17.12c-.81 8.08 11.11 9.22 16.77 9.22c8.5 0 17.11-3.8 14.37-13.62c-1.19-4.26-2.81-8.69-5.42-11.37a193 193
                    0 0 1 18 14.14c-.09.09-.18.17-.27.27c-5.76 6-12.45 10.75-16.39 18.05c-2.78 5.14-5.91 7.58-11.54 8.91c-3.1.73-6.64 1-9.24 3.08c-7.24 5.7-3.12 19.4 3.74 23.51c8.67
                    5.19 21.53 2.75 28.07-4.66c5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54c1.43 8.74 9.14 4 13.83-.41a192 192 0 0 1 9.24 18.77c-5.16
                    7.43-9.26 15.53-21.67 6.87c-7.43-5.19-12-12.72-21.33-15.06c-8.15-2-16.5.08-24.55 1.47c-9.15 1.59-20 2.29-26.94 9.22c-6.71 6.68-10.26 15.62-17.4 22.33c-13.81 13-19.64 27.19-10.7
                    45.57c8.6 17.67 26.59 27.26 46 26c19.07-1.27 38.88-12.33 38.33 15.38c-.2 9.81 1.85 16.6 4.86 25.71c2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 0 0 4.74 30.07A191.75 191.75 0 0 1 256 448.13"/></svg>`
const saturnIcon = `<svg class="saturn-icon" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" fill="#4d3328"><g fill="none" 
                    stroke="#4d3328" stroke-linecap="round" stroke-linejoin="round"><path d="M2.63 8.13C.85 10.49.05 12.53.76 13.24c1 1 4.6-1 8-4.44s5.44-7 4.44-8c-.64-.65-2.38
                    0-4.47 1.41"/><path d="M12.05 4.92A5 5 0 0 1 7.5 12a5.06 5.06 0 0 1-1.95-.39M3.5 10a5 5 0 0 1 7-7"/></g></svg>`; 

function LoadAboutPage() { 

    const createTextContent = (textContentData, sectionContainer) => { 
        
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
        sectionPara.textContent = textContentData.sectionParagraph

        headingWrapper.append(headingIcon, sectionHeading);
        contentContainer.append(headingWrapper, sectionPara);
        sectionContainer.appendChild(contentContainer); 

    }; 

    const createCards = (cardData, cardContainer) => { 
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
                imageSrc: solariasCraft
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

export { LoadAboutPage }