import { VOCABULARY } from "../Constants/Vocabulary";

class Task {
    constructor() {
        this.vocabulary = VOCABULARY;
        this.taskSection = document.getElementById('task-field');
        this.correctAnswerField = document.getElementById('correct-answer');
        this.wrongAnswerField = document.getElementById('wrong-answer');
        this.correctAnswerSound = document.getElementById('correct-answer-sound');
        this.wrongAnswerSound = document.getElementById('wrong-answer-sound');
    }

    init() {
        this.taskSection.classList.remove('hidden');
        this.taskWrapper.classList.remove('hidden');
    }
    
    shuffleArray(array) {
        let i = array.length - 1
        for (i; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    correctAnswer() {
        this.taskSection.classList.add('hidden');
        this.taskWrapper.classList.add('hidden');
        this.correctAnswerField.classList.remove('hidden');
        this.correctAnswerSound.play();
        setTimeout(() => {
            this.correctAnswerField.classList.add('hidden');
        }, 1000);
    }

    wrongAnswer() {
        this.taskSection.classList.add('hidden');
        this.taskWrapper.classList.add('hidden');
        this.wrongAnswerField.classList.remove('hidden');
        this.wrongAnswerSound.play();
        setTimeout(() => {
            this.wrongAnswerField.classList.add('hidden');
        }, 1000);
    }
}

export default Task;