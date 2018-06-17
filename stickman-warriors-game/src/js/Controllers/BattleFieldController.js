class BattleFieldController {
    constructor(score) {
        this.score = score;
        this.battlePage = document.getElementById('battle-field');
        this.playerNameField = document.getElementById('player-name');
        this.opponentNameField = document.getElementById('opponent-name');
        this.levelField = document.getElementById('game-level');
        this.gameResultPage = document.getElementById('game-result-page'); 
        this.winGameWindow = document.getElementById('win-game-window');
        this.loseGameWindow = document.getElementById('lose-game-window');
        this.scoreContainer = document.getElementById('score-container');
        this.solvedTasksElement = document.getElementById('final-score-task');
        this.amountOfVictories = document.getElementById('number-of-victories');
    }

    init(locationId) {
        this.battlePage.className = 'battle-field';
        this.battlePage.classList.add(`${locationId}-location`);
    }

    render(player, opponent) {
        if (this.opponentFigure) {
            this.battlePage.removeChild(this.playerFigure);
            this.battlePage.removeChild(this.opponentFigure);
        };
        this.createPlayer(player);
        this.createEnemy(opponent);
    }

    createPlayer(player) {
        this.player = player;
        this.playerFigure = this.player.createFigure();
        this.playerFigure.classList.add('player-container');
        this.player.ball = document.createElement('div');
        this.player.ball.classList.add('throwableObj');
        this.playerNameField.textContent = this.player.name;
        this.playerFigure.appendChild(this.player.ball);
        this.battlePage.appendChild(this.playerFigure);
        this.player.renderHealthBar();
    }

    createEnemy(opponent) {
        this.opponent = opponent;
        this.opponent.health = 100;
        this.opponentFigure = this.opponent.createFigure();
        this.opponentFigure.classList.add('opponent-container');
        this.opponent.ball = document.createElement('div');
        this.opponent.ball.classList.add('throwableObj');
        this.opponentNameField.textContent = this.opponent.name;
        this.levelField.textContent = this.opponent.level;
        this.opponentFigure.appendChild(this.opponent.ball);
        this.battlePage.appendChild(this.opponentFigure);
        this.opponent.renderHealthBar();
    }

    showScoreWindow(level, solvedTasks) {
        this.solvedTasksElement.textContent = solvedTasks;
        this.amountOfVictories.textContent = level - 1;
        this.score.refreshScore({name: this.player.name, result: solvedTasks});
        this.score.showScore(this.scoreContainer);
    }

    showFinalWindow(result, level, solvedTasks) {
        setTimeout(() => {
            if (level) {
                this.showScoreWindow(level, solvedTasks);
            };
            this.gameResultPage.classList.remove('hidden');
            this[`${result}GameWindow`].classList.remove('hidden');
        }, 1000);
    }
}

export default BattleFieldController;