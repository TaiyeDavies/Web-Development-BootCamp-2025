const p1 = {
    score: 0,
    button: document.querySelector('#addplayscore1'),
    display: document.getElementById('player1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#addplayscore2'),
    display: document.getElementById('player2')
}

const reset = document.querySelector('#reset');
let selectScore = document.querySelector('#score');
let isGameOver = false;
let winningScore = 3;

function updateScores(player, opponent){
    if(!isGameOver){
        if(player.score !== winningScore){
            player.display.innerText = ++player.score;
            if(player.score === winningScore) {
                isGameOver = true;
                player.button.disabled = true;
                opponent.button.disabled = true;
                player.display.classList.add('has-text-success');
                opponent.display.classList.add('has-text-danger');

            }
        }
    }
}
p1.button.addEventListener('click', function(){
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function(){
    updateScores(p2, p1);
})
const resetGame = () => {
    isGameOver = false;

    for(let p of [p1, p2]){
        p.score = 0;
        p.display.innerText = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success','has-text-danger');
    }
}

selectScore.addEventListener('change', function(){
    selectScore = parseInt(this.value);
    resetGame();
})

reset.addEventListener('click', resetGame)
