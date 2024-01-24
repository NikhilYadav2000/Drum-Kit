// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked!");
// }
// document.querySelector("button").addEventListener("click", function(){
//     alert("Yeah, Daddy!!!");
// })

// Javascript object
// This is Contrsuctor Fucntion
// function BellBoy(name,experience,language){
//     this.name=name;
//     this.experience=experience;
//     this.language=language;
//      this.moveSuitcase=function(){
// alert("May i take your suitcase?");
// pickUpSuitcase();
// move();
// }
// }
// var bellBoy1 = new BellBoy("Timmy",19,ture,["French","English"]);
//

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var audio= new Audio("sounds/tom-1.mp3");
//     audio.play();
//   });
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        default: console.log("Not Correct Button")
          break;
      }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}