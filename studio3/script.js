(function (){
    'use script';
    console.log("reading js");

    const startGame = document.querySelector('#startgame');
    const dealerHand = document.querySelector('#dealerHand');
    const playerHand = document.querySelector('#playerHand');
    const dealerScore = document.querySelector('#dealerScore');
    const playerScore = document.querySelector('#playerScore');

    const gameData = {
    answer: [],
    values: [],
    score: [0,0]

    };

    function setAnswer(){
        const cards = ['images/clubs-a-1.png', 'images/clubs-2.png', 'images/clubs-3.png', 'images/clubs-4.png', 'images/clubs-5.png', 'images/clubs-6.png','images/clubs-7.png', 'images/clubs-8.png', 'images/clubs-9.png', 'images/clubs-10.png', 'images/clubs-j.png', 'images/clubs-q.png', 'images/clubs-k.png', 'images/spades-a-1.png', 'images/spades-2.png', 'images/spades-3.png', 'images/spades-4.png', 'images/spades-5.png', 'images/spades-6.png','images/spades-7.png', 'images/spades-8.png', 'images/spades-9.png', 'images/spades-10.png', 'images/spades-j.png', 'images/spades-q.png', 'images/spades-k.png', 'images/hearts-a-1.png', 'images/hearts-2.png', 'images/hearts-3.png', 'images/hearts-4.png', 'images/hearts-5.png', 'images/hearts-6.png','images/hearts-7.png', 'images/hearts-8.png', 'images/hearts-9.png', 'images/hearts-10.png', 'images/hearts-j.png', 'images/hearts-q.png', 'images/hearts-k.png', 'images/diamonds-a-1.png', 'images/diamonds-2.png', 'images/diamonds-3.png', 'images/diamonds-4.png', 'images/diamonds-5.png', 'images/diamonds-6.png','images/diamonds-7.png', 'images/diamonds-8.png', 'images/diamonds-9.png', 'images/diamonds-10.png', 'images/diamonds-j.png', 'images/diamonds-q.png', 'images/diamonds-k.png'];
        shuffleArray(cards);
        for( let i=0; i<6; i++){
            gameData.answer.push(cards.shift());
        }
    }

    /* This function uses an updated syntax for the fisher-yates method */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    setAnswer();

    function setValues() {
        for (const eachCard of gameData.answer){
            if (eachCard.charAt(eachCard.length - 5)== 'j' || eachCard.charAt(eachCard.length - 5)== 'q' || eachCard.charAt(eachCard.length - 5)== 'k') {
                gameData.values.push(eachCard.charAt(eachCard.length - 5));
            } else {
                gameData.values.push(parseInt(eachCard.charAt(eachCard.length - 5)));
            }
        }
    }

    setValues();
    console.log(gameData.values);

    startGame.addEventListener('click', function(event){
        event.preventDefault();
        
        dealerHand.innerHTML = `<img src="${gameData.answer[0]}" alt="card"> <img src="${gameData.answer[1]}" alt="card"> <img src="${gameData.answer[2]}" alt="card">`;

        playerHand.innerHTML = `<img src="${gameData.answer[3]}" alt="card"> <img src="${gameData.answer[4]}" alt="card"> <img src="${gameData.answer[5]}" alt="card">`;

        dealerScore.innerHTML += checkWinningConditionDealer();
        playerScore.innerHTML += checkWinningConditionPlayer();

        setTimeout(function(){
            document.querySelector('#overlay').className = "showing";
        }, 2000);
    });



    document.querySelector('.tryagain').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = "hidden";
        location.reload();
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.getElementById('overlay').className= "hidden";
        }
    })

    function checkWinningCondition(){
        const dScore = checkWinningConditionDealer();
        const pScore = checkWinningConditionPlayer();
        if (dScore > pScore) {
            document.querySelector('#announce').innerHTML += `<p>DEALER wins with ${dScore}</p>`;
        } else if (pScore > dScore) {
            document.querySelector('#announce').innerHTML += `<p>PLAYER wins with ${pScore}</p>`;
        } else {
            document.querySelector('#announce').innerHTML += `<p>DEALER and PLAYER tie with ${pScore}</p>`;
        }
    }

    checkWinningCondition();

    function checkWinningConditionDealer(){
        let gameDatasumD = 0;
        let temp = 0;
        for (let i=0; i<gameData.values.length-3; i++) {
            if (typeof gameData.values[i] === "number") {
                gameDatasumD = gameDatasumD + gameData.values[i];
            } else if (typeof gameData.values[i] === "string"){
                temp++;
            }
        }
        if (temp = 3) {
            
        }
        gameDatasumD = gameDatasumD % 10;

        console.log(gameDatasumD);
        return gameDatasumD;
    }

    function checkWinningConditionPlayer(){
        let gameDatasumP = 0;
        for (let i=3; i<gameData.values.length; i++) {
            if (typeof gameData.values[i] === "number") {
                gameDatasumP = gameDatasumP + gameData.values[i];
            }
        }
        gameDatasumP = gameDatasumP % 10;
        console.log(gameDatasumP);
        return gameDatasumP;
    }

    checkWinningConditionDealer();
    checkWinningConditionPlayer();




})();