//Wait the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.getElementsByClassName("start-button")[0].addEventListener("click",function(){

    document.getElementsByClassName("game-area1")[0].style.display = "none";
    document.getElementsByClassName("game-area2")[0].style.display = "flex";
    console.log("Screen1 changes to screen2");
    
});

//document.getElementById("screen1").style.display = none;