const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
 // appends the question to the "question-container
function appendQuestion(question){
    let container = document.querySelector('.question-container')
    container.innerHTML = question.questionText

}
 // it also returns a promise that is resolved after a specified amount of
 // time (so that we can expire the question after 5 seconds); the amount
 // of time to wait is provided as an argument to the function
function askQuestionThen(time){
    question = questions[0]
    appendQuestion(question)
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(question)
        }, time)
    })
}
// removes the question from the "question-container";
// it returns a promise so that the function is "thennable",
// meaning we can do something after the question
function removeQuestion(){
    let q = document.querySelector('.question-container')
    q.innerHTML = ''

}
 // it appends the question to the "question-container" and after a specified
 // amount of time removes the question; it takes an argument of "time"
 //  indicating the amount of time the question will be displayed
function askQuestionThenRemoveQuestion(time){
    return askQuestionThen(time).then(removeQuestion)
}
// returns the collection of true
// and false buttons already provided
function trueAndFalseButtons() {
	return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
