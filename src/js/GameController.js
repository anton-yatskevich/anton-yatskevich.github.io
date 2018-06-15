import * as Task from "./Tasks/bundleTasks";

class GameController {
    constructor(battleField, enemy) {
        this.battlefield = battleField;
        this.opponent = enemy;
        this.task = null;
        this.activeAttack = false;
        this.startPage = document.getElementById('start-page');
        this.attackConfigPage = document.getElementById('attack-config-page');
        this.attackTypeWindow = document.getElementById('attack-type');
        this.taskTypeWindow = document.getElementById('task-type');
        this.checkTaskSolutionBatton = document.getElementById('check-result');
        this.attackButton = document.getElementById('attack-button');
        

        this.battlefield.battlePage.addEventListener('click', (e) => this.addEventHandlers(e));
        this.attackTypeWindow.addEventListener('click', (e) => this.selectAttackType(e)); 
        this.taskTypeWindow.addEventListener('click', (e) => this.selectTaskType(e)); 
        this.checkTaskSolutionBatton.addEventListener('click', () => this.checkAnswer());
    }

    init(player, location) {
        this.level = 1;
        this.solvedTasks = 0;
        this.player = player;
        this.player.createHealthBar('player-health-bar');
        this.opponent.createHealthBar('opponent-health-bar');
        this.battlefield.init(location);
    }

    initGame() {
        this.createOpponent();
        this.battlefield.render(this.player, this.opponent);
    }

    addEventHandlers(e) {
        if (e.target.id === 'attack-button' && !this.activeAttack) {
            this.attackConfigPage.classList.remove('hidden');
        } else if (e.target.id === 'next-game-button') {
            this.level++;
            this.initGame();
            this.battlefield.gameResultPage.classList.add('hidden');
            this.battlefield.winGameWindow.classList.add('hidden');
        } else if (e.target.id === 'exit-to-menu-button') {
            this.battlefield.gameResultPage.classList.add('hidden');
            this.battlefield.winGameWindow.classList.add('hidden');
            this.battlefield.battlePage.classList.add('hidden');
            this.startPage.classList.remove('hidden');
        } else if (e.target.id === 'exit-to-menu') {
            this.battlefield.gameResultPage.classList.add('hidden');
            this.battlefield.loseGameWindow.classList.add('hidden');
            this.battlefield.battlePage.classList.add('hidden');
            this.startPage.classList.remove('hidden');
        }
    }

    createOpponent() {
        this.opponent.level = this.level;
        this.opponent.generateName();
        this.opponent.generateLook();
    }

    selectAttackType(e) {
        if (e.target.classList.contains('attack-type-item')) {
            this.attackType = e.target.id;
            this.attackTypeWindow.classList.add('hidden');
            this.taskTypeWindow.classList.remove('hidden');
        }
    }

    selectTaskType(e) {
        if(e.target.classList.contains('task-type-item')) {
            this.attackConfigPage.classList.add('hidden');
            this.attackTypeWindow.classList.remove('hidden');
            this.taskTypeWindow.classList.add('hidden');
            this.task = Task[e.target.id];
            Task[e.target.id].init();
        }
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
            }, 200);
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
            }, 200);
            setTimeout(() => {
                this.player.healthBar.render(this.player.health);
                this.activeAttack = false;
                this.checkLosing();
            }, 6000);
        }
    }

    checkVictory() {
        if (!this.opponent.health) {
            this.battlefield.showFinalWindow('win');
        }
    }

    checkLosing() {
        if (!this.player.health) {
            this.battlefield.showFinalWindow('lose', this.level, this.solvedTasks);
        }
    }
}

export default GameController;