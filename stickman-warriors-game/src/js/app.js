import StartPage from "./Scenes/StartPage";
import GameConfig from "./Controllers/GameConfig";
import Character from "./Character/Character";
import Enemy from "./Character/Enemy";
import BattleFieldController from "./Controllers/BattleFieldController";
import GameController from "./Controllers/GameController";
import { CLASS_LIST } from "./Constants/characterClassList";
import NAMES from "./Constants/namesCollection";
import Score from "./Scenes/Score";
import * as Tasks from "./Tasks/bundleTasks";
import style from '../style/bundle.css';


const score = new Score();
const player = new Character();
const opponent = new Enemy(NAMES);
const battleField = new BattleFieldController(score);
const gameController = new GameController(battleField, opponent, Tasks);
const gameConfig = new GameConfig(player, CLASS_LIST, gameController);

gameConfig.init();

const initApp = function () {
    StartPage.init(score);
}

document.addEventListener("DOMContentLoaded", initApp());