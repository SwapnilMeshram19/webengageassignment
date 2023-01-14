
let submit=document.getElementById('submit-button')
let close=document.getElementById('close')

const closeBox=()=>{
    let boxContainer=document.getElementById('popup-container');
    boxContainer.style.display='none';
}

submit.addEventListener('click',()=>{
    let container=document.getElementById('ty-container');
    let email=document.getElementById('email-input').value;
    let number=document.getElementById('number').value;
    let country=document.getElementById('country-select').value;

    if(!email && !number){
        alert('enter email address and mobile number')
    }else if(number.toString().length>10 || number.toString().length<10){
        alert('enter correct mobile number')
    }else{
      closeBox();
    }

    let h3=document.createElement('h3');
    h3.innerText="Thanks a ton for taking out your precious time and for completing the survey";

    let emaildiv=document.createElement('div')
    emaildiv.innerHTML=`<div>Email : ${email}<div>`

    let numberdiv=document.createElement('div')
    numberdiv.innerHTML=`<div>Contact Number : ${country} ${number}<div>`


    container.append(h3,emaildiv,numberdiv)

   


})



close.addEventListener('click',closeBox)
