import Task from "./Task";

class ReorderNumbersTask extends Task {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('sort-numbers-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.arrayOfNumbers = [];
        this.arrayOfCells = [];
        this.dragElement = null;
        this.fillArrayOfNumbers();
        this.createField();
    }

    fillArrayOfNumbers() {
        let i = 0;
        for (i; i < 5; i++) {
            let number = Math.floor(Math.random() * 100);
            this.arrayOfNumbers.push(number);
        }
    }

    createField() {
        this.numbersContainer = document.createElement('div');
        this.numbersContainer.classList.add('cells-container');
        this.arrayOfNumbers.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
            cell.textContent = item;
            this.numbersContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.taskWrapper.appendChild(this.numbersContainer);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        this.dragElement = e.target;
    }

    drop(e) {
        e.preventDefault();
        if (e.target.classList.contains('reorder-cell') && this.dragElement.classList.contains('reorder-cell')) {
            let number = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = number;
        }
    }

    checkResult() {
        let userAnswer = '';
        let correctAnswer = '';
        this.arrayOfCells.forEach(item => userAnswer += item.textContent);
        this.arrayOfNumbers.sort((a,b) => a-b);
        this.arrayOfNumbers.forEach(item => correctAnswer += item);
        if (userAnswer === correctAnswer) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.numbersContainer.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.numbersContainer.innerHTML = '';
    }
}

export const ReorderNumbers = new ReorderNumbersTask();