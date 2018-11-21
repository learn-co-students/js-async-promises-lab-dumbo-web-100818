const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const container = document.querySelector(".question-container");

function appendQuestion(question) {
  container.innerHTML = question.questionText;
};

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(question);
    }, time);
  });
};

function removeQuestion() {
  container.innerHTML = "";
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
};

function trueAndFalseButtons() {
  const buttons = document.querySelectorAll("div.btn");
  return buttons;
};

function toggleTrueAndFalseButtons() {
  const buttons = trueAndFalseButtons()
  buttons.forEach(function(button) {
    const classes = button.classList;
    classes.contains("hide") ? classes.remove("hide") : classes.add("hide");
  });
};

function displayQuestionOnClick() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      toggleTrueAndFalseButtons();
      askQuestionThenRemoveQuestion(5000);
    });
  });
};
