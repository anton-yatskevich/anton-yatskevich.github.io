import Task from "./Task";
import { COUNTRIES } from "../Constants/countries";

class CountriesTask extends Task {
    constructor() {
        super();
        this.countriesList = COUNTRIES;
        this.taskWrapper = document.getElementById('countries-task-field');
        this.flagWrapper = document.getElementById('flag-wrapper');
        this.answerInput = document.getElementById('country-answer');
    }

    init() {
        super.init();
        this.answerInput.value = '';
        this.flagWrapper.innerHTML = '';
        let index = Math.floor(Math.random() * this.countriesList.length);
        this.country = this.countriesList[index];
        this.showFlag();
    }

    showFlag() {
        let flag = document.createElement('div');
        flag.classList.add('flag', this.country.className);
        this.flagWrapper.appendChild(flag)
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (this.country.country.indexOf(answer) !== -1) {
            return true;
        } else return false;
    }
}

export const Countries = new CountriesTask();