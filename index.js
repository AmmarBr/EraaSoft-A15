let userBalance = 0;
let amountInbut = document.querySelector("input");
let table = document.querySelector("table tbody");
let transactoins = [];

let showBalance = () => {
    let span = document.querySelector("#userBalance");
    span.innerText = userBalance;

};

let depsitBalance = () => {
    let amount = +amountInbut.value;
    let transactoin =
    {
        balanceBefore: userBalance,
        transactoinAmount: amount,
        transactoinType: "deposit",
        balanceAfter: userBalance + amount,
    }
    userBalance = userBalance + amount;
    transactoins.push(transactoin);
    showTransaction();
    showBalance();
};

let withdeawBalance = () => {
    let amount = +amountInbut.value;
    if (userBalance >= amount) {
        let transactoin =
        {
            balanceBefore: userBalance,
            transactoinAmount: amount,
            transactoinType: "withdrow",
            balanceAfter: userBalance - amount,
        }
        userBalance = userBalance - amount;
        transactoins.push(transactoin);
    } else {
        alert("مفيش فلوس")
    }
    showTransaction();
    showBalance();
};

showBalance();

let showTransaction = () => {
    table.innerHTML = "";
    transactoins.forEach((el, index) => {

        table.innerHTML += `
            <tr>
                <th>${index + 1}</th>
                <th>${el.balanceBefore}</th>
                <th>${el.transactoinAmount}</th>
                <th><span class="${el.transactoinType == "deposit" ? "bg-success" : "bg-danger"} ">${el.transactoinType}</span> </th>
                <th>${el.balanceAfter}</th>
            </tr>
        `;
    });
}

let deleteRowBtn = () => {
    const table = document.querySelector("table tbody");
    const rowCount = table.rows.length;


    if (rowCount >= 1) {
        table.deleteRow(rowCount - 1);
    } else {
        alert("لا يوجد صفوف لحذفها!");
    }
};
