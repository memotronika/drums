

for (var index = 0; index < document.querySelectorAll('.drum').length ; index++){
    document.querySelectorAll('button')[index].addEventListener("click", function(){
        var buttonInner=this.innerHTML;
        makeSound(buttonInner)
        drumAimation(buttonInner)
    })
}

document.addEventListener('keypress',function(event){
    makeSound(event.key)
    drumAimation(event.key)
})

 function makeSound(input) {
    switch (input) {
                case 'w':
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
            
                case 'a':
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;
    
                case 's':
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;

                case 'd':
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;
                case 'j':
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;
                case 'k':
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;
                case 'l':
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;

                default:
                    console.log()
                    break;
            } 
 }
 
           
function drumAimation(input){
    var active_key=document.querySelector('.'+input);
    active_key.classList.add('pressed');
    setTimeout(function(){
    active_key.classList.remove('pressed')    
    },150);
    
}