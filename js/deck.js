var suits = ["Diamonds","Spades","Hearts","Club"];
var value = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]

function shuffle(array) {
    var arr = array;
    for (let i = 0; i < arr.length * 2; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        let delIndex = arr.splice(rand, 1);
        arr.push(delIndex[0]);
    }
    return arr;
}




function deck(){
    let deck = []
    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for(let valueIdx = 0; valueIdx < value.length; valueIdx++){
            card = {
                suit:suits[suitIdx],
                value:value[valueIdx]
            }
            deck.push(card);
        }
    }
    return deck;
}

// var test = deck()
// var rando = Math.floor(Math.random() * 51)
// console.log(test[rando]);
// console.log(test[rando]["suit"]);
// console.log(test[rando]["value"]);

// console.log(Math.floor(Math.random() * 51))