function setCookie(){
    const cookieName = "cookieName";
    const cookieValue = "cookieValue";
    const expirationDays = 7;

    //create date for cookie expiration
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));

    //set cookie
    document.cookie = `${cookieName} = ${cookieValue}; expires${date.toUTCString()}; path=/`;
}

window.onload = function(){
    setCookie();
}