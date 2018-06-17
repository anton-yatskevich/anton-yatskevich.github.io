import Task from "./Task";
import { ANIMALS } from "../Constants/animals";

class AnimalsNamesTask extends Task {
    constructor() {
        super();
        this.animalsArray = ANIMALS;
        this.taskWrapper = document.getElementById('animals-task-field');
        this.animalImageWrapper = document.getElementById('animal-image-wrapper');
        this.answerInput = document.getElementById('animal-name-answer');
    }

    init() {
        super.init();
        this.answerInput.value = '';
        this.animalImageWrapper.innerHTML = '';
        this.shuffleArray(this.animalsArray);
        let index = Math.floor(Math.random() * this.animalsArray.length);
        this.animal = this.animalsArray[index];
        this.showAnimalImage();
    }

    showAnimalImage() {
        let image = document.createElement('div');
        image.classList.add('animal-image', this.animal.className);
        this.animalImageWrapper.appendChild(image);
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (this.animal.name.indexOf(answer) !== -1) {
            return true;
        } else return false;
    }
}

export const AnimalsNames = new AnimalsNamesTask();