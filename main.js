import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "number",
        name: "numberOne",
        massage: "Enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        massage: "Enter your second number" },
    { type: "list",
        name: "opertor",
        massage: "Enter your opertor",
        choices: ["+", "-", "*", "/"] }
]);
const { numberOne, numberTwo, opertor } = answers;
let result;
switch (opertor) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid operator");
}
console.log(`${numberOne} ${opertor} ${numberTwo} = ${result}`);
