#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { env } from "process";

const answers:  {
numberOne: number
numberTwo: number
opertor: string
} = await inquirer.prompt([{
type: "number",
name: "numberOne",
massage: "Enter your first number"
},
{ type: "number",
  name: "numberTwo",
  massage: "Enter your second number"},
  { type: "list",
  name: "opertor",
  massage: "Enter your opertor",
  choices: ["+", "-", "*", "/"]}
])

const { numberOne, numberTwo, opertor } = answers;

let result
switch (opertor) {
case "+":
result = numberOne + numberTwo;
    break;
    case "-":
        result =  numberOne - numberTwo;
        break;
        case "*":
            result =  numberOne * numberTwo;
            break;
            case "/":
                result =  numberOne / numberTwo;
                break;
                default:
                    console.log("Invalid operator");
                }

                    console.log(chalk.yellow(`${numberOne} ${opertor} ${numberTwo} = ${result}`));