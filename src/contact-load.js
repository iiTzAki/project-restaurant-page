import { instaIcon, facebookIcon, tiktokIcon, pinterestIcon } from "./icons.js"; 

function loadContactPage() { 

    const getContentDiv = document.getElementById('content');
    const contactContainer = document.createElement('div'); 
    contactContainer.className = "contact-container"; 

    const contactFormWrapper = document.createElement('div');
    contactFormWrapper.className = "contact-form-wrapper";

    const formHeader = document.createElement('h1');
    const formDescription = document.createElement('p');  
    formHeader.className = "form-header";
    formDescription.className = "form-description"; 
    formHeader.textContent = "Let's Keep In Touch";
    formDescription.textContent = "Whether you have a question about our slow-baked pastries, want to place a custom order, or just want to drop us a line, we'd love to hear from you. Send us a message below and we’ll get back to you shortly."; 

    const contactButtonsWrapper = document.createElement('div'); 
    contactButtonsWrapper.className = "contact-buttons-wrapper"; 

    const contactBtnNames = ["Via Chat", "Via Call", "Via Email Form"]; 
    contactBtnNames.forEach((value, index) => { 
        const newButton = document.createElement('button'); 
        newButton.className = "contact-btn";
        newButton.textContent = value; 

        if (index === 2) { 
            newButton.classList.add('spread-out'); 
        }

        contactButtonsWrapper.appendChild(newButton); 
    })

    const contactForm = document.createElement('form'); 
    contactForm.setAttribute('id', 'contact-form');
    contactForm.setAttribute('method', 'post');
    contactForm.setAttribute('action', '#');
        
    const formInputData = [
        {inputName: "Name", inputType: "input", inputClass: "user-name"}, 
        {inputName: "E-mail", inputType: "input", inputClass: "user-email"},
        {inputName: "Text", inputType: "textarea", inputClass: "user-text"}
    ];

    formInputData.forEach((value) => {
            
        const inputWrapper = document.createElement('div')
        inputWrapper.className = "input-wrapper"; 

        const formLabel = document.createElement('label'); 
        const formInput = document.createElement(value.inputType);
        formLabel.textContent = value.inputName;
        formLabel.setAttribute('for', value.inputClass);
        formInput.setAttribute('type', 'text');
        formInput.setAttribute('id', value.inputClass);
        formInput.setAttribute('name', value.inputClass); 

        inputWrapper.append(formLabel, formInput); 
        contactForm.appendChild(inputWrapper); 

    });
    
    contactFormWrapper.append(formHeader, formDescription, contactButtonsWrapper); 
    contactFormWrapper.appendChild(contactForm);

    contactContainer.appendChild(contactFormWrapper); 

    const contactSidebarWrapper = document.createElement('div');
    contactSidebarWrapper.className = "contact-info-sidebar";

    const buttonsData = [instaIcon, facebookIcon, tiktokIcon, pinterestIcon]; 
    const sidebarData = [ 
        {
            containerName: "location-wrapper",
            sidebarHeading: "Locations",
            paraClass: "location-para",
            nestedData: [
                "Downtown Flagship: 412 Mercer Street, Corner of 5th", 
                "Meridian Plaza: 704 Meridian Boulevard, Suite 102", 
                "Old Town Quarter: 14 Cooper Lane",
            ]
        }, 
        {
            containerName: "timings-wrapper",
            sidebarHeading: "Opening Hours",
            paraClass: "timings-para",
            nestedData: [
                "Tuesday – Thursday: 8:00 AM – 8:00 PM", 
                "Friday – Saturday: 8:00 AM – 10:00 PM", 
                "Sunday: 9:00 AM – 6:00 PM", 
                "Monday: Closed"
            ]
        }, 
        {
            containerName: "socials-wrapper",
            sidebarHeading: "Follow Us",
            paraClass: "socials-para",
            nestedData: [
                "Step into our digital feed for a daily dose of warm lighting, fresh pastries, and the little moments that make our space feel like home."
            ]                
        }
    ]

    sidebarData.forEach((outer) => { 
        const sidebarWidgetWrapper = document.createElement('div');
        const sidebarHeading = document.createElement('h1');  
        sidebarWidgetWrapper.className = outer.containerName; 
        sidebarHeading.className = "sidebar-heading"; 
        sidebarHeading.textContent = outer.sidebarHeading;
        sidebarWidgetWrapper.appendChild(sidebarHeading);

        outer.nestedData.forEach((inner) => { 
            const widgetPara = document.createElement('p'); 
            widgetPara.className = outer.paraClass; 
            widgetPara.textContent = inner;

            sidebarWidgetWrapper.appendChild(widgetPara)
        })

        if (outer.containerName === "socials-wrapper") { 

            const socialIconsWrapper = document.createElement('div'); 
            socialIconsWrapper.className = "social-icons-container";
            buttonsData.forEach((value) => { 
                const newButton = document.createElement('button'); 
                newButton.className = "social-btn"; 
                newButton.innerHTML = value;

                socialIconsWrapper.appendChild(newButton); 
            })
            sidebarWidgetWrapper.appendChild(socialIconsWrapper)
        }
        contactSidebarWrapper.appendChild(sidebarWidgetWrapper);
    })


    contactContainer.appendChild(contactSidebarWrapper); 

    getContentDiv.appendChild(contactContainer);
}

export { loadContactPage }