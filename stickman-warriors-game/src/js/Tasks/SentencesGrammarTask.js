import Task from "./Task";
import { SENTENCES } from "../Constants/sentencesTask"

class SentencesGrammarTask extends Task {
    constructor() {
        super();
        this.sentensesArray = SENTENCES;
        this.taskWrapper = document.getElementById('grammar-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.shuffleArray(this.sentensesArray);
        this.sentence = this.sentensesArray[0].split(' ');
        this.arrayOfCells = [];
        this.dragElement = null;
        this.shuffleArray(this.sentence);
        this.createField();
    }

    createField() {
        this.wordsContainer = document.createElement('div');
        this.wordsContainer.classList.add('cells-container');
        this.sentence.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
            cell.textContent = item;
            this.wordsContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.taskWrapper.appendChild(this.wordsContainer);
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
            let word = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = word;
        }
    }

    checkResult() {
        let playerAnswer = '';
        this.arrayOfCells.forEach(item => playerAnswer += `${item.textContent} `);
        let correctAnswer = this.sentensesArray[0];
        if (playerAnswer.trim() === correctAnswer) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.wordsContainer.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.wordsContainer.innerHTML = '';
    }
}

export const GrammarTask = new SentencesGrammarTask();