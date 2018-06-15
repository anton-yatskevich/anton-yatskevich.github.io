import StartPage from "./StartPage";
import GameConfig from "./GameConfig";
import Character from "./Character";
import Enemy from "./Enemy";
import BattleField from "./BattleField";
import GameController from "./GameController";
import { CLASS_LIST } from "./Constants/ClassList";
import NAMES from "./Constants/NamesCollection";
import Score from "./Score";
import style from '../style/bundle.css';

const initApp = function () {
    StartPage.init();
}

const score = new Score();
const player = new Character();
const opponent = new Enemy(NAMES);
const battleField = new BattleField(score);
const gameController = new GameController(battleField, opponent);
const gameConfig = new GameConfig(player, CLASS_LIST, gameController);

gameConfig.init();

document.addEventListener("DOMContentLoaded", initApp());