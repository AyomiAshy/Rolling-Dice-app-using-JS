function rollDice(){
    const dicefaces=["🎲", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];
    //array to store dice faces
    let dice=document.getElementById("dice-face");
    //display the dice
    dice.innerText="🎲";
    setTimeout(()=>{//arrow function
        let randomNum=Math.floor(Math.random()*6)+1;
        dice.innerText=dicefaces[randomNum];
    },100);
}