let questions = [
    'Q1: What is the capital city of Scotland?',
    'Q2: What is the capital city of Ireland?',
    'Q3: What is the capital city of Peru?',
    'Q4: Explain the space time continuum.'
];

/* let getAnswers[]
let setAnswers[] */
/* code for for loop try */

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
    let ansQ3 = document.getElementById('aq3').value;

    let counter = 0;

    if(ansQ0.toLowerCase() === 'edinburgh'){
        counter++;//increment counter for correct answer
        document.getElementById('q0').style.backgroundColor = 'green';

    }

    
}

