function getinputvalueId(inputId){
const inputField = document.getElementById (inputId);
const inputvaluetextfield = inputField.value ;
const getinputvalue = parseFloat(inputvaluetextfield);
inputField.value = '';
return getinputvalue;

}


function getElementvaluebyId (elementId){
    const element = document.getElementById(elementId)
    const valuestring = element.innerText
    const value = parseFloat (valuestring)
    return value;

}

function setTextelementvalue(elementId , newvalue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newvalue

}



document.getElementById('btn-deposite').addEventListener('click' , function(){

    const newdeposite = getinputvalueId('deposite');

    const previousDepositetotal = getElementvaluebyId('deposite-value')

  const newDepositetotal = newdeposite + previousDepositetotal;

  setTextelementvalue('deposite-value' , newDepositetotal)

  const previousvalue = getElementvaluebyId('total-value')
  const totalnewvalue = previousvalue + newDepositetotal;
  setTextelementvalue('total-value' , totalnewvalue);

})