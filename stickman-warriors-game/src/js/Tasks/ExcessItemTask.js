import Task from "./Task";
import { CLASS_NAMES } from "../Constants/excessTaskClasses";

class ExcessItemTask extends Task {
    constructor() {
        super();
        this.classNamesArray = CLASS_NAMES;
        this.taskWrapper = document.getElementById('excessItem-task-field');
        this.itemsWrapper = document.getElementById('excessItem-wrapper');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.classNamesArray);
        this.shuffleArray(this.classNamesArray[0]);
        this.shuffleArray(this.classNamesArray[1]);
        this.excessItemClassName = this.classNamesArray[0][0];
        this.similarItemsClassNames = this.classNamesArray[1].slice(0, 3);
        this.allItems = this.similarItemsClassNames.concat(this.excessItemClassName);
        this.shuffleArray(this.allItems);
        this.createField();
    }

    createField() {
        this.allItems.forEach((item) => {
            let image = document.createElement('div');
            image.classList.add(item);
            this.itemsWrapper.appendChild(image);
        })
    }

    selectImage(e) {
        if (e.target.parentNode === this.itemsWrapper && e.target !== this.selectedItem) {
            e.target.classList.add('selected-excess-item');
            this.selectedItem ? this.selectedItem.classList.remove('selected-excess-item') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        if (this.selectedItem && this.selectedItem.classList.contains(this.excessItemClassName)) {
            return true;
        } else return false;
    }
}

export const ExcessItem = new ExcessItemTask();