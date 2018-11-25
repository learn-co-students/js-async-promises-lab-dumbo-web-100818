const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
     let box = document.querySelector('.question-container')
      box.innerHTML = question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

// return new Promise((resolve, reject) => {
//     setTimeout(function(){
//       let value = num1 * num2
//       resolve(value)
//     }, 2000 )


function removeQuestion(){
  return new Promise(function() {
    let box = document.querySelector('.question-container')
    box.innerHTML = ''
});
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

// function trueAndFalseButtons(){
// return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
// }
// function trueAndFalseButtons() {
// return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
// }

function trueAndFalseButtons(){
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
    return btn.addEventListener('click', () => {
      toggleTrueAndFalseButtons()
      askQuestionThenRemoveQuestion(5000)
    })
  }
