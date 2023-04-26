'use strict';

//! STEP-1 JS

// const chooseForLabels = Array.from(document.querySelectorAll(".form__choose-for"));
// const chooseForLabelInputs = Array.from(document.querySelectorAll(".form__choose-for input"));

// chooseForLabelInputs.forEach((element, index, array) => {
//     element.addEventListener("change", () => {
//         array.forEach(element => {
//             const isChecked = element.checked;

//             if(isChecked){
//                 element.parentElement.classList.add("checked__for__who");
//             }
//             else{
//                 element.parentElement.classList.remove("checked__for__who");
//             }
//         })

//     });
// })

//! STEP-2 JS

// const customSelect = document.querySelector(".custom-select");

// customSelect.addEventListener("click", () => {
//     const selectSvgElement = customSelect.children[1];
//     const customSelectDropdown = document.querySelector(".select-dropdown__wrapper");

//     selectSvgElement.classList.toggle("rotate"); 
//     customSelectDropdown.classList.toggle("open");
// })

// let listItems = Array.from(document.querySelectorAll(".select-dropdown__item"));
// listItems = listItems.filter(element => element.hasChildNodes());

// let selectedCityName = document.querySelector(".custom-select__select-start__city-name");
// let cityInputs = Array.from(document.querySelectorAll("input[name='chooseCity']"));

// listItems.forEach((element,index) => {
//     element.addEventListener("click", () => {
//         selectedCityName.innerText = cityInputs[index].dataset.value;
//     })
// })
