'use strict';

const chooseForLabels = Array.from(document.querySelectorAll(".form__choose-for"));
const chooseForLabelInputs = Array.from(document.querySelectorAll(".form__choose-for input"));

chooseForLabelInputs.forEach((element, index, array) => {
    element.addEventListener("change", () => {
        array.forEach(element => {
            const isChecked = element.checked;
            
            if(isChecked){
                isChecked && element.parentElement.classList.add("checked__for__who");
            }
            else{
                isChecked || element.parentElement.classList.remove("checked__for__who");
            }
        })
        
    });
})
