// Function that validates that user has entered correct information
// and displays appropriate message to customer



   (function(){
    emailjs.init("7C6zvT4YtpMzfH3E0");
        
   })();

function validateForm(){
    //reset error messages
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('telError').textContent = "";
    document.getElementById('messageError').textContent = "";
    
    //Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telno = document.getElementById('telno').value.trim();
    const message = document.getElementById('message').value.trim();
    
    //Validate name
    if(name === ''){
        document.getElementById('nameError').textContent = 'Name is required!';
        return false;
    }
    
    //Regular expression to check if the name contains only letters
    const namePattern = /^[a-zA-Z ]+$/;

    if(!namePattern.test(name)){
        document.getElementById('nameError').textContent = 'Only letters allowed!';
        return false;

    }

    //Counts the number of words
    const wordCount = name.trim().split(/\s+/).length;

    if(wordCount < 2){
        document.getElementById('nameError').textContent = 'Name must have at least 2 words';
        return false;
    }

    //Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent = 'Invalid email address';
        return false;
    }

    //Validate numbers only
    const telnoPattern = /^[0-9]+$/;

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

    

    //Send email via EmailJS
    emailjs.send("service_2so0aig","template_tpds5pp",{
        name: name,
        email: email,
        telno: telno,
        message: message
    })

    .then(function(response){
        console.log("Email sent successfully!",response.status,
        response.text);
        document.getElementById('status-message').textContent = "Form sent successfully!"
        
        //Add a short delay to ensure data is saved before redirecting
        setTimeout(() => {
            window.location.href = 'confirmation.html';
        }, 2000); // 2000ms delay to ensure data is saved
    },function(error){
        console.error("Failed to send email.",error);
        alert("Failed to send email. Please try again later!");
    });
        return false;
    
}
function saveDataLocally(name, email, telno, message){
    const formData = {name, email, telno, message};
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log("Data saved locally:",formData);//Debugging log to confirm data is saved
}
























    
    
    
    
  