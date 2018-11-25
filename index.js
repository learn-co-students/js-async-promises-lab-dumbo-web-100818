const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const appendQuestion = function(questions){
  document.querySelector(".question-container").innerHTML = questions.questionText
}

const askQuestionThen = function(time){
  question = questions[0]
 appendQuestion(question)
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, time);
});
}

const removeQuestion = function(question){
  document.querySelector(".question-container").innerHTML = ""
   toggleTrueAndFalseButtons()
}

const askQuestionThenRemoveQuestion = function(time){
  return askQuestionThen(time).then(removeQuestion)
}

const trueAndFalseButtons = function(){
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

const toggleTrueAndFalseButtons = function() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

const displayQuestionOnClick = function(){
  let btn = document.querySelector('a')
 return btn.addEventListener('click', () => {
   toggleTrueAndFalseButtons()
   askQuestionThenRemoveQuestion(5000)
 })
}
