import Task from "./Task";

class SquareTask extends Task {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('squareFigure-task-field');
        this.figureWrapper = document.getElementById('figure-wrapper');
        this.answerInput = document.getElementById('square-answer');
        this.figuresList = ['rectangle-triangle', 'rectangle', 'isosceles-triangle', 'trapezium'];
    }

    init() {
        super.init();
        this.answerInput.value = '';
        this.figureWrapper.innerHTML = '';
        this.shuffleArray(this.figuresList);
        let index = Math.floor(Math.random() * this.figuresList.length);
        this.figure = this.figuresList[index];
        this.generateSize();
        this.createDescription()
        this.showFigure();
    }

    generateSize() {
        this.height = Math.floor(Math.random() * 6) + 5;
        this.width = Math.floor(Math.random() * 10) + 5;
        this.delta = Math.floor(Math.random() * 6) + 5;
        while ((this.height % 2) || (this.width % 2) || (this.delta % 2)) {
            this.delta = Math.floor(Math.random() * 5) + 5;
            this.height = Math.floor(Math.random() * 5) + 5;
            this.width = Math.floor(Math.random() * 5) + 10;
        }
        this.bottom = this.width + this.delta; 
    }

    createDescription() {
        this.description = document.createElement('p');
        switch (this.figure) {
            case 'rectangle': 
                this.description.textContent = `AB = ${this.height}, BC = ${this.width}`;
                this.square = this.height * this.width;
                break;
            case 'rectangle-triangle': 
                this.description.textContent = `BC = ${this.height}, AC = ${this.width}`;
                this.square = this.height * this.width / 2;
                break;
            case 'isosceles-triangle': 
                this.description.textContent = `AC = ${this.width}, BM = ${this.height}`;
                this.square = this.height * this.width / 2;
                break;   
            case 'trapezium': 
                this.description.textContent = `AB = ${this.bottom}, DC = ${this.width}, DF = ${this.height}`;
                this.square = this.height * (this.bottom + this.width) / 2;
                break;   
        }
    }

    showFigure() {
        this.image = document.createElement('div');
        this.image.classList.add('figure', this.figure);
        this.figureWrapper.appendChild(this.image);
        this.figureWrapper.appendChild(this.description);
    }

    checkResult() {
        if (this.square === +this.answerInput.value) {
            return true;
        } else return false;
    }
}

export const Square = new SquareTask();