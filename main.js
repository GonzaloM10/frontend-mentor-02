const component2 = `<section class="component component2">
<img
  src="images/illustration-thank-you.svg"
  alt="illustration posnet"
  class="component2__img"
/>
<p class="component2__selection">
  You selected <span class="userChoice">4</span> out of 5
</p>
<h1 class="component__title mb-0">Thank you!</h1>
<p class="component__paragraph">
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
</p>
</section>`;
const component = document.querySelector(`.component`);
const main = document.querySelector("main");
const btnSubmit = document.querySelector(`.component__submit`);
const errorMessage = document.createElement(`div`);
errorMessage.innerHTML = "You haven't selected any options!";
errorMessage.className = "error-message";

let numSelected;

const numbers = [
  document.getElementById("btn-1"),
  document.getElementById("btn-2"),
  document.getElementById("btn-3"),
  document.getElementById("btn-4"),
  document.getElementById("btn-5"),
];

for (let i = 0; i < numbers.length; i++) {
  let n = i + 1;
  const number = numbers[i];
  number.addEventListener("click", () => {
    numSelected = `${n}`;
  });
}

btnSubmit.addEventListener("click", () => {
  if (numSelected == undefined) {
    component.append(errorMessage);
  } else {
    component.remove();
    main.innerHTML = component2;
    const userChoice = document.querySelector(".userChoice");

    userChoice.innerHTML = numSelected;
  }
});
