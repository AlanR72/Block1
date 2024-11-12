function setCookie(name, email, days){
        const date = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        document.cookie = `${name} = ${email}; expires=${date.toUTCString()}; path=/`;

}

//add event listener to handle form submission

document.getElementById('signupForm').addEventListener('submit', function(event){
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    setCookie(name, email, 7);

    alert(`Cookie Set Name: ${name}, Email: ${email}`);


});