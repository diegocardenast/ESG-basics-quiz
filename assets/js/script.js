//Loads the second screen in the DOM to select the number of questions to play
document.getElementsByClassName("start-button")[0].addEventListener("click",function(){

    document.getElementsByClassName("game-area1")[0].style.display = "none";
    document.getElementsByClassName("game-area2")[0].style.display = "flex";
    console.log("Screen1 changes to screen2");

});

//Checks the question amount. Takes the question amount and hides the second screen
document.getElementsByClassName("go-button")[0].addEventListener("click",function(){

    let numQuestions;
    
    numQuestions = parseInt(document.getElementById("quests").value);
    
    if(numQuestions===5){
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
    }else if(numQuestions===10){
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
    }else if(numQuestions===15){
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
    }else if(numQuestions===20){
        console.log(numQuestions);
        document.getElementsByClassName("game-area2")[0].style.display = "none";
        console.log("screen2 changes to first question");
    }else{
        alert(`Please select a valid number`)
    }

    
});