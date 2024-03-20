(function(){
    'use strict';
    console.log("reading js");

        const startBtn = document.querySelector('#start');

        startBtn.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#instructions').className = "showing";
        })
})();