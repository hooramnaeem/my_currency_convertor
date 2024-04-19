#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgBlueBright("!!!!!CURRENCY CONVERTOR!!!!!"));
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    NZD: 1.66,
    NPR: 133.08,
    MAD: 10.06,
    EGP: 47.33,
    AFN: 71.23,
    IQD: 1308.17,
    INR: 83.30,
    PKR: 277.54,
    AED: 3.67,
    LKR: 297.80,
    GBP: 0.80,
    OMR: 0.38,
    KWD: 0.31,
    CAD: 1.38,
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Enter currency you want to  convert",
        type: "list",
        choices: ['USD', 'EUR', 'NZD', 'NPR', 'MAD', 'EGP', 'AFN', 'IQD', 'INR', 'PKR', 'AED', 'LKR', 'GBP', 'OMR', 'KWD', 'CAD']
    },
    {
        name: "to",
        message: "Enter currency in which you want to convert",
        type: "list",
        choices: ['USD', 'EUR', 'NZD', 'NPR', 'MAD', 'EGP', 'AFN', 'IQD', 'INR', 'PKR', 'AED', 'LKR', 'GBP', 'OMR', 'KWD', 'CAD']
    },
    {
        name: "amount",
        message: "Enter your amount YOU WANT TO CONVERT",
        type: "number"
    },
]);
let from_amount = currency[user_input.from]; //exchange rate
let to_amount = currency[user_input.to]; //exchange rate
let amount = user_input.amount;
let base_amount = amount / from_amount; //usd base currency
let covertedAmount = base_amount * to_amount;
let result = Math.round(covertedAmount);
console.log(chalk.bgGreenBright(result));
// console.log(covertedAmount);
