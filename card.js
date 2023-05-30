"use strict"

function formatCreditCardNumber(event) {
    const input = event.target;
    const trimmed = input.value.replace(/\s+/g, ''); // Remove any existing spaces
    const parts = [];
  
    for (let i = 0; i < trimmed.length; i += 4) {
      parts.push(trimmed.substr(i, 4));
    }
  
    input.value = parts.join(' ');
  }


function checkAll(event) {
    //FELIDS
    let numberFeild = document.querySelector(`.card_number_feild`)
    let nameFeild = document.querySelector(`.card_name_feild`)
    let monthFeild = document.querySelector(`.card_month_feild`)
    let yearFeild = document.querySelector(`.card_year_feild`)
    let cvcFeild = document.querySelector(`.card_cvc_feild`)


    //ALERTS
    let namenotice = document.querySelector(`.name_alert`)
    let numbernotice = document.querySelector(`.number_alert`)
    let monthnotice = document.querySelector(`.month_alert`)
    let cvcnotice = document.querySelector(`.cvc_alert`)

    event.preventDefault()


    if (nameFeild.value.length === 0) {
        namenotice.innerHTML = `Can't be blank`
    } else if (nameFeild.value.length < 10) {
        namenotice.innerHTML = `Name too short`
    } else {
        namenotice.innerHTML = ``
    }
      

    if (numberFeild.value.length === 0) {
        numbernotice.innerHTML = `Can't be blank`;
      } else if (/[A-Za-z]/.test(numberFeild.value)) {
        numbernotice.innerHTML = `Wrong Format, Numbers only`;
      } else if (numberFeild.value.length < 10) {
        numbernotice.innerHTML = `Number too short`;
      } else {
        numbernotice.innerHTML = ``;
      }
      
      
    if (monthFeild.value.length === 0 || yearFeild.value.length === 0 ) {
        monthnotice.innerHTML = `Can't be blank`
    } else if (/[A-Za-z]/.test(monthFeild.value)) {
        monthnotice.innerHTML = `Wrong Format, Numbers only`
    } else if (/[A-Za-z]/.test(yearFeild.value)) {
        monthnotice.innerHTML = `Wrong Format, Numbers only`
    } else {
        monthnotice.innerHTML = ``
    }

    if (cvcFeild.value.length === 0 ) {
        cvcnotice.innerHTML = `Can't be blank`
    } else if (/[A-Za-z]/.test(cvcFeild.value)) {
        cvcnotice.innerHTML = `Wrong Format, Numbers only`
    } else if (cvcFeild.value.length < 3) {
        cvcnotice.innerHTML = `CVC too short`
    } else {
        cvcnotice.innerHTML = ``
    }

    if (cvcnotice.innerHTML === ``) {
    thankyouAnimation()
    }
}

let thankyouContainer = document.querySelector(`.thankyou_container`)
    let cardContainer = document.querySelector(`.card_details_container`)

    let mobilebg = document.querySelector(`.background_mobile`) 
    let mobilebgAnimation = document.querySelector(`.reveal`)
    let mobilebgDisappear = document.querySelector(`.disappear`)

    thankyouContainer.style.display = `none`

function thankyouAnimation() {

    
    
    mobilebg.classList.add(`reveal`)
    cardContainer.classList.add(`disappear`)


    setTimeout(function() {
        cardContainer.style.display = `none`;
        thankyouContainer.style.display = `flex`
      }, 500); // 3000 milliseconds = 3 seconds
      
    
    






}
