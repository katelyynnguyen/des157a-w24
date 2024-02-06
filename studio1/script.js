(function(){
    'use script';
    console.log("reading js");

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('madlib');
    const formData = document.querySelectorAll("input[type=text]");

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        processformData(formData);
    });
    
    function processformData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;

        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);              
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }
        if (emptyfields.length > 0){
            showErrors(formData, emptyfields);
        } else {
            makeMadlib(words);            
        }
    };

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `please fill out this field ${errorId}`;
        madlibs.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    }




    function makeMadlib(words){
        const myText = `I’ve seen a lot of Instagram reels lately of matcha <span>${words[0]}</span>, so I’ve been very <span>${words[1]}</span>. I looked through my <span>${words[2]}</span> and took our any <span>${words[3]}</span> I may need. I started mixing my <span>${words[4]}</span> ingredients and discovered I ran out of <span>${5}</span> so I used <span>${words[6]}</span> instead. The batter looked really <span>${words[7]}</span>, but maybe that’s because I used <span>${words[8]}</span> eggs. I decided to bake it for <span>${words[9]}</span> minutes at <span>${words[10]}</span> degrees. When it’s done I think I’ll let my <span>${words[11]}</span> try it first.`;

        madlibs.innerHTML = myText; 
        
        for (const eachField of formData){
            eachField.value = '';
        }
    }

} )();