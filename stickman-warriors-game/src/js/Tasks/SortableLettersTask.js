import Task from "./Task";

class SortableLettersTask extends Task {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('reorder-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.arrayOfCells = [];
        this.dragElement = null;
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
        this.createField();
    }

    createField() {
        this.wordContainer = document.createElement('div');
        this.wordContainer.classList.add('cells-container');
        let arrayOfLetters = this.word.split('');
        this.shuffleArray(arrayOfLetters);
        arrayOfLetters.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
            cell.textContent = item;
            this.wordContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.taskWrapper.appendChild(this.wordContainer);
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
            let letter = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = letter;
        }
    }

    checkResult() {
        let answer = '';
        this.arrayOfCells.forEach(item => answer += item.textContent);
        if (answer === this.word) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.wordContainer.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.wordContainer.innerHTML = '';
    }
}

export const SortableLetters = new SortableLettersTask();