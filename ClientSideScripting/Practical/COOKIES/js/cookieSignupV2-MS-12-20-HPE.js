function setCookie(cookieName, cookieValue, expirationDays){
    const date = new Date();

    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName} = ${encodeURIComponent(cookieValue)}; expires=${date.toUTCString()}; path=/`;

}

function getCookie(cookieName){
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++){
        const cookie = cookies[i].trim();

        if(cookie.indexOf(cookieName + '=') === 0){
            return decodeURIComponent(cookie.substring(cookieName.length + 1));
            }
    }
    return "";
}
if(document.getElementById('signupForm')){
    document.getElementById('signupForm').addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        setCookie('userName',name,7);
        setCookie('userEmail',email,7);

        window.location.href = "confirmation.html"
    });
}

if(document.querySelector('.name') && document.querySelector('.value')){
    window.onload = function(){
        const name = getCookie('userName');
        const email = getCookie('userEmail');

        if(name && email){
            document.querySelector('.name').textContent = "Name: " + name;

            document.querySelector('.email').textContent = "Email: " + email;
        }
        else{
            document.querySelector('.name').textContent = "No name cookie found";
            document.querySelector('.email').textContent = "No email cookie found";
        }
    }
}