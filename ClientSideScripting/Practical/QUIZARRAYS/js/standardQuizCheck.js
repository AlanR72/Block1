//Array containing questions
var questions = [
    "Q1: What is the capital city of Scotland?",
    "Q2: What is the capital city of Ireland?",
    "Q3: What is the capital city of Peru?"
];

//Function to set questions in HTML
function setQuestions(){
    //loop through questions
    for(var i=0; i < questions.length; i++)
        {
        //Set the question text in the corresponding label element
        document.getElementById('q'+ i).innerHTML = questions[i];
    }
}

//Function to check answers when user submits
function checkAnswers(){
    var counter = 0; //Counter to keep track of correct answers
    //Loop through each question
    for(var i=0; i<questions.length; i++){
        var checkboxes = document.querySelectorAll('input[name="q'+i+'"]:checked');//Get checked boxes for current question

        //If at least one checkbox is checked for the current question
        if(checkboxes.length > 0){
            var correctAnswers = getCorrectAnswers(i);//Get correct answer for current question
            var userAnswers = []; //Array to store user-selected answers

            //Push value of each checked box to userAnswers array
            checkboxes.forEach(function(checkbox){
                userAnswers.push(checkbox.value);
            });

            //Check if userAnswers array contains all correct answers for the current question
            if(correctAnswers.every(answer >= userAnswers.includes(answer))){
                counter++;//Increment counter if all correct answers are selected
                document.getElementById('q'+i).style.backgroundColor = "green";//Provide feedback
                document.getElementById('q'+i).innerHTML = 'Correct! The capital city of Scotland is Edinburgh';//Feedback correct answer

            } else{
                document.getElementById('q'+i).style.backgroundColor = 'red';//Provide feedback
                document.getElementById('q'+i).innerHTML = 'Incorrect! The capital city of Scotland is Edinburgh.';//Feedback correct answer
            }
        }
    }

    //Display the score
    document.getElementById('score').innerHTML = "Score: "+ counter;
}

//Function to get correct answers for a given question index
function getCorrectAnswers(questionIndex){
    switch(questionIndex){
        case 0:
            return['edinburgh'];//Correct answer(s) for question 1
        case 1:
            return['dublin'];
        case 2:
            return['lima'];
        default:
            return[];
    }
}

