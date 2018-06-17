import Task from "./Task";
import { ANIMALS } from "../Constants/animals";

class ComparisionAnimalsTask extends Task {
    constructor() {
        super();
        this.animalsArray = ANIMALS;
        this.taskWrapper = document.getElementById('faster-animal-task-field');
        this.itemsWrapper = document.getElementById('faster-animals-task-wrapper');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.animalsArray);
        this.animals = this.animalsArray.slice(0, 2);
        this.createField();
    }

    createField() {
        this.animals.forEach(item => {
            let image = document.createElement('div');
            image.classList.add(item.className);
            this.itemsWrapper.appendChild(image);
        })
    }

    selectImage(e) {
        if (e.target.parentNode === this.itemsWrapper && e.target !== this.selectedItem) {
            e.target.classList.add('selected-animal');
            this.selectedItem ? this.selectedItem.classList.remove('selected-animal') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        this.animals.sort((a,b) => b.topSpeed - a.topSpeed);
        if (this.selectedItem && this.selectedItem.classList.contains(this.animals[0].className)) {
            return true;
        } else return false;
    }
}

export const FasterAnimals = new ComparisionAnimalsTask();