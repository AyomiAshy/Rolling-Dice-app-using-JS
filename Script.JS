function rollDice(){
    const dicefaces=["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    //array to store dice faces
    let dice=document.getElementById("dice-face");
    //display the dice
    dice.innerText="🎲";
    setTimeout(()=>{//arrow function
        let randomNum=Math.floor(Math.random()*6)+1;
        dice.innerText=dicefaces[randomNum];
    },100);
}