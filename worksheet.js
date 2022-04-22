
// let daysOfWeek = 'Monday';
// console.log(daysOfWeek);

// daysOfWeek = 'Friday';
// console.log(`I cant wait for ${daysOfWeek}`);

// let animalInput = prompt('What is your favorite animal?');
// let colorInput = prompt('What is your favorite color?');
// let colorAnimal = colorInput + '' + animalInput;
// let colorAnimalInput = (`I've never seen a ${colorAnimal}`);
// console.log(colorAnimalInput);

//eggs and grits
//reuben sandwhich
//curry shrimp

//Conditionals

// let timeOfDay = 1300;
// let meal = '';
// if (timeOfDay < 1200){
//     meal = 'Breakfest'
// }
// else if (timeOfDay >= 1200 && timeOfDay <= 1700){
//     meal = 'Lunch'
// }
// else if (timeOfDay > 1700){
//     meal = 'Dinner'
// }
// console.log(meal)

// let randomNumber = Math.floor(Math.random() * 11);

// if (randomNumber >= 0 && randomNumber >= 2 ){
//     console.log('Beatles')
// }
// else if (randomNumber >= 3 && randomNumber <= 5){
//     console.log('Stones')
// }
// else if (randomNumber >= 6 && randomNumber <= 8){
//     console.log('Floyd')
// }
// else if (randomNumber >= 9 && randomNumber <= 10){
//     console.log('Hendrix')
// }

// For Loops

// for(let i = 0; i < 7; i++){
//     console.log('JavaSCript is cool!')
// }

// for(let i = 0; i < 11; i++){
// console.log(i)
// }
// for(let i = 0; i < 5; i++){
// console.log('hello')
// console.log('goodbye')
// }

// While Loops

// let instructerIsAwesome = true
// while(instructerIsAwesome ){
//     console.log('While Loop')
//     instructerIsAwesome = false
// }

//Functions

// function favorteMovie(){
//     let favoriteMovie = 'The Color Purple';
//     console.log(favoriteMovie);
// }

// favorteMovie()

// function askFavoriteBand(){
//     let response = prompt('Whats your favorite band?');
//     return response;
// }
// let favoriteBand = askFavoriteBand();
// console.log(favoriteBand);

// function concertDisplay(musicalAct){
//     let myStreet = prompt('What street do you live on?');
//     console.log(`It would be great if ${musicalAct} played on ${myStreet}`);
// }
// concertDisplay(favoriteBand)

//Arrays

// let desktopItems = ['Pen', 'Notepad', 'Laptop'];
// let item = desktopItems[1];
// console.log(item);

// desktopItems.push('Infinity Gaunlet');
// for(let i = 0; i < desktopItems.length; i++){
//     console.log(desktopItems[i]);
// }

// Boss Fight 
let magicNumber = 50
let guess = 0
while(guess == false){
    let response = prompt('What is the magic number?')
        if (response < magicNumber){
            console.log('Too low!');
        }
        else if (response > magicNumber){
            console.log('Too High!');
        }
        else if (response <= 49 && response >= 40){
            console.log('Getting Warmer!');
        }
        else if (response <= 59 && response >= 51){
            console.log('Getting Warmer!');
        }
        else {
            response == magicNumber;
            console.log('Congrats!')
            guess = true;
        }
}

