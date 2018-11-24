const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const appendQuestion = (ques) => {
  document.querySelector('.question-container').innerHTML = ques.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve) {
    setTimeout(function() {
        resolve(question)
    }, time)
  })
}

function removeQuestion() {
  document.querySelector('.question-container').innerHTML = ''
}

function askQuestionThenRemoveQuestion(time) {
return  askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return x =  document.querySelectorAll('.true-false-list .btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach((button) => button.classList.toggle('hide'))
}
function displayQuestionOnClick() {
  return document.querySelector('a').addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
