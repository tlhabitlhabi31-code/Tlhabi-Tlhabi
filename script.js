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
const nameInput = document.getElementById("fullName");

const countrySelect = document.getElementById("countryCode");
const phoneInput = document.getElementById("phone");
const phonePrefix = document.getElementById("phonePrefix");
const phoneHelp = document.getElementById("phoneHelp");

if (nameInput) {

    nameInput.addEventListener("input", function () {

        this.value = this.value.replace(/[^\p{L}\p{M}' -]/gu, "");

        this.value = this.value.slice(0, 20);
    });
}

function updatePhoneRules() {

    if (!countrySelect || !phoneInput) {
        return;
    }

    const selectedOption =
        countrySelect.options[countrySelect.selectedIndex];

    const countryCode = selectedOption.value;
    const digitLength = Number(selectedOption.dataset.length);

    phonePrefix.textContent = countryCode;

    phoneInput.maxLength = digitLength;

    phoneHelp.textContent =
        "Enter exactly " + digitLength +
        " digits, without the country code or leading zero.";
    
    phoneInput.value = "";

    phoneInput.setCustomValidity("");
}

if (phoneInput && countrySelect) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        const selectedOption =
            countrySelect.options[countrySelect.selectedIndex];

        const digitLength = Number(selectedOption.dataset.length);

        if (this.value.length !== digitLength) {
            this.setCustomValidity(
                "Please enter exactly " + digitLength + " digits."
            );
        } else {
            this.setCustomValidity("");
        }
    });

    countrySelect.addEventListener("change", updatePhoneRules);

    updatePhoneRules();
}
    

const emailInput = document.getElementById("email");

if (emailInput) {

    emailInput.addEventListener("input", function () {

        this.value = this.value.trim();

        if (this.validity.valid) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity(
                "Please enter a valid email address, such as example@gmail.com."
            );
        }

    });

}
