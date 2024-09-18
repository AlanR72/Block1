let counter = 0;

const activeUsers = [
    {username: "minion", password: "GCCrockets"},
    {username: "user1", password: "password1"},
    {username: "user2", password: "password2"},
    {username: "user3", password: "password3"},
    {username: "user4", password: "password4"}

];

function check(){
    let getUser = document.getElementById('user').value;
    let getPassword = document.getElementById('password').value;

    let userFound = false; //variable to track if a valid user is found

    for(let i = 0; i < activeUsers.length; i++){
        if(activeUsers[i].username === getUser && activeUsers[i].password === getPassword){
            userFound = true;
            document.getElementById('feedback').innerHTML = "Access: Granted &#10004;";
            document.getElementById('feedback').style.color = "green";

            setTimeout(() => {
                window.location.href = "accessGranted.html";

            }, 3000);
            break;
        }
    }
    if(!userFound){
        counter++;
        document.getElementById('feedback').innerHTML = 'Access: Denied Try Again &#10008;';
        document.getElementById('feedback').style.color = 'red';
    }

    if(counter === 3){
        document.getElementById('feedback').innerHTML = 'Access: Denied Contact Admin &#10071; &#10071;';
        document.getElementById('feedback').style.color = 'red';
        document.getElementById('user').disabled = true;
        document.getElementById('password').disabled = true;
        document.getElementById('button').disabled = true;
    }
}