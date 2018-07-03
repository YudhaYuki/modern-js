
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> Total up all expenses -> Yudha has $100 in expenses.

const account = {
    name: 'Yudha Yuki',
    expenses: [],
    income:[],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description:description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        let AccountBalance = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        });

        this.income.forEach(function (inc) {
            totalIncome = totalIncome + inc.amount;
        });

        AccountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${AccountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
    }

}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Salary', 1000);
account.addIncome('Job', 2);

console.log(account.getAccountSummary())
