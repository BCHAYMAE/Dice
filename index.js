const btn = document.getElementById("playnow");
const dice = document.getElementById("dice");
const dicee = document.getElementById("dicee");
const refresh = document.getElementById("refresh");




const image = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
]

btn.addEventListener("click", () => {
    let interval;
    let counter = 0;


    interval = setInterval(() => {
        const random1 = Math.floor(Math.random() * 6);
        const random2 = Math.floor(Math.random() * 6);

        dice.src = image[random1];
        dicee.src = image[random2];
        counter ++;

        if (counter >= 9) {
            clearInterval(interval);
        }
    },100);
})

refresh.addEventListener("click", () =>{
    location.reload();
})