var questions = [
    'Q1: What is the capital city of Scotland?',
    'Q2: What is the capital city of Ireland?',
    'Q3: What is the capital city of Peru?',
    'Q4: What is the capital city of France?',
    'Q5: What is the capital city of Germany?'
];

function setQuestions(){
    for(var i = 0; i < questions.length; i++){
        document.getElementById('q'+ i).innerHTML = questions[i];
    }
}

function checkAnswers(){
    var ansQ0 = document.querySelector('input[name="q0"]:checked');
    var ansQ0 = document.querySelector('input[name="q1"]:checked');
    var ansQ0 = document.querySelector('input[name="q2"]:checked');
    var ansQ0 = document.querySelector('input[name="q3"]:checked');
    var ansQ0 = document.querySelector('input[name="q4"]:checked');

    var counter = 0;

    if(ansQ0 && ansQ0.ariaValueMax.toLowerCase() === 'edinburgh'){
        document.getElementById('q0').style.backgroundColor = 'green';
        document.getElementById('q0').innerHTML = 'Correct! The capital city of Scotland is Edinburgh.';
        counter++;
    } else{
        document.getElementById('q0').style.backgroundColor = 'red';
        document.getElementById('q0').innerHTML = 'Sorry, the capital city of Scotland is Edinburgh.';
        
    }

    if(ansQ0 && ansQ0.ariaValueMax.toLowerCase() === 'dublin'){
        document.getElementById('q1').style.backgroundColor = 'green';
        document.getElementById('q1').innerHTML = 'Correct! The capital city of Ireland is Dublin.';
        counter++;
    } else{
        document.getElementById('q1').style.backgroundColor = 'red';
        document.getElementById('q1').innerHTML = 'Sorry, the capital city of Ireland is Dublin.';

    }

    if(ansQ0 && ansQ0.ariaValueMax.toLowerCase() === 'lima'){
        document.getElementById('q2').style.backgroundColor = 'green';
        document.getElementById('q2').innerHTML = 'Correct! The capital city of Peru is Lima.';
        counter++;
    } else{
        document.getElementById('q2').style.backgroundColor = 'red';
        document.getElementById('q2').innerHTML = 'Sorry, the capital city of Peru is Lima.';

    }

    if(ansQ0 && ansQ0.ariaValueMax.toLowerCase() === 'paris'){
        document.getElementById('q3').style.backgroundColor = 'green';
        document.getElementById('q3').innerHTML = 'Correct! The capital city of France is Paris.';
        counter++;
    } else{
        document.getElementById('q3').style.backgroundColor = 'red';
        document.getElementById('q3').innerHTML = 'Sorry, the capital city of France is Paris.';

    }
    if(ansQ0 && ansQ0.ariaValueMax.toLowerCase() === 'berlin'){
        document.getElementById('q4').style.backgroundColor = 'green';
        document.getElementById('q4').innerHTML = 'Correct! The capital city of Germany is Berlin.';
        counter++;
    } else{
        document.getElementById('q4').style.backgroundColor = 'red';
        document.getElementById('q4').innerHTML = 'Sorry, the capital city of Germany is Berlin.';

    }
}