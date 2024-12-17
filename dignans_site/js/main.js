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
    
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('telError').textContent = "";
    document.getElementById('messageError').textContent = "";
    

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var telno = document.getElementById('telno').value.trim();
    var message = document.getElementById('message').value.trim();
    
    //Validate name
    if(name === ''){
        document.getElementById('nameError').textContent = 'Name is required!';
        return false;
    }
    
    //Regular expression to check if the name contains only letters
    var namePattern = /^[a-zA-Z ]+$/;

    if(!namePattern.test(name)){
        document.getElementById('nameError').textContent = 'Only letters allowed!';
        return false;

    }

    //Counts the number of words
    var wordCount = name.trim().split(/\s+/).length;

    if(wordCount < 2){
        document.getElementById('nameError').textContent = 'Name must have at least 2 words';
        return false;
    }

    //Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent = 'Invalid email address';
        return false;
    }

    //Validate numbers only
    var telnoPattern = /^[0-9]+$/;

    if(!telnoPattern.test(telno)){
        document.getElementById('telError').textContent = 'Only numbers allowed!';
        return false; 

    }

    //Validate message
    if(message === ''){
        document.getElementById('messageError').textContent = 'Message is required';
        return false;
    }

    //Form is valid, save data to local surgery
    saveDataLocally(name, email, telno, message); 

    //Redirect to confirmation.html
    setTimeout(()=>{
    window.location.href = 'confirmation.html';
    return false; //Prevent the form from submitting traditionally
    },4000);
    
}

function saveDataLocally(name, email, telno, message){
    //Create an object to represent the form data
    var formData = {
        name: name,
        email: email,
        telno: telno,
        message: message
    };

    //Convert the object to a JSON string and save to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
}

//Returning data from local storage to confirmation page

//Retreive data from local storage
var storedData = localStorage.getItem('formData');
//Display the stored data
if(storedData){
    var parsedData = JSON.parse(storedData);
    document.getElementById('storedName').textContent = parsedData.name;
    document.getElementById('storedEmail').textContent = parsedData.email;
    document.getElementById('storedTelno').textContent = parsedData.telno;
    document.getElementById('storedMessage').textContent = parsedData.message;
    
} else{
    document.getElementById('storedData').textContent = "No data stored";
} 
