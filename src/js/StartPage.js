// import GameConfig from "./GameConfig"

class StartPage {
    constructor() {
        this.startPage = document.getElementById('start-page');
        this.menu = document.getElementById('main-menu');
        this.menu.addEventListener('click', (e) => this.addEventHandler(e));
    }

    init() {
        this.startPage.classList.remove('hidden');
    }

    addEventHandler(e) {
        let id = e.target.id;
        switch (id) {
            case 'new-game':  
                this.startGame();
                break;
            case 'how-to-play': 
                this.showGameDescription();
                break;
            case 'score': 
                this.showScore();
                break;
            case 'sound': 
                this.switchSound(e.target);
                break;
        }

    }

    startGame() {
        this.selectLocationPage = document.getElementById('location-select');
        this.selectLocationPage.classList.remove('hidden');
        this.startPage.classList.add('hidden');
    }

    showGameDescription() {
        console.log('showD')
    }

    showScore() {
        console.log('showScore')
    }

    switchSound(target) {
        if (target.classList.contains('sound-on')) {
            target.classList.remove('sound-on');
            target.textContent = 'sound: off';
        } else {
            target.textContent = 'sound: on';
            target.classList.add('sound-on');
        }
    }
}

export default new StartPage();