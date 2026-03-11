let expenses = [];

function addExpense(){

    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;

    if(desc === "" || amount === ""){
        alert("Enter valid data");
        return;
    }

    let expense = {
        description: desc,
        amount: parseFloat(amount)
    };

    expenses.push(expense);

    updateUI();
}

function updateUI(){

    let list = document.getElementById("expense-list");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach(function(exp){

        let li = document.createElement("li");
        li.textContent = exp.description + " - ₹" + exp.amount;

        list.appendChild(li);

        total += exp.amount;
    });

    document.getElementById("total").textContent = total;
}
