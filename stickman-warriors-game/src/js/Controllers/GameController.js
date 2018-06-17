class GameController {
    constructor(battleField, enemy, tasks) {
        this.battlefield = battleField;
        this.opponent = enemy;
        this.tasksList = tasks;
        this.task = null;
        this.activeAttack = false;
        this.startPage = document.getElementById('start-page');
        this.attackConfigPage = document.getElementById('attack-config-page');
        this.attackTypeWindow = document.getElementById('attack-type');
        this.taskTypeWindow = document.getElementById('task-type');
        this.attackButton = document.getElementById('attack-button');
        this.taskSection = document.getElementById('task-field');
        document.addEventListener('click', (e) => this.handleEvents(e));
        document.addEventListener('keydown', (e) => this.keyboardControl(e));
        
    }

    init(player, location) {
        this.level = 1;
        this.solvedTasks = 0;
        this.player = player;
        this.gameStatus = null;
        this.player.createHealthBar('player-health-bar');
        this.opponent.createHealthBar('opponent-health-bar');
        this.battlefield.init(location);
    }

    initGame() {
        this.createOpponent();
        this.battlefield.render(this.player, this.opponent);
    }

    handleEvents(e) {
        if (e.target.id === 'attack-button' && !this.activeAttack) {
            this.startAttack(e);
        } else if (e.target.id === 'next-game-button') {
            this.startNextRound();
        } else if (e.target.classList.contains('exit-button')) {
            this.exitToMenu(e);
        } else if (e.target.classList.contains('attack-type-item')) {
            this.selectAttackType(e)
        } else if (e.target.classList.contains('task-type-item')) {
            this.selectTaskType(e)
        } else if (e.target.id === 'check-result') {
            this.checkAnswer();
        }
    }

    keyboardControl(e) {
        if (e.keyCode === 13 && !this.taskSection.classList.contains('hidden')) {
            this.checkAnswer();
        }
    }

    startAttack (e) {
        this.attackConfigPage.classList.remove('hidden');
        e.target.classList.contains('attack-button-animation') ? e.target.classList.remove('attack-button-animation') : null;
    }

    startNextRound () {
        this.level++;
        this.initGame();
        this.battlefield.gameResultPage.classList.add('hidden');
        this.battlefield.winGameWindow.classList.add('hidden');
    }

    exitToMenu (e) {
        let resultWindow = `${this.gameStatus}GameWindow`;
        this.battlefield.gameResultPage.classList.add('hidden');
        this.battlefield[resultWindow].classList.add('hidden');
        this.battlefield.battlePage.classList.add('hidden');
        this.startPage.classList.remove('hidden');
        this.player.health = 100;
    }

    createOpponent() {
        this.opponent.level = this.level;
        this.opponent.generateName();
        this.opponent.generateLook();
    }

    selectAttackType(e) {
        this.attackType = e.target.id;
        this.attackTypeWindow.classList.add('hidden');
        this.taskTypeWindow.classList.remove('hidden');
    }

    selectTaskType(e) {
        this.attackConfigPage.classList.add('hidden');
        this.attackTypeWindow.classList.remove('hidden');
        this.taskTypeWindow.classList.add('hidden');
        this.task = this.tasksList[e.target.id];
        this.tasksList[e.target.id].init();
    }

    checkAnswer() {
        let result = this.task.checkResult();
        this.activeAttack = true;
        if (result) {
            this.solvedTasks++;
            this.player.attack(this.attackType);
            this.opponent.takeAttack(this.attackType);
            setTimeout(() => {
                this.task.correctAnswer();
            }, 400);
            setTimeout(() => {
                this.opponent.healthBar.render(this.opponent.health);
                this.activeAttack = false;
                this.checkVictory();
            }, 6000);
        } else {
            this.opponent.attack(this.attackType);
            this.player.takeAttack(this.attackType);
            setTimeout(() => {
                this.task.wrongAnswer();
            }, 400);
            setTimeout(() => {
                this.player.healthBar.render(this.player.health);
                this.activeAttack = false;
                this.checkLosing();
            }, 6000);
        }
    }

    checkVictory() {
        if (!this.opponent.health) {
            this.gameStatus = 'win';
            this.battlefield.showFinalWindow(this.gameStatus);
        }
    }

    checkLosing() {
        if (!this.player.health) {
            this.gameStatus = 'lose';
            this.battlefield.showFinalWindow(this.gameStatus, this.level, this.solvedTasks);
        }
    }
}

export default GameController;