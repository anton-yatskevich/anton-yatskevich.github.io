class Score {
    constructor() {
    }

    refreshScore(player) {
        if (!localStorage['stickman-wars']) {
            localStorage['stickman-wars'] = JSON.stringify([player]);
        } else {
            let score = JSON.parse(localStorage['stickman-wars']);
            score.push(player);
            score.sort((a,b) => b.result - a.result);
            score.length > 10 ? score.pop() : score;
            localStorage['stickman-wars'] = JSON.stringify(score);
        }
    }

    showScore(wrapper) {
        wrapper.innerHTML = '';
        if (!localStorage['stickman-wars']) {
            wrapper.textContent = "Score list is empty..."
        } else {
            const scoreList = document.createElement('ol');
            const topScore = JSON.parse(localStorage['stickman-wars']);
            topScore.forEach(item => this.createScoreItem (item, scoreList));
            wrapper.appendChild(scoreList);
        }
    }

    createScoreItem(item, list) {
        const scoreItem = document.createElement('li');
        const itemWrapper = document.createElement('div');
        const name = document.createElement('div');
        const score = document.createElement('div');
        itemWrapper.classList.add('score-item');
        name.textContent = item.name;
        score.textContent = item.result;
        itemWrapper.appendChild(name);
        itemWrapper.appendChild(score);
        scoreItem.appendChild(itemWrapper);
        list.appendChild(scoreItem);
    }
}

export default Score;