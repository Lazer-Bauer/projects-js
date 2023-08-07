import {
  $budget,
  $expensesList,
  allExpenses,
  getColorByType,
} from "./accountManager.js";
let globalID = 1;
export class Expense {
  constructor(type, description, amount) {
    this.type = type;
    this.description = description;
    this.amount = Number(amount);
    this.id = globalID;
    this.color = getColorByType(type);
    this.date = new Date().toDateString();
  }
  AddExpense() {
    let currentBudget = +$budget.innerText.slice(0, -1);

    if (this.type === "Expenses") {
      if (this.amount > currentBudget) {
        alert("you don't have enough money");
        return;
      }
      currentBudget -= this.amount;
    } else {
      currentBudget += this.amount;
    }
    $budget.innerHTML = currentBudget + "$";
    globalID++;
    allExpenses.push(this);
    this.renderExpense();
  }
  renderExpense() {
    $expensesList.innerHTML += `<div id="${this.id}" class="expense d-flex justify-content-between w-100 " style="background-color:${this.color}">
    <span>${this.type}</span>
    <span>${this.description}</span>
    <span> ${this.amount}</span>
    <span>${this.date}</span>
    <button class="bg-danger" >
    <i class="bi bi-trash3 delete-btn "></i>
  </button>
    </div>`;
  }
}
