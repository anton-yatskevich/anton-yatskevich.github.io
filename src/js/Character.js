import HealthBar from "./HealthBar";

class Character {
    constructor() {
        this.faceId = 0;
        this.styleId = 0;
        this.gunId = 0;
        this.health = 100;
        this.gunShotSound = document.getElementById('gun-shot-sound');
        this.throwSound = document.getElementById('throw-sound');
    }

    createFigure () {
        this.body = document.createElement('div');
        this.head = document.createElement('div');
        this.face = document.createElement('div');
        this.hair = document.createElement('div');
        this.gun = document.createElement('div');

        this.head.classList.add('head');
        this.face.classList.add('face', `face-${this.faceId}`);
        this.hair.classList.add('hairstyle', `hairstyle-${this.styleId}`);
        this.gun.classList.add('body-with-gun', `body-${this.gunId}`);

        this.head.appendChild(this.face);
        this.head.appendChild(this.hair);
        this.body.appendChild(this.head);
        this.body.appendChild(this.gun);
        
        return this.body;
    }

    createHealthBar(className) {
        if (!this.healthBar) {
            this.healthBar = new HealthBar(className);
        } else {
            this.renderHealthBar();
        }
    }

    renderHealthBar() {
        this.healthBar.render(this.health);
    }

    attack(attackType) {
        if (attackType === 'shot') {
            this.gun.className = 'body-shooter';
            this.head.className = 'head';
            this.gun.classList.add(`body-${this.gunId}`);
            setTimeout(() => {
                this.gunShotSound.play();
                this.gun.classList.add('body-attack-shot-anim');
                this.head.classList.add('head-attack-shot-anim');
            }, 3000)
        } else if (attackType === 'throw') {
            this.gun.className = 'body-free-hands';
            this.head.className = 'head';
            this.ball.className = 'throwableObj';
            setTimeout(() => {
                this.throwSound.play();
                this.gun.classList.add('body-attack-throw-anim');
                this.head.classList.add('head-attack-throw-anim');
                this.ball.classList.add('potato-correct-throw-anim');
            }, 3000)
        }
    }

    takeAttack(attackType) {
        this.health = this.health - 25;
        if (attackType === 'shot') {
            this.gun.className = 'body-free-hands';
            this.head.className = 'head';
            setTimeout(() => {
                if (this.health) {
                    this.gun.classList.add('body-opponent-shot-anim');
                    this.head.classList.add('head-opponent-shot-anim');
                } else {
                    this.gun.classList.add('body-opponent-final-shot');
                    this.head.classList.add('head-opponent-final-shot');
                }
            }, 3000);
        } else if (attackType === 'throw') {
            this.gun.className = 'body-free-hands';
            this.head.className = 'head';
            setTimeout(() => {
                if (this.health) {
                    this.gun.classList.add('body-opponent-throw-anim');
                    this.head.classList.add('head-opponent-throw-anim');
                } else {
                    this.gun.classList.add('body-opponent-final-throw');
                    this.head.classList.add('head-opponent-final-throw');
                }
            }, 3000);
        }
    }
}

export default Character;