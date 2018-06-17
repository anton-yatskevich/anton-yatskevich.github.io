class GameConfig {
    constructor(player, classes, gameController) {
        this.player = player;
        this.classList = classes;
        this.GameController = gameController;
        this.selectLocationPage = document.getElementById('location-select');
        this.playerConfigPage = document.getElementById('config-page');
        this.faceContainer = document.getElementById('face-container');
        this.styleContainer = document.getElementById('style-container');
        this.gunContainer = document.getElementById('gun-container');
        this.playerFigure = document.getElementById('player-figure');
        this.nameInput = document.getElementById('player-name-input');
        document.addEventListener('click', (e) => this.changeConfig(e));
    }

    init() {
        this.createPlayerConfigPage();
    }

    selectLocation(e) {
        this.locationId = e.target.id;
        this.showPlayerConfigPage();
    }

    showPlayerConfigPage() {
        this.playerConfigPage.classList.remove('hidden');
        this.selectLocationPage.classList.add('hidden');    
    }

    createPlayerConfigPage() {
        this.createFaceItems();
        this.createStyleItems();
        this.createGunItems();    
        this.renderPlayerFigure();
    }

    createFaceItems() {
        const faceList = document.createElement('div');
        faceList.classList.add('config-section');
        this.classList.faces.forEach((item, index) => {
            let face = document.createElement('div');
            face.classList.add('config-item-image', item);
            face.dataset.itemId = index;
            face.dataset.itemType = 'face';
            faceList.appendChild(face);
        });
        this.faceContainer.appendChild(faceList);
    }

    createStyleItems() {
        const styleList = document.createElement('div');
        styleList.classList.add('config-section');
        this.classList.hairstyles.forEach((item, index) => {
            let style = document.createElement('div');
            style.classList.add('config-item-image', item);
            style.dataset.itemId = index;
            style.dataset.itemType = 'style';
            styleList.appendChild(style);
        });
        this.styleContainer.appendChild(styleList);
    }

    createGunItems() {
        const gunList = document.createElement('div');
        gunList.classList.add('config-section');
        this.classList.guns.forEach((item, index) => {
            let gun = document.createElement('div');
            gun.classList.add('config-item-image', item);
            gun.dataset.itemId = index;
            gun.dataset.itemType = 'gun';
            gunList.appendChild(gun);
        });
        this.gunContainer.appendChild(gunList);
    }

    renderPlayerFigure() {
        this.playerFigure.innerHTML = '';
        let figure = this.player.createFigure();
        figure.classList.add('player-figure-demo');
        this.playerFigure.appendChild(figure);
    }

    changeConfig(e) {
        let configType = e.target.dataset.itemType;
        if (e.target.id === 'submit-button') {
            this.compileConfig();
        } else if (e.target.classList.contains('location-item')) {
            this.selectLocation(e);
        }
        switch (configType) {
            case 'face':  
                this.player.faceId = e.target.dataset.itemId;
                this.renderPlayerFigure()
                break;
            case 'style': 
                this.player.styleId = e.target.dataset.itemId;
                this.renderPlayerFigure()
                break;
            case 'gun': 
                this.player.gunId = e.target.dataset.itemId;
                this.renderPlayerFigure()
                break;
        }
    }

    compileConfig() {
        if (this.nameInput.value) {
            this.player.name = this.nameInput.value;
            this.playerConfigPage.classList.add('hidden');            
            this.GameController.init(this.player, this.locationId);
            this.GameController.initGame();
            this.nameInput.value = "";
        } else {
            this.nameInput.classList.add('empty-input')
        }
    }
}

export default GameConfig; 