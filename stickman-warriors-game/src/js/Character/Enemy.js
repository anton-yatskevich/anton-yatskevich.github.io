import Character from "./Character";

class Enemy extends Character {
    constructor(names) {
        super();
        this.namesList = names;
    }

    generateName() {
        let adjectiveIndex = Math.floor(Math.random() * this.namesList.adjective.length);
        let nounIndex = Math.floor(Math.random() * this.namesList.noun.length);
        let nameIndex = Math.floor(Math.random() * this.namesList.name.length);
        this.name = `${this.namesList.adjective[adjectiveIndex]} ${this.namesList.noun[nounIndex]} ${this.namesList.name[nameIndex]}`;
    }

    generateLook() {
        this.faceId = Math.floor(Math.random() * 8);
        this.styleId = Math.floor(Math.random() * 8);
        this.gunId = Math.floor(Math.random() * 4);
    }
}

export default Enemy;