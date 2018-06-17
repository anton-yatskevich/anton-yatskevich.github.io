import Task from "./Task";

class ListeningTask extends Task {
    constructor() {
        super();
        this.synth = window.speechSynthesis;
        this.taskWrapper = document.getElementById('listenning-task-field');
        this.playButton = document.getElementById('listen-button');
        this.answerInput = document.getElementById('listenning-answer');
        this.playButton.addEventListener('click', () => this.speakWord());
    }

    init() {
        super.init();
        this.answerInput.value = '';
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
    }

    speakWord() {
        this.speech = new SpeechSynthesisUtterance(this.word);
        this.voices = this.synth.getVoices();
        this.speech.voice = this.voices[4];
        this.synth.speak(this.speech);
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (answer === this.word) {
            return true;
        } else return false;
    }
}

export const Listening = new ListeningTask();