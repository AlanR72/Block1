let questions = [
    'Q1: What is Woody’s Space Ranger friend called in Toy Story?',
    'Q2: Which Disney princess has ice powers?',
    'Q3: Which Paw Patrol pup is a spotty dalmatian?',
    "Q4: What is the name of Baby Shark’s best friend?",
    "Q5: Who is this? He’s a big fan of marmalade sandwiches, and always keeps a spare under his hat!",
    "Q6: Who is the fashion designer in The Incredibles and Incredibles 2?",
    "Q7: What is the name of Jasmine’s pet tiger?",
    "Q8: What club does Duggee run in Hey Duggee?",
    "Q9: What clever thing can Waffle the Wonder Dog do that other dogs can’t?",
    "Q10: What does Andy use to travel to the time of the dinosaurs?"
];

//Function for first 3 questions
function setQuestions(){
    for(var i=0; i < questions.length; i++)
    {
        document.getElementById('q'+ i).innerHTML = questions[i];
    }
}

function checkAnswers(){
    let ansQ0 = document.getElementById('aq0').value;
    let ansQ1 = document.getElementById('aq1').value;
    let ansQ2 = document.getElementById('aq2').value;

    let counter = 0;

    if(ansQ0.toLowerCase() === 'buzz lightyear'){
        counter++;//increment counter for correct answer
        document.getElementById('q0').style.backgroundColor = '#84F53F';
        document.getElementById('q0').innerHTML = 'Correct, his name is Buzz Lightyear!';
        
    }else{
        document.getElementById('q0').style.backgroundColor = 'red';
        document.getElementById('q0').innerHTML = 'Incorrect, his name is Buzz Lightyear!';
    
    }

    if(ansQ1.toLowerCase() === 'elsa'){
        counter++;//increment counter for correct answer
        document.getElementById('q1').style.backgroundColor = '#84F53F';
        document.getElementById('q1').innerHTML = 'Correct, her name is Elsa!';
        
    }else{
        document.getElementById('q1').style.backgroundColor = 'red';
        document.getElementById('q1').innerHTML = 'Incorrect, her name is Elsa!';
    
    }
    if(ansQ2.toLowerCase() === 'marshall'){
        counter++;//increment counter for correct answer
        document.getElementById('q2').style.backgroundColor = '#84F53F';
        document.getElementById('q2').innerHTML = 'Correct, his name is Marshall!';
        
    }else{
        document.getElementById('q2').style.backgroundColor = 'red';
        document.getElementById('q2').innerHTML = 'Incorrect, his name is Marshall!';
    
    }
    var ansQ3 = document.querySelector('input[name="q3"]:checked');
    var ansQ4 = document.querySelector('input[name="q4"]:checked');
    var ansQ5 = document.querySelector('input[name="q5"]:checked');
    var ansQ6 = document.querySelector('input[name="q6"]:checked');
    var ansQ7 = document.querySelector('input[name="q7"]:checked');
    var ansQ8 = document.querySelector('input[name="q8"]:checked');
    var ansQ9 = document.querySelector('input[name="q9"]:checked');
    

    if(ansQ3 && ansQ3.value.toLowerCase() === 'william'){
        document.getElementById('q3').style.backgroundColor = '#84F53F';
        document.getElementById('q3').innerHTML = 'Correct! His name is William.';
        counter++;
    } else{
        document.getElementById('q3').style.backgroundColor = 'red';
        document.getElementById('q3').innerHTML = 'Sorry, his name is William.';
        
    }

    if(ansQ4 && ansQ4.value.toLowerCase() === 'paddington'){
        document.getElementById('q4').style.backgroundColor = '#84F53F';
        document.getElementById('q4').innerHTML = 'Correct! His name is Paddington.';
        counter++;
    } else{
        document.getElementById('q4').style.backgroundColor = 'red';
        document.getElementById('q4').innerHTML = 'Sorry, his name is Paddington.';
        
    }

    if(ansQ5 && ansQ5.value.toLowerCase() === 'edna'){
        document.getElementById('q5').style.backgroundColor = '#84F53F';
        document.getElementById('q5').innerHTML = 'Correct! Her name is Edna.';
        counter++;
    } else{
        document.getElementById('q5').style.backgroundColor = 'red';
        document.getElementById('q5').innerHTML = 'Sorry, her name is Edna.';

    }

    if(ansQ6 && ansQ6.value.toLowerCase() === 'rajah'){
        document.getElementById('q6').style.backgroundColor = '#84F53F';
        document.getElementById('q6').innerHTML = 'Correct! His name is Rajah.';
        counter++;
    } else{
        document.getElementById('q6').style.backgroundColor = 'red';
        document.getElementById('q6').innerHTML = 'Sorry, his name is Rajah.';

    }

    if(ansQ7 && ansQ7.value.toLowerCase() === 'the squirrel club'){
        document.getElementById('q7').style.backgroundColor = '#84F53F';
        document.getElementById('q7').innerHTML = 'Correct! He runs The Squirrel Club.';
        counter++;
    } else{
        document.getElementById('q7').style.backgroundColor = 'red';
        document.getElementById('q7').innerHTML = 'Sorry, he runs The Squirrel Club.';

    }
    if(ansQ8 && ansQ8.value.toLowerCase() === 'talk'){
        document.getElementById('q8').style.backgroundColor = '#84F53F';
        document.getElementById('q8').innerHTML = 'Correct! He can talk.';
        counter++;
    } else{
        document.getElementById('q8').style.backgroundColor = 'red';
        document.getElementById('q8').innerHTML = 'Sorry, he can talk.';

    }

    if(ansQ9 && ansQ9.value.toLowerCase() === 'museumclock'){
        document.getElementById('q9').style.backgroundColor = '#84F53F';
        document.getElementById('q9').innerHTML = 'Correct! He uses the museum clock.';
        counter++;
    } else{
        document.getElementById('q9').style.backgroundColor = 'red';
        document.getElementById('q9').innerHTML = 'Sorry, he uses the museum clock.';
        
    }
    if(counter <= 5){
    document.getElementById('score').innerHTML = 'Sorry you failed by scoring'+ counter + ' out of 10.';
    document.getElementById('score').style.backgroundColor = 'red';
    }else{
        document.getElementById('score').innerHTML = 'Congratulations you have passed by scoring '+ counter + ' out of 10.';
        document.getElementById('score').style.backgroundColor = '#84F53F';
    }
}
