document.addEventListener('DOMContentLoaded',()=>{
    const celsiusInput=document.getElementById('celsius');
    const fahrenheitInput =document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
    const clearButton = document.getElementById('clearBtn');

    celsiusInput.addEventListener('input', convertFromCelsius);
    fahrenheitInput.addEventListener('input',convertFromFahrenheit);
    kelvinInput.addEventListener('input', convertFromKelvin); 
    clearButton.addEventListener('click', clearAll);
    
    function convertFromCelsius(){
        const celsiusvalue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusvalue * 9 / 5)+32
        const kelvinvalue = celsiusvalue + 273.32;
        
        fahrenheitInput.value =isNaN(fahrenheitValue) ?' ':
        fahrenheitValue.toFixed(2);
        kelvinInput.value=isNaN(kelvinvalue)?' ':
        kelvinvalue.toFixed(2);
    }
    function convertFromFahrenheit(){
        const fahrenheitValue=parseFloat(fahrenheitInput.value);

        const celsiusValue=(fahrenheitValue-32)*5/9;
        const kelvinValue=(fahrenheitValue+459.67)*5/9;

        celsiusInput.value=isNaN(celsiusValue)?' ':
        celsiusValue.toFixed(2);
        kelvinInput.value=isNaN(kelvinValue)?' ':
        kelvinValue.toFixed(2);
    }    
    function convertFromKelvin() { 
        const kelvinValue = parseFloat(kelvinInput.value);
        
        const celsiusValue = kelvinValue - 273.32;
        const fahrenheitValue = (kelvinValue * 9 / 5) - 459.67;
        
        celsiusInput.value =isNaN(celsiusValue) ? ' ' :
        celsiusValue.toFixed(2);
        fahrenheitInput.value = isNaN(fahrenheitValue) ?' ':
        fahrenheitValue.toFixed(2);
    }
    function clearAll() {
        celsiusInput.value=' ';
        fahrenheitInput.value ='';
        kelvinInput.value ='';
    }    

});