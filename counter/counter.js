const countValue = document.querySelector('#counter');
function increment(){
    let value = parseInt(countValue.innerText); //string me value milega to usko int me change karna padega
    value = value + 1;
    countValue.innerText = value;// set the value in UI
};
 function decrement(){
    let value = parseInt(countValue.innerText); //string me value milega to usko int me change karna padega
    value = value - 1;
    countValue.innerText = value;// set the value in UI
};