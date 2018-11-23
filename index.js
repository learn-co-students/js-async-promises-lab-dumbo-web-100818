const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let q = document.querySelector(".question-container");
function appendQuestion(question) {
  q.innerHTML = question.questionText
}

function askQuestionThen(time) {
question = questions[0];
appendQuestion(question);
return new Promise(function(resolve){
  setTimeout(function(){
    resolve(question)
    }, time);
  })
}

function removeQuestion() {
  q.innerHTML = ""
  }

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
  let buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button){
      button.addEventListener('click', function(event){
        toggleTrueAndFalseButtons();
        askQuestionThenRemoveQuestion(5000);
      });
    });
};
