function calculate(amount,rate,time){
    const interest = (amount * (rate * 0.01)) / time;
    let emi = ((amount / time) + interest).toFixed(2);
    emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("output").innerHTML="EMI-"+emi
 }

 const sliders=document.getElementsByClassName("sliders");
 const labelheading=document.getElementsByClassName("labels");

 window.addEventListener("load", ()=>{
    RangeSelector()
  });

 const loan=sliders[0];
 const tenure=sliders[1];
 const roi=sliders[2];

 function RangeSelector(){
   let loanAmt= loan.value;
   let tenureVal= tenure.value;
   let roiVal= roi.value;
   labelheading[0].textContent="Loan Amount-"+loanAmt+"L";
   labelheading[1].textContent="Tenure-"+tenureVal+"yrs";
   labelheading[2].textContent="Rate of Interest-"+roiVal+"%";
   console.log("loanamt"+loanAmt+"@@@tenure@@"+tenureVal+"@@roival"+roi.value);

   calculate(loanAmt*100000,roiVal,tenureVal*12);
 }

 function calcemi(){
    let loanAmt= loan.value;
    let tenureVal= tenure.value;
    let roiVal= roi.value;
    calculate(loanAmt*100000,roiVal,tenureVal*12);
 }