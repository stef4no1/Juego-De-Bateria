let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('assets/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('assets/sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('assets/sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('assets/sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kick = new Audio('assets/sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(key);
    }
}


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);

}