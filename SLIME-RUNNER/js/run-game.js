console.log("test");

const game = document.querySelector(".game")
const character = document.querySelector(".character")
const obstacle = document.querySelector(".obstacle")

const gameOver = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(obstacleLeft<20 && obstacleLeft>0 && characterTop>150){
        obstacle.style.animaton = "none"
        obstacle.style.display = "none"
        alert("U lost");
        window.location.reload()
    }
},10);


game.addEventListener("click", jump)


function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}