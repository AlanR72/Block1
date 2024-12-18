document.addEventListener("DOMContentLoaded",()=>{
    const storedData = localStorage.getItem('formData');
    if(storedData){
        const parsedData = JSON.parse(storedData);
        document.getElementById('storedName').textContent = parsedData.name;
        document.getElementById('storedEmail').textContent = parsedData.email;
        document.getElementById('storedTelno').textContent = parsedData.telno;
        document.getElementById('storedMessage').textContent = parsedData.message;
    }else{
        document.getElementById('storedData').textContent = "No data stored.";
    }
});