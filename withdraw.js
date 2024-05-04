


document.getElementById('btn-withdraw').addEventListener('click' , function(){
 const newwithdrawamount = getinputvalueId('withdraw')

 const previouswithdarwtotal = getElementvaluebyId('withdraw-value')

 const withdarwtotal = newwithdrawamount + previouswithdarwtotal;

 setTextelementvalue('withdraw-value' , withdarwtotal)

 const previousvalue = getElementvaluebyId('total-value')
  const totalnewvalue = previousvalue - withdarwtotal;
  setTextelementvalue('total-value' , totalnewvalue);
})