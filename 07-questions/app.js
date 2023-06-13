// traversing the dom
/*const btns = document.querySelectorAll('.question-btn');
btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
}); */

//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function() {
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});


