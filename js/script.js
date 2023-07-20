let playerOneInput = document.querySelector(".playerOneInput")
let playerOneSubmit = document.querySelector(".playerOneSubmit")
let boxOne = document.querySelector(".boxOne")

let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoSubmit = document.querySelector(".playerTwoSubmit")
let boxTwo = document.querySelector(".boxTwo")

let result = document.querySelector(".result")
let playerOneName = document.querySelector (".playerOneName")
let playerTwoName = document.querySelector (".playerTwoName")

var chance = 3;

var chanceCount = document.querySelector(".chanceCount")

var boxThree = document.querySelector(".boxThree")

playerOneSubmit.addEventListener("click" , function() {
    
    
    if (playerOneInput.value > 0 && playerOneInput.value <= 10){
        console.log(playerOneInput.value) ;
        boxOne.style.display = "none" ;
        boxTwo.style.display = "block" ;
        result.style.display = "none"
    }
    else{
            result.style.display = "inline-block"
            result.innerHTML = playerOneName.value +  "- Please Enter Your Number Within { 1 - 10 }" ;
            console.log("you looser")
    }
})


playerTwoSubmit.addEventListener("click" , function() {
    
    if (playerTwoInput.value > 0 && playerTwoInput.value <= 10) {
        if (playerOneInput.value == playerTwoInput.value){
                result.style.display = "inline-block"
                result.innerHTML = playerTwoName.value + " - Is Winner & Player Two Win"
        }
        else{
            chance--;
            chanceCount.innerHTML = "You Have Now " + chance + " Times to Guess"
            result.style.display = "inline-block"
                result.innerHTML = playerOneName.value + " - Is Winner & Player One Win"
            
            if (chance == 0){
                boxThree.style.display = "inline-block"
                result.style.display = "inline-block"
                result.innerHTML = playerOneName.value + " - Is Winner & Player One Win"
                console.log("inter the valu4e")
                console.log(chance)
                boxOne.style.display = "none"
                boxTwo.style.display = "none"
            }
        }
    }
    else{
            result.style.display = "inline-block"
            result.innerHTML = "Guess the  Number Within { 1 - 10 }"
    }
                      
})

