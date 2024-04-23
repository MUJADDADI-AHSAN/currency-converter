#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.94,
    INR: 83.63,
    PKR: 278.36,
    CNY: 7.23,
    KWD: 0.31,
};
let user_answer = await inquirer.prompt([{
        name: "From",
        message: " Choose Any Currency For Exchange Rate ?",
        type: "list",
        choices: ["USD", "EURO", "INR", "PKR", "CNY", "KWD"]
    },
    {
        name: "To",
        message: "Enter Which Currency Would You Like To Be Converted Inn ?",
        type: "list",
        choices: ["USD", "EURO", "INR", "PKR", "CNY", "KWD"]
    },
    {
        name: "Amount",
        message: "Enter Your Amount ?",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
