(function(){
    emailjs.init("NVVJY4WyAniIsoO85")
})();

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    //Collect form data
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telno: document.getElementById('telno').value,
        message: document.getElementById('message').value,
    };

    //send the email using emailjs
    emailjs.send("service_o0ngr7e", "template_1weu9hb", templateParams)
    .then(function (response){
        document.getElementById('status-message').textContent = "Message sent successfully!";
        console.log('Success!', response.status, response.text);
    }, function(error){
        document.getElementById('status-message').textContent = "Failed to send message! Try again.";
        console.error('Failed...', error);
    });
});