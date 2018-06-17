import Task from "./Task";
import { CLASS_NAMES } from "../Constants/carsLogoClassNames";

class CarsLogoTask extends Task {
    constructor() {
        super();
        this.classNamesArray = CLASS_NAMES;
        this.taskWrapper = document.getElementById('carsLogo-task-field');
        this.itemsWrapper = document.getElementById('cars-logo-wrapper');
        this.carNameSpan = document.getElementById('car-logo-name');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.classNamesArray);
        this.car = this.classNamesArray[0];
        this.carNameSpan.textContent = this.classNamesArray[0].toUpperCase();
        this.otherLogos = this.classNamesArray.slice(1, 3);
        this.allItems = this.otherLogos.concat(this.car);
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
            e.target.classList.add('selected-car-logo');
            this.selectedItem ? this.selectedItem.classList.remove('selected-car-logo') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        if (this.selectedItem && this.selectedItem.classList.contains(this.car)) {
            return true;
        } else return false;
    }
}

export const CarsLogo = new CarsLogoTask();