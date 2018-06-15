import Task from "./Task";
import { VOCABULARY } from "../Constants/Vocabulary";

class SortableLettersTask extends Task {
    constructor() {
        super();
        this.wordList = VOCABULARY;
        this.taskWrapper = document.getElementById('reorder-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.arrayOfCells = [];
        this.dragElement = null;
        let index = Math.floor(Math.random() * this.wordList.length);
        this.word = this.wordList[index].word;
        this.createField();
    }

    createField() {
        this.wordContainer = document.createElement('div');
        this.wordContainer.classList.add('letters-container');
        let arrayOfLetters = this.word.split('');
        this.shuffleArray(arrayOfLetters);
        arrayOfLetters.forEach((item, index) => {
            let cell = document.createElement('div');
            cell.classList.add('letter');
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
        if (e.target.classList.contains('letter') && this.dragElement.classList.contains('letter')) {
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