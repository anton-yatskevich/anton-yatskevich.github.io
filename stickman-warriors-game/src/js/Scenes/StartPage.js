class StartPage {
    constructor() {
        this.startPage = document.getElementById('start-page');
        this.menu = document.getElementById('main-menu');
        this.scoreSection = document.getElementById('main-score-section');
        this.scoreContainer = document.getElementById('main-score-container');
        this.aboutSection = document.getElementById('main-about-section');
        this.startPage.addEventListener('click', (e) => this.handleEvents(e));
    }

    init(score) {
        this.score = score;
    }

    handleEvents(e) {
        let id = e.target.id;
        switch (id) {
            case 'new-game':  
                this.startGame();
                break;
            case 'about': 
                this.showGameDescription();
                break;
            case 'score': 
                this.demonstrateScore();
                break;
        }

        if (e.target.classList.contains('close-button')) {
            this.menu.classList.remove('hidden');
            e.target.parentNode.classList.add('hidden');
        }
    }

    startGame() {
        this.selectLocationPage = document.getElementById('location-select');
        this.selectLocationPage.classList.remove('hidden');
        this.startPage.classList.add('hidden');
    }

    showGameDescription() {
        this.aboutSection.classList.remove('hidden');
        this.menu.classList.add('hidden');
    }

    demonstrateScore() {
        this.score.showScore(this.scoreContainer);
        this.scoreSection.classList.remove('hidden');
        this.menu.classList.add('hidden');
    }
}

export default new StartPage();