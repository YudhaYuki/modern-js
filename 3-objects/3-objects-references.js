let myAccount = {
    name: 'Yudha Yuki',
    expenses: 0,
    income: 0
}

// let addExpense = function (account, amount) {
//     account.expenses = account.expenses + amount;
//     // console.log(account);
// }

// addExpense(myAccount, 2.50);
// console.log(myAccount);





// CHALLENGE
// addIncome

// resetAccount

// getAccountSummary
// Account for Yudha has $900. $1000 in income. $100 in expenses

// addIncome
// addExpenses
// getAccountSummary
// resetAccount
// getAccountSummary

let addExpenses = function(account, amount) {
    account.expenses += amount;
}

let addIncome = function(account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}


addIncome(myAccount, 1000);
addExpenses(myAccount, 2.5);
addExpenses(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));





