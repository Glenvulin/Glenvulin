const question1 = document.querySelector(".clickevent1");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const response1 = document.querySelector("#rep-1");

const question2 = document.querySelector(".clickevent2");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const response2 = document.querySelector("#rep-2");
/*************Question 1 *****************/

question1.addEventListener('click', () => {
  question1.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => { 
  response1.classList.remove('hidden');
  response1.style.color = "maroon";
});

btn2.addEventListener("click", () => { 
  response1.classList.remove('hidden');
  response1.style.color = "maroon";
});

btn3.addEventListener("click", () => { 
  response1.classList.remove('hidden'); //
  response1.style.color = "lime";
});

/*************Question 2 *****************/

question2.addEventListener('click', () => {
    question2.classList.toggle("question-clicked");
  });
  
  btn4.addEventListener("click", () => { 
    response2.classList.remove('hidden2');
    response2.style.color = "maroon";
  });
  
  btn5.addEventListener("click", () => { 
    response2.classList.remove('hidden2');
    response2.style.color = "lime";
  });
  
  btn6.addEventListener("click", () => { 
    response2.classList.remove('hidden2'); //
    response2.style.color = "maroon";
  });