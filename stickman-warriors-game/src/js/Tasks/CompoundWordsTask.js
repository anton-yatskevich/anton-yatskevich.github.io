import { WORD_LIST } from "../Constants/CompoundWordList"
import Task from "./Task";

class CompoundWordsTask extends Task {
    constructor() {
        super();
        this.list = WORD_LIST;
        this.taskWrapper = document.getElementById('compound-word-task-field');
        this.startParts = document.getElementById('start-parts');
        this.endParts = document.getElementById('end-parts');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
        this.startParts.addEventListener('drop', (e) => this.drop(e));
        this.pairs = 4;
    }

    init() {
        super.init();
        this.startParts.innerHTML = '';
        this.endParts.innerHTML = '';
        this.compoundWords = 0;
        this.shuffleArray(this.list);
        this.createField();
    }

    createField() {
        let words = this.list.slice(0, this.pairs);
        let arrayOfEndParts = [];
        words.forEach(item => {
            let firstPart = document.createElement('div');
            firstPart.classList.add('first-part');
            firstPart.textContent = item.start;
            firstPart.dataset.fullword = item.full;
            this.startParts.appendChild(firstPart);
            let secondPart = document.createElement('div');
            secondPart.setAttribute('draggable', true);
            secondPart.textContent = item.end;
            secondPart.dataset.fullword = item.full;
            secondPart.classList.add('second-part');
            arrayOfEndParts.push(secondPart);
        });
        this.shuffleArray(arrayOfEndParts);
        arrayOfEndParts.forEach(item => {
            this.endParts.appendChild(item);
        });
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        e.dataTransfer.setData("word", e.target.dataset.fullword);
        e.dataTransfer.setData("part", e.target.textContent);
        this.dragElement = e.target;
    }

    drop(e) {
        if (e.target.classList.contains('first-part') && !e.target.classList.contains('wrongDrop') && !e.target.classList.contains('correctDrop')) {
            e.target.textContent += e.dataTransfer.getData("part");
            this.dragElement.classList.add('invisible');
            if (e.target.dataset.fullword === e.dataTransfer.getData("word")) {
                e.target.classList.add('correctDrop');
                this.compoundWords++;
            } else {
                e.target.classList.add('wrongDrop');
            }
        }
    }

    checkResult() {
        if (this.compoundWords === this.pairs) {
           return true;
        } else return false;
    }
}

export const CompoundWords = new CompoundWordsTask();