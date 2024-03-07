(function (){
    'use script';
    console.log("reading js");

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const dealerHand = document.querySelector('#dealerHand');
    const playerHand = document.querySelector('#playerHand');
    const actionArea = document.querySelector('#action');
    const score = document.querySelector('#score');

    const gameData = {
    answer: [],
    values: []

    };

    function setAnswer(){
        const cards = ['images/clubs-a-1.png', 'images/clubs-2.png', 'images/clubs-3.png', 'images/clubs-4.png', 'images/clubs-5.png', 'images/clubs-6.png','images/clubs-7.png', 'images/clubs-8.png', 'images/clubs-9.png', 'images/clubs-10.png', 'images/clubs-j-0.png', 'images/clubs-q-0.png', 'images/clubs-k-0.png', 'images/spades-a-1.png', 'images/spades-2.png', 'images/spades-3.png', 'images/spades-4.png', 'images/spades-5.png', 'images/spades-6.png','images/spades-7.png', 'images/spades-8.png', 'images/spades-9.png', 'images/spades-10.png', 'images/spades-j-0.png', 'images/spades-q-0.png', 'images/spades-k-0.png', 'images/hearts-a-1.png', 'images/hearts-2.png', 'images/hearts-3.png', 'images/hearts-4.png', 'images/hearts-5.png', 'images/hearts-6.png','images/hearts-7.png', 'images/hearts-8.png', 'images/hearts-9.png', 'images/hearts-10.png', 'images/hearts-j-0.png', 'images/hearts-q-0.png', 'images/hearts-k-0.png', 'images/diamonds-a-1.png', 'images/diamonds-2.png', 'images/diamonds-3.png', 'images/diamonds-4.png', 'images/diamonds-5.png', 'images/diamonds-6.png','images/diamonds-7.png', 'images/diamonds-8.png', 'images/diamonds-9.png', 'images/diamonds-10.png', 'images/diamonds-j-0.png', 'images/diamonds-q-0.png', 'images/diamonds-k-0.png'];
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
        
        dealerHand.innerHTML = `<img src="${gameData.answer[0]}" alt="card"> <img src="${gameData.answer[2]}" alt="card"> <img src="${gameData.answer[4]}" alt="card">`;

        playerHand.innerHTML = `<img src="${gameData.answer[1]}" alt="card"> <img src="${gameData.answer[3]}" alt="card"> <img src="${gameData.answer[5]}" alt="card">`;
    });


})();