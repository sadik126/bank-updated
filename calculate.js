document.getElementById('btn-deposite').addEventListener('click' , function(){
    // console.log('deposite button clicked')

    //get deposite value from input text 
    const Deposite = document.getElementById('deposite');
    const getnewdeposite = Deposite.value ;
    // console.log(getdeposite) 
    
    //get value from deposite text

    const Depositevalue = document.getElementById('deposite-value')
    const getPreviousDepositevalue = Depositevalue.innerText;

  
   
   
  //calculate the total deposite sum
    const totalDeposite =  parseInt(getnewdeposite)  + parseInt(getPreviousDepositevalue) ;
    Depositevalue.innerText = totalDeposite;

   



//get the value of total
    const total = document.getElementById('total-value')
    const previousbalancetotal = total.innerText;

    //add to total 

    const balancetotal = parseInt(previousbalancetotal) + totalDeposite



    total.innerText = balancetotal;

    Deposite.value = ''


})


document.getElementById('btn-withdraw').addEventListener('click', function(){
    //get value from withdraw text
  const withdarw = document.getElementById('withdraw');
  const getnewwithdarw = withdarw.value

  //get value from withdraw text
  const withdarwvalue = document.getElementById('withdraw-value');
  const getPreviouswithdrawvalue = withdarwvalue.innerText;
  //calculate the total deposite sum
 const totalwithdraw =  parseInt(getnewwithdarw)
    withdarwvalue.innerText = totalwithdraw;


    const total = document.getElementById('total-value')
    const previousbalancetotal = total.innerText;

    //add to total 

    const balancetotal = parseInt(previousbalancetotal) - totalwithdraw



    total.innerText = balancetotal;

    withdarw.value = ''

})