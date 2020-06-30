//"shuffle" function: GOOD
// function shuffle() {
//     var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let i = 0; i < arr.length * 2; i++) {
//         let rand = Math.floor(Math.random() * arr.length - 1);
//         let delIndex = arr.splice(rand, 1);
//         arr.push(delIndex[0]);
//     }
//     return arr;
// }



// console.log(shuffle());

//-----------------------------------------------------------------------------------------------------------------------


function deck() {
    /* 1.Make an empty array to put our 
    suits, value, and numbers in */
    var deck = []
    var suits = ["Diamonds", "Spades", "Hearts", "Club"];
    var value = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    var num = [11,2,3,4,5,6,7,8,9,10,10,10,10]
    /* 2.Make a nested for loop to put our card info 
    into key value pairs and push it into the deck*/
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < value.length; valueIdx++) {
            card = {
                suit: suits[suitIdx],
                value: value[valueIdx],
                number: num[valueIdx]
            }
            deck.push(card);
        }
    }
    /*3.Make a for loop that takes out a random single
    key value pair and re-adds it to the deck*/
    for (let i = 0; i < deck.length * 2; i++) {
        let rand = Math.floor(Math.random() * deck.length - 1);
        let delIndex = deck.splice(rand, 1);
        deck.push(delIndex[0]);
    }
    return deck;
}
var testDeck = [];

// console.log(testDeck);

//---------------------------------------------------------------------------------

//"shuffle" function: GOOD

// function shuffle(array) {
//     /*3.Make a for loop that takes out a random single
//     key value pair and re-adds it to the deck*/
//     var arr = array
//     for (let i = 0; i < arr.length * 2; i++) {
//         let rand = Math.floor(Math.random() * arr.length - 1);
//         let delIndex = arr.splice(rand, 1);
//         arr.push(delIndex[0]);
//     }
//     return arr;
// }



/*
1. Do an ace check in the hand everytime we draw and put the card in the hand
2. Initially treat the ace as an eleven
3. If the card we draw will make the hand go over 21 and we have an ace, subtract 10 to the total hand value
4. If we have an ace and the next card will make us hit 21 exactly or below 21, don't do anything

NOT A GOOD IDEA. RESOLVED WITH A BETTER IDEA
*/ 

class Player {
    constructor() {
        this.hand = [];
        this.suit = [];
    }
    total() {
        let hand = this.hand;
        const add = (a, b) => a + b;
        if(hand.length > 0){
            let total = hand.reduce(add);
            return total;
        }
        
    }
    hit(deckArray) {
    let hand = this.hand;
    let handSuit  = this.suit;
    let deck = deckArray;
    let drawnCard = deckArray.shift();

    const ace = (ele) => ele == 11;
    let aceIdx = hand.findIndex(ace);
    let acecheck = hand.indexOf(11);

    if (hand.includes(11) && drawnCard["number"] + this.total() > 21) {
        hand[aceIdx] = 1;
        hand.push(drawnCard["number"]);
        handSuit.push(drawnCard["value"]);
        console.log("Yahoo!");
        return hand;
    } else if (acecheck === -1 && drawnCard["number"] == 11 && drawnCard["number"] + this.total() > 21){
        drawnCard["number"] = 1;
        hand.push(drawnCard["number"]);
        handSuit.push(drawnCard["value"]);
        console.log("Yay! :)");
        return hand;
    } else { 
        hand.push(drawnCard["number"]);
        handSuit.push(drawnCard["value"]);
        console.log("Meh");
        return hand;
    }
    // handArray.push(drawnCard["number"]);
    }   

}

let kevin = new Player();
let house = new Player();







/*

DO THIS TO THE DRAW CARD/ HIT FUNCTION
1. Make condition
const find = (ele) => ele == 9;
2. Make array
var testArray = [2, 5, 3, 7, 6, 9];
3. Plug "find" condition in findIndex
testArray.findIndex(find);
// result: 5
*/

// function rng(number,func1,func2){
//     /*
//     Pick number from 1 to 10. 
//     If number is within a range of numbers (Ex: 1 to 3), execute function
//     */
//     let safetyNum = 16;
//     let randomNum = Math.floor((Math.random()*10)+1);
    // if(randomnum <= number){
    //     func1;
    //     console.log(num);
    //     console.log("Lower");
    // }
//     else{
//         func2;
//         console.log(num);
//         console.log("Higher");
//     }
// }

function newGame(array){
    array.splice(0,array.length);
    array.unshift(...deck());
    kevin.hand = [];
    house.hand = [];
    for (let i = 0; i < 2; i++) {
        kevin.hit(array);
        house.hit(array);
    }
}




function rng(number, func1, func2) {
    /*
    1. The AI will keep on hitting until it hits or goes over the safety number
    2. Once the AI meets the safety number condition, it will make a decision whether or not to hit or not with a random num
    3. Difficulty levels will be potentially based on the hit/stay ratio 
    */
    let safetyNum = 16;
    let randomNum = Math.floor((Math.random() * 10) + 1);
    if (house.total() < 16) {
        func1;
        console.log(num);
    }else if(house.total() >= 16 && house.total() < 21){
        if (randomnum <= number) {
            func1;
            console.log(num);
            console.log("Lower");
        } else {
            func2;
            console.log(num);
            console.log("Lower");
        }
    }
    
}