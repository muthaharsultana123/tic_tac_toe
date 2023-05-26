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
function checkWinner() {
    let topLeft = document.getElementById('first').innerHTML
    let topMiddle = document.getElementById('second').innerHTML
    let topRight = document.getElementById('third').innerHTML
    let middleLeft = document.getElementById('third').innerHTML
    let middleMiddle = document.getElementById('third').innerHTML
    let middleRight = document.getElementById('third').innerHTML
    let bottomLeft = document.getElementById('third').innerHTML
    let bottomMiddle = document.getElementById('third').innerHTML
    let bottomRight = document.getElementById('third').innerHTML
    let winstatus = document.getElementById('winstatus').innerText
    if(topLeft ===  topMiddle === topRight){
        winstatus = `the winner is : ${topLeft}`
    }
    else if (middleLeft === middleMiddle === middleRight){
        winstatus = `the winner is : ${middleLeft}`
    }
    else if (bottomLeft === bottomMiddle === bottomRight){
        winstatus = `the winner is : ${bottomLeft}`
    }
    else if (topLeft === middleLeft === bottomLeft){
        winstatus = `the winner is : ${topLeft}`
    }
    else if (topMiddle === middleMiddle === bottomMiddle){
        winstatus = `the winner is :${topMiddle}`
    }
    else if (topRight === middleRight === bottomRight){
        winstatus = `the winner is : ${topRight}`
    }
    else if (topLeft === middleMiddle === bottomRight){
        winstatus = `the  winner  is: ${topLeft}`
    }
    else if (topRight === middleMiddle === bottomLeft){
        winstatus = `the winner is : ${topRight}`
    }
    console.log(winstatus)
    
}
const checkGameWinner = (item) =>{
    item.target.innerText = currentChoice
    flip()
    checkWinner()
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
