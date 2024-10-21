//Array containing questions
var questions = [
    "Q1: What is the capital city of Scotland?",
    "Q2: What is the capital city of Ireland?",
    "Q3: What is the capital city of Peru?"
];

//Function to set questions in HTML
function setQuestions(){
    //loop through questions
    for(var i=0; i<questions.length; i++){
        //Set the question text in the corresponding label element
        document.getElementById('q'+ i).innerHTML = questions[i];
    }
}

//Function to check answers when user submits
function checkAnswers(){
    var counter = 0; //Counter to keep track of correct answers
    //Loop through each question
    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q'+ i +'"]:checked');//Get checked boxes for current question
        
    }
}

