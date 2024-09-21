// console.log("Button clicking file added");
// step-1: set event handler
document.getElementById('button-login').
addEventListener('click',function(event){

// step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // console.log("Login Button clicked");

// step-3: get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log( phoneNumber,pinNumber);

// step-4: validate phone and pin
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log("you are logged in");
        window.location.href = '/home.html';
    }
    else{
        alert("wrong phone number or pin");
    }
})