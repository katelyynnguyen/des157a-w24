(function (){
    'use strict';
    console.log("reading js");

    // Selecting DOM elements
    const startGame = document.querySelector('#startgame');
    const dealerHand = document.querySelector('#dealerHand');
    const playerHand = document.querySelector('#playerHand');
    const dealerScore = document.querySelector('#dealerScore');
    const playerScore = document.querySelector('#playerScore');
    const btnSound = new Audio('sounds/button-3.mp3');
    const winSound = new Audio('sounds/applause6.mp3');

    // Game data object to store relevant information
    const gameData = {
    answer: [], // Stores card image URLs
    values: [], // Stores card values
    score: [0,0] // Stores scores for the dealer and player

    };
    // Function to set the initial answer by shuffling the cards
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
    // Set initial answer and values
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

    // Event listener for the 'Start Game' button
    startGame.addEventListener('click', function(event){
        event.preventDefault();
        
        // Display dealer and player hands
        dealerHand.innerHTML += `
        <div id="dCard">
            <div><img src="${gameData.answer[0]}" alt="card"></div>  
            <div><img src="${gameData.answer[1]}" alt="card"></div>
            <div><img src="${gameData.answer[2]}" alt="card"></div> 
        </div>`;
        
        playerHand.innerHTML += `        
        <div id="pCard">
            <div><img src="${gameData.answer[3]}" alt="card"></div>  
            <div><img src="${gameData.answer[4]}" alt="card"></div>
            <div><img src="${gameData.answer[5]}" alt="card"></div> 
        </div>`;

        // Update scores and display results
        dealerScore.innerHTML += `<br>${gameData.score[0]}`;
        playerScore.innerHTML += `<br>${gameData.score[1]}`;

        // Show overlay after 2 seconds
        setTimeout(function(){
            document.querySelector('#overlay').className = "showing";
            winSound.play();
        }, 2000);


    });

    startGame.addEventListener('mousedown', function(){
        // Button sound effect
        btnSound.play();
    })


    // Event listener for the 'Try Again' button
    document.querySelector('.tryagain').addEventListener('click', function(event){
        event.preventDefault();
        // Hide overlay and reload the page
        document.querySelector('#overlay').className = "hidden";
        location.reload();
    });

    // Event listener for the 'Escape' key
    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            // Hide overlay when 'Escape' key is pressed
            document.getElementById('overlay').className= "hidden";
        }
    })

    // Function to check winning conditions and update the announcement
    function checkWinningCondition(){
        addUpScores()
        if (gameData.score[0] > gameData.score[1]) {
            if (gameData.score[0] === 100) {
                document.querySelector('#announce').innerHTML += `<h2 id="pWin">JACKPOT</h2><p>DEALER hit the jackpot</p>`;
            } else {
                document.querySelector('#announce').innerHTML += `<h2 id="dWin">LOSER:</h2><p>DEALER wins with ${gameData.score[0]}</p>`;
            }
        } else if (gameData.score[1] > gameData.score[0]) {
            if (gameData.score[1] === 100) {
                document.querySelector('#announce').innerHTML += `<h2 id="pWin">JACKPOT</h2><p>PLAYER hit the jackpot</p>`;
            } else {
                document.querySelector('#announce').innerHTML += `<h2 id="pWin">WINNER:</h2><p>PLAYER wins with ${gameData.score[1]}</p>`;                
            }

        } else { 
            document.querySelector('#announce').innerHTML += `<h2 id="tie">TIE:</h2><p>DEALER and PLAYER tie with ${gameData.score[1]}</p>`;
        }
    }

    checkWinningCondition(); // Call the checkWinningCondition function

    // Function to add up scores for both the dealer and player
    function addUpScores(){
        let temp = 0;
        let gameDatasumD = 0;
        let gameDatasumP = 0;
        for (let i=0; i<gameData.values.length; i++) {
            if (i < 3){
                if (typeof gameData.values[i] === "number") {
                    gameDatasumD = gameDatasumD + gameData.values[i];
                } else if (typeof gameData.values[i] === "string"){
                    temp++;
                }

                if(temp==3 ){
                    gameDatasumD = 100;
                }
            gameData.score[0] = gameDatasumD % 10;
            } else {
                temp = 0;
                if (typeof gameData.values[i] === "number") {
                    gameDatasumP = gameDatasumP + gameData.values[i];
                } else if (typeof gameData.values[i] === "string"){
                    temp++;
                }

                if(temp==3 ){
                    gameDatasumP = 100;
                }
                gameData.score[1] = gameDatasumP % 10;
            }
            
        }
    }

})();