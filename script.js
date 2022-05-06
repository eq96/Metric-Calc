/******************************
 * 
 * Metric, Volume & Mass Unit Conversion Project by E. Quiroga (Completed version 5/6/2022)
 * 
 * ********************************/


const num = document.querySelector('input');
let inputMeter = document.getElementById("inputMeter-el");
let inputFeet = document.getElementById("inputFeet-el");
let inputLiter = document.getElementById("inputLiter-el");
let inputGallon = document.getElementById("inputGallon-el");
let inputKilo = document.getElementById("inputKilo-el");
let inputPound = document.getElementById("inputPound-el");

let meterFeet = document.getElementById("meterToFeet-el");
let feetMeter = document.getElementById("feetToMeter-el")

let literGallon = document.getElementById("literToGallon-el");
let gallonLiter = document.getElementById("gallonToLiter-el");

let kiloPound = document.getElementById("kiloToPound-el");
let poundKilo = document.getElementById("poundToKilo-el");

num.addEventListener('input', conversions);

function conversions(e) {
    
    let input = e.target.value;
    let feetToMeter = input * 0.305;
    let meterToFeet = input * 3.281;
    let literToGallon = input * 0.264; 
    let gallonToLiter = input * 3.785
    let kiloToPound = input * 2.205
    let poundToKilo = input * 0.454;

    
    if(!input || input < 0) {
        inputMeter.textContent = 0;
        inputFeet.textContent  = 0;
        inputLiter.textContent  = 0;
        inputGallon.textContent  = 0;
        inputKilo.textContent  = 0;
        inputPound.textContent  = 0;
        
        meterFeet.textContent = 0;
        feetMeter.textContent = 0;
        literGallon.textContent = 0;
        gallonLiter.textContent = 0;
        kiloPound.textContent = 0;
        poundKilo.textContent = 0;
    }
    else {
        /*Length Conversions*/
        inputMeter.textContent = input;
        inputFeet.textContent = input;
        meterFeet.textContent = meterToFeet;
        feetMeter.textContent = feetToMeter;
    
        /*Volume Conversions*/
    
        inputLiter.textContent = input;
        inputGallon.textContent = input;
        literGallon.textContent = literToGallon;
        gallonLiter.textContent = gallonToLiter;
    
        /** Mass Conversions */
        inputKilo.textContent = input;
        inputPound.textContent = input;
        kiloPound.textContent = kiloToPound;
        poundKilo.textContent = poundToKilo;

    }
}