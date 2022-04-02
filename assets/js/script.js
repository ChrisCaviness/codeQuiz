//Handles attached to the HTML elements so they can be targeted and updated.
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var resultsButton = document.getElementById('resultsButton');

//An array of questions and answers related to HTML CSS and JavaScript
var myQuestions = [
	{
		question: "What is HTML used for?",
		answers: {
			a: 'Adding site functionality',
			b: 'Being the bare bones of the webpage',
			c: 'Applying different visual styles'
		},
		correctAnswer: 'b'
	},
	{
		question: "What does CSS stand for?",
		answers: {
			a: 'Cascading Style Sheets ',
			b: 'Cyber Site System',
			c: 'Chocolate Shake Saturdays'
		},
		correctAnswer: 'a'
	},
    {
		question: "What can JavaScript do?",
		answers: {
			a: 'Change the HTML text',
			b: 'Make / Call functions',
			c: 'Both'
		},
		correctAnswer: 'c'
	},
    {
		question: "How does JavaScript call a function?",
		answers: {
			a: 'run functionName()',
			b: 'FunctionName()',
			c: 'functionName()'
		},
		correctAnswer: 'c'
	},
    {
		question: "What does JavaScript use to access different parts of the HTML?",
		answers: {
			a: 'The DOM',
			b: 'The Functions',
			c: 'The Styles'
		},
		correctAnswer: 'a'
	},
    {
		question: "What do you use when making a universal selector in CSS?",
		answers: {
			a: '#',
			b: '*',
			c: '!'
		},
		correctAnswer: 'b'
	},
    {
		question: "Where do you put the link to the .js file in your HTML?",
		answers: {
			a: 'At the bottom',
			b: 'In any div element',
			c: 'At the top'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you log something to the console in JavaScript?",
		answers: {
			a: 'consoleLog()',
			b: 'console.log()',
			c: 'log.Console()'
		},
		correctAnswer: 'b'
	},
    {
		question: "What is the icon in the browser window tab called?",
		answers: {
			a: 'Webicon',
			b: 'Siteicon',
			c: 'Favicon'
		},
		correctAnswer: 'c'
	},
    {
		question: "How can you select an HTML element with JavaScript?",
		answers: {
			a: 'document.getElementByClassName',
			b: 'querySelector',
			c: 'Both'
		},
		correctAnswer: 'c'
	},
];
  
//Calling the generateQuiz function
generateQuiz(myQuestions, quizContainer, resultsContainer, resultsButton);

//function that will reset the list of answers and push the questions iteratively as new divs to the HTML.
function generateQuiz(questions, quizContainer, resultsContainer, resultsButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
      // for loop that resets the answers and gives a radio button for each answer
      for(var i=0; i<questions.length; i++){
        answers = [];
        for(letter in questions[i].answers){
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
      quizContainer.innerHTML = output.join('');
    }
  
// showResults function to take answer containers and find selected answers to mark either correct or incorrect.
    function showResults(questions, quizContainer, resultsContainer){

      var answerContainers = quizContainer.querySelectorAll('.answers');

      var userAnswer = '';
      var numCorrect = 0;

      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          answerContainers[i].style.color = 'lightgreen';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    //Call to show questions at the start.
    showQuestions(questions, quizContainer);
    
    //Call to submit the results on button press.
    resultsButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }