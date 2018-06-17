import Task from "./Task";

class MathExerciseTask extends Task {
    constructor() {
        super();
        this.result = document.getElementById('result');
        this.operations = ['+', '-', '*', '/'];
        this.taskWrapper = document.getElementById("math-task-field");
        this.firstElement = document.getElementById('first-number');
        this.operator = document.getElementById('operation');
        this.secondElement = document.getElementById('second-number');
    }

    init() {
        super.init();
        this.result.value = '';
        this.generateOperation();
    }

    generateOperation() {
        let index = Math.floor(Math.random() * this.operations.length);
        this.generateNumbers(this.operations[index]);
    }

    generateNumbers(operation) {
        switch (operation) {
            case '+':  
                this.firstNumber = Math.floor(Math.random() * 100);
                this.secondNumber = Math.floor(Math.random() * 100);
                this.answer = this.firstNumber + this.secondNumber;
                break;
            case '-': 
                this.secondNumber = Math.floor(Math.random() * 100);
                this.firstNumber = Math.floor(Math.random() * 100) + this.secondNumber;
                this.answer = this.firstNumber - this.secondNumber;
                break;
            case '/': 
                this.secondNumber = Math.floor(Math.random() * 10) + 1;
                this.firstNumber = this.secondNumber * (Math.floor(Math.random() * 10) + 1);
                this.answer = this.firstNumber / this.secondNumber;
                break;
            case '*': 
                this.firstNumber = Math.floor(Math.random() * 100) + 1;
                this.secondNumber = Math.floor(Math.random() * 10) + 1;
                this.answer = this.firstNumber * this.secondNumber;
                break;
        }
        this.firstElement.textContent = this.firstNumber;
        this.operator.textContent = operation;
        this.secondElement.textContent = this.secondNumber;
    }

    checkResult() {
        if (+this.result.value === this.answer) {
            return true;
        } else return false
    }
}

export const MathTask = new MathExerciseTask();

