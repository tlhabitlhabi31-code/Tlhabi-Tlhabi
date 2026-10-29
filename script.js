"use strict";


console.log("Discover Lesotho website is ready.");


"use strict";

console.log("Discover Lesotho website is ready.");


const galleryImages = document.querySelectorAll(".gallery-image");


const photoModalElement = document.getElementById("photoModal");


const largePhoto = document.getElementById("largePhoto");
const photoModalTitle = document.getElementById("photoModalTitle");


if (galleryImages.length > 0 && photoModalElement) {

    
    const photoModal = new bootstrap.Modal(photoModalElement);

    
    galleryImages.forEach(function (photo) {

        function openPhoto() {

            
            largePhoto.src = photo.src;
            largePhoto.alt = photo.alt;

            
            photoModalTitle.textContent = photo.dataset.title;

            
            photoModal.show();
        }

        
        photo.addEventListener("click", openPhoto);

        
        photo.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPhoto();
            }

        });

    });


    photoModalElement.addEventListener("hidden.bs.modal", function () {
        largePhoto.src = "";
    });
}




const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        
        event.preventDefault();

        
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();

            formMessage.textContent =
                "Please correct the form fields and try again.";

            formMessage.className = "form-message error";
            return;
        }

        
        const visitorName =
            document.getElementById("fullName").value.trim();

        
        formMessage.textContent =
            "Thank you, " + visitorName +
            "! Your enquiry passed validation.";

        formMessage.className = "form-message success";

        
        contactForm.reset();
    });

    
    contactForm.addEventListener("reset", function () {
        formMessage.textContent = "";
        formMessage.className = "form-message";
    });
}
