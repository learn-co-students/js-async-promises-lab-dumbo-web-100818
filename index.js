const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

// function appendQuestion(){
//   mappedQ = `<ul> ${questions.map(q => "<li>" + q.questionText +"</li>").join("")} </ul>`
//
//
//   document.getElementsByClassName('question-container').innerHTML = mappedQ
// }

function appendQuestion(){
  document.querySelector('.question-container').innerHTML = questions[0].questionText
}


// function askQuestionThen(time){
//   question = questions[0]
//   return new Promise(function(resolve, reject) =>
//     setTimeout(resolve, time)
//   ).then(appendQuestion)
// }

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(() => {setTimeout(() => time)})
// Promises don't have to go before the appending of the question because it's in their nature to wait for a result. 

}

function removeQuestion(){
  document.querySelector('.question-container').innerHTML = ''
}

// function askQuestionThenRemoveQuestion(time){
//   return new Promise((resolve, reject) =>
//   setTimeout(() => askQuestionThen(time), time)).then(removeQuestion)
//
// }
// the askQuestionThen() function already returns a promise so it's 'thennable'! As in you can tack on a function afterwards. No need to create a new promise just so you can put .then on the end.

function askQuestionThenRemoveQuestion(time){
   return askQuestionThen(time).then(removeQuestion)

}

function trueAndFalseButtons(){
   return document.querySelectorAll('div.btn, div.lighten-2')
  // let trueRes = document.querySelector('.green')
  // let falseRes = document.querySelector('.red')
}

// function toggleTrueAndFalseButtons(){
// // console.log(trueAndFalseButtons());
//   let callback = (element) => {
//     if(element.classList.includes('hide'){
//
//     })
//   }
//   trueAndFalseButtons().forEach()
// }

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
     btn.classList.toggle("hide")
   })
}

// toggle is a shortcut for the logic of checking if a class exists in an HTML element and adding or removing it.

function displayQuestionOnClick(){
  let click = document.querySelector('.btn')
  return click.addEventListener('click', toggleTrueAndFalseButtons())
}
