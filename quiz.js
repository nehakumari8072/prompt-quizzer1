// Quiz questions array
const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "Vladimir Putin" },
  { question: "Which language is used for web development?", answer: "JavaScript" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    // Take user input (empty string if Cancel is pressed)
    let userAnswer = prompt(quizQuestions[i].question) || "";

    // Normalize input and correct answer
    userAnswer = userAnswer.toLowerCase().trim();
    const correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

    // Check answer
    if (userAnswer === correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Show final score
  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

runQuiz();
