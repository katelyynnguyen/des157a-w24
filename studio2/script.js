(function (){
    'use strict';
    console.log("reading js");

 //slider functionality

    document.querySelector('#slider').addEventListener('mouseover', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
    });

    document.querySelector('#slider').addEventListener('mousedown', function(){
        document.querySelector('.animate').style.animationPlayState = 'paused';
    });

    document.querySelector('#slider').addEventListener('mouseout', function(){
        document.querySelector('.animate').style.animationPlayState = 'running';
    });


// overlay functionality
//close button
document.querySelector('.close').addEventListener('click', function (event){
    event.preventDefault();
    document.querySelector('#overlay').className = "hidden";
});

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        document.getElementById('overlay').className="hidden";
    }
})
//broccoli button
    const openBtn = document.querySelector(".open1");

    openBtn.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#title').innerHTML = 'broccoli & tofu & beef bowl';
        document.querySelector('#picture').src = 'images/beef-broc.jpg';
        document.querySelector('#description').innerHTML = 'rating: 4/5';

    });
//chicken noodle button
    const secBtn = document.querySelector(".open2");

    secBtn.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#title').innerHTML = 'chicken noodle soup';
        document.querySelector('#picture').src = 'images/chickennoodle.jpg';
        document.querySelector('#description').innerHTML = 'rating: 5/5';
    });

// crinkle cookie button
const thirBtn = document.querySelector(".open3");

thirBtn.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    document.querySelector('#title').innerHTML = 'chocolate crinkle cookies';
    document.querySelector('#picture').src = 'images/crinkle.jpg';
    document.querySelector('#description').innerHTML = 'rating: 5/5';
});

//pepper lunch button

const fourBtn = document.querySelector(".open4");

fourBtn.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    document.querySelector('#title').innerHTML = 'beef teppanyaki';
    document.querySelector('#picture').src = 'images/pepperlunch.jpg';
    document.querySelector('#description').innerHTML = 'rating: 5/5';
});

//shrimp scampi button

const fiveBtn = document.querySelector(".open5");

fiveBtn.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#overlay').className = 'showing';
    document.querySelector('#title').innerHTML = 'shrimp scampi';
    document.querySelector('#picture').src = 'images/shrimpscampi.jpg';
    document.querySelector('#description').innerHTML = 'rating: 3.5/5';
});

})();