function setCookie(name, value, days){
        const name = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        document.cookie = `${name} = ${value}; expires=${date.toUTCString()}; path=/`;

}

//add event listener to handle form submission

document.getElementById('signupForm').addEventListener('submit', function(event){
    
    const name = document.getElementById('name').value;

    setCookie(name, name, 7);

    alert(`Cookie Set Name: ${name}, Value: ${name}`);


});