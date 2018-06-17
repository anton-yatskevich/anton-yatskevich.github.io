import Task from "./Task";

class TranslationTask extends Task {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('translation-task-field');
        this.wordContainer = document.getElementById('word-for-translation');
        this.answerInput = document.getElementById('translation-input');
    }

    init() {
        super.init();
        this.answerInput.value = '';
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
        this.translations = this.vocabulary[index].translation;
        this.wordContainer.textContent =  this.word.toUpperCase();
    }

    checkResult() {
        this.answer = this.answerInput.value.toLowerCase();
        if (this.translations.indexOf(this.answer) !== -1) {
           return true;
        } else return false;
    }
}

export const Translation = new TranslationTask()