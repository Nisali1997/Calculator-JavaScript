const calculatorDisplay = document.getElementById('calculator-display');

//to display the each keypress
function appendToDisplay(input){
    calculatorDisplay.value += input;
}

//to clear the display
function clearDisplay(){
    calculatorDisplay.value = "";
}

//to function the operators with eval()
function calculate(){
    try{
        calculatorDisplay.value = eval(calculatorDisplay.value);
    }
    catch(error){
        calculatorDisplay.value ="Error";
    }
}
