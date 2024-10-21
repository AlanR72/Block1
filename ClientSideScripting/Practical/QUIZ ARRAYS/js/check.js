// Array containing the quiz questions
var questions = [
    "Q1: What is the capital city of Scotland?", // Question 1
    "Q2: What is the capital city of Ireland?",  // Question 2
    "Q3: What is the capital city of Peru?"      // Question 3
];

// Function to set questions in the HTML elements
function setQuestions() {
    // Loop through each question and set the inner HTML for each corresponding label
    for (var i = 0; i < questions.length; i++) {
        document.getElementById("q" + i).innerHTML = questions[i];
    }
}

// Function to check the answers selected by the user
function checkAnswers() {
    // Get the value of the selected answer for each question
    var ansQ0 = document.getElementById("aq0").value; // Answer for Question 1
    var ansQ1 = document.getElementById("aq1").value; // Answer for Question 2
    var ansQ2 = document.getElementById("aq2").value; // Answer for Question 3
    
    var counter = 0; // Initialize score counter

    // Check the answer for Question 1
    if (ansQ0.toLowerCase() === "edinburgh") {
        counter++; // Increment counter for correct answer
        document.getElementById("q0").style.backgroundColor = "green"; // Set background color to green for correct answer
        document.getElementById("q0").innerHTML = "Correct, the capital city of Scotland is Edinburgh"; // Feedback message
    } else {
        document.getElementById("q0").style.backgroundColor = "red"; // Set background color to red for incorrect answer
        document.getElementById("q0").innerHTML = "Incorrect, the capital city of Scotland is Edinburgh"; // Feedback message
    }

    // Check the answer for Question 2
    if (ansQ1.toLowerCase() === "dublin") {
        counter++; // Increment counter for correct answer
        document.getElementById("q1").style.backgroundColor = "green"; // Set background color to green for correct answer
        document.getElementById("q1").innerHTML = "Correct, the capital city of Ireland is Dublin"; // Feedback message
    } else {
        document.getElementById("q1").style.backgroundColor = "red"; // Set background color to red for incorrect answer
        document.getElementById("q1").innerHTML = "Incorrect, the capital city of Ireland is Dublin"; // Feedback message
    }

    // Check the answer for Question 3
    if (ansQ2.toLowerCase() === "lima") {
        counter++; // Increment counter for correct answer
        document.getElementById("q2").style.backgroundColor = "green"; // Set background color to green for correct answer
        document.getElementById("q2").innerHTML = "Correct, the capital city of Peru is Lima"; // Feedback message
    } else {
        document.getElementById("q2").style.backgroundColor = "red"; // Set background color to red for incorrect answer
        document.getElementById("q2").innerHTML = "Incorrect, the capital city of Peru is Lima"; // Feedback message
    }

    // Update the score display with the total correct answers
    document.getElementById("score").innerHTML = "Score: " + counter; // Display the final score
}