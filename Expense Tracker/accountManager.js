import { Expense } from "./Expense.js";

const $submitBtn = document.querySelector(".btn");
const $description = document.getElementById("description");
const $amount = document.getElementById("amount");
export const $expensesList = document.querySelector(".expensesList");
const $formSelect = document.querySelector(".form-select");
const $trackingType = document.querySelector(".tracking-type");
const $selectError = document.querySelector(".select-error");
export const $budget = document.querySelector(".budget-highlight");
console.log($formSelect);
console.log($submitBtn);
console.log($description);
console.log($amount);
console.log($expensesList);
console.log($trackingType);
console.log($budget);
console.log($selectError);

export let allExpenses = [];

// when clicked on submit it read the values type,description,amount,and creates an instance Expense which has a function addexpense that  pushes the values to the HTML
$submitBtn.addEventListener("click", submitForm);
$formSelect.addEventListener("change", updateTrackingType);
$expensesList.addEventListener("click", deleteExpense);
function submitForm(e) {
  e.preventDefault();
  const type = $formSelect.value;
  const description = $description.value;
  const amount = $amount.value;
  if (type === "" || amount < 0) {
    $selectError.innerHTML =
      "please make sure tou selected a type and the amount it's bigger than 0";
    throw new Error(
      "please make sure tou selected a type and the amount it's bigger than 0"
    );
  }
  if (description === "" || amount === "") {
    return;
  }
  const expense = new Expense(type, description, amount);
  expense.AddExpense();
}
function updateTrackingType(element) {
  $trackingType.innerText = "Tracking " + element.target.value;
  $selectError.innerHTML = "";
}

export function deleteExpense(e) {
  //if(e.target.classList);
  if (e.target.classList.contains("delete-btn")) {
    const element = e.target.closest(".expense");
    const idDiv = Number(element.id);
    const filteredArr = allExpenses.filter((expense) => expense.id !== idDiv);
    console.log(filteredArr);
    allExpenses = filteredArr;
    $expensesList.innerHTML = "";
    allExpenses.forEach((expense) => {
      expense.renderExpense();
    });
  }
}

export function getColorByType(type) {
  let color =
    type === "Expenses"
      ? "lightCoral"
      : type === "Savings"
      ? "LightSeaGreen"
      : "PaleGreen";
  return color;
}

// https://www.youtube.com/watch?v=AI6_YbrX4xs
