// Function which toggles mobile navigation and large navigation

function Nav(){
    let mobileClick = document.getElementById('mobile-click');
    let mobileNav = document.querySelector('#mobile-nav');

    mobileClick.addEventListener('click',() =>{
        mobileNav.classList.toggle('active');
    });
}
Nav()

// Function that validates that user has entered correct information
// and displays appropriate message to customer

function validateForm(){
    // collects span element in html in an empty string
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('telError').textContent = "";
    document.getElementById('messageError').textContent = "";

    // collects user inputs, removes any whitespace and stores value as a variable
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var telno = document.getElementById('telno').value.trim();
    var message = document.getElementById('message').value.trim();

    // validate name
    if(name === ""){
        document.getElementById('nameError').textContent = 'Name is required!';
        return false;
    }

    // regular expression to check if name contains only letters
    var namePattern = /^[a-zA-Z ]+$/;
    if(!namePattern.test(name)){
        document.getElementById('nameError').textContent = "Only letters allowed!";
        return false;
    }

    // counts the number of words
    var wordCount = name.trim().split(/\s+/).length;
    if(wordCount < 2){
        document.getElementById('nameError').textContent = "Name must have at least 2 words!";
        return false;
    }

    // validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent = "Invalid email address.";
        return false;
    }

    // validate only numbers in telephone number
    var telnoPattern = /^[0-9]+$/;
    if(!telnoPattern.test(telno)){
        document.getElementById('telnoError').textContent = "Only numbers allowed!";
        return false;
    }

    // validate customer message
    if(message === ""){
        document.getElementById('messageError').textContent = "Message is required!";
        return false;
    }

    // formis valid, save data locally to send to confirmation page
    saveDataLocally(name, email, telno, message);
    // redirect to confirmation page
    setTimeout(()=>{
        window.location.href = "confirmation.html";
        return false;//prevent form submitting traditionally
    },4000);

}

function saveDataLocally(name, email, telno, message){
    // create object to represent stored data
    var formData = {
        name : name,
        email : email,
        telno : telno,
        message : message
    };

    // convert the object to a JSON string and save to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
}

// returning data from local storage to confirmation page

// retrieve data from local storage
var storedData = localStorage.getItem('formData');
// display the stored data on confirmation page
if(storedData){
    var parsedData = JSON.parsed(storedData);
    document.getElementById('storedName').textContent = parsedData.name;
    document.getElementById('storedEmail').textContent = parsedData.email;
    document.getElementById('storedTelno').textContent = parsedData.telno;
    document.getElementById('storedMessage').textContent = parsedData.message;

}else{
    document.getElementById('storedData').textContent = "No stored Data!";
}
