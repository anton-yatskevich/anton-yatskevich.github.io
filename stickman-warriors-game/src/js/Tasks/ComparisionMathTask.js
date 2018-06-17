import Task from "./Task";

class ComparisionMathTask extends Task {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('comparision-task-field');
        this.firstElement = document.getElementById('first-comparision-number');
        this.answer = document.getElementById('comparision-operator');
        this.secondElement = document.getElementById('second-comparision-number');
    }

    init() {
        super.init();
        this.answer.value = '';
        this.generateNumbers();
    }

    generateNumbers() {
        this.firstNumber = Math.floor(Math.random() * 100);
        this.secondNumber = Math.floor(Math.random() * 100);
        this.firstElement.textContent = this.firstNumber;
        this.secondElement.textContent = this.secondNumber;
    }

    checkResult() {
        let operator = this.answer.value;
        switch (operator) {
            case '>': return (this.firstNumber > this.secondNumber);
            case '<': return (this.firstNumber < this.secondNumber);
            case '=': return (this.firstNumber === this.secondNumber);
        };
        return false;
    }
}

export const ComparisionNumbers = new ComparisionMathTask();

