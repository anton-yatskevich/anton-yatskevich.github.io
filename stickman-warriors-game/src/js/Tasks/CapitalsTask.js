import Task from "./Task";
import { COUNTRIES } from "../Constants/countries";

class CapitalsTask extends Task {
    constructor() {
        super();
        this.countriesList = COUNTRIES;
        this.taskWrapper = document.getElementById('capitals-task-field');
        this.countrySpan = document.getElementById('country-for-capital-task');
        this.answerInput = document.getElementById('capitals-answer');
    }

    init() {
        super.init();
        this.countrySpan.textContent = '';
        this.answerInput.value = '';
        let index = Math.floor(Math.random() * this.countriesList.length);
        this.country = this.countriesList[index];
        this.countrySpan.textContent = this.country.country[0].toUpperCase();
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (this.country.capital.indexOf(answer) !== -1) {
            return true;
        } else return false;
    }
}

export const Capitals = new CapitalsTask();