const resetOption = document.getElementById('reset')
const userX = document.getElementById('choosex')
const userO = document.getElementById('chooseO')
const operations = document.querySelectorAll('button')

let userchoice1
let userchoice2
let currentChoice

userX.addEventListener('click' , e =>  {
    userchoice1 = 'x'
    userchoice2 = 'o'
    currentChoice = userchoice1
})
userO.addEventListener('click' , e =>  {
    userchoice1 = 'o'
    userchoice2 = 'x'
    currentChoice =  userchoice1
})
const checkGameWinner = (item) =>{
    
    flip()
}
function flip(){
    if (currentChoice === 'x'){
        currentChoice = 'o'
    }
    else {
        currentChoice = 'x'
    }

}

operations.forEach(operation => {
    operation.addEventListener('click' , checkGameWinner)
})
