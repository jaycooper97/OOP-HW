//Number 3
var thisArr = [['cheez-its', 'chips', 42], ['sodium', 'ice', true]];



//Number 4
let thatArr = [
    ['Cornflakes', 'Raisin Brand'], ['Artichokes', 'Kiwis', false]
];
for(let i = 0; i < thatArr.length; i++){
    for(let j = 0; j < thatArr[i].length; j++){
        console.log(thatArr[i][j]);
    }
}


//Number 5
const anArr = [[['Cheetos', 'Oranges'], [42, 506, 2], ['Chocolate', 'Milk', false]]];



// Number 6
function myFunct(num1, num2){
   if(num1 > num2){
    return num1
   } else {
    return num2
   }
}
myFunct(20,450)



//Number 7A
function aFunct(str1, str2){
    if(str1 === str2){
        return 'These values are strictly equal';
    } else{
        return "These values aren't equal";
    }
}
console.log(40, 40);

//Two Unequal values
function aFunct(str1, str2){
    if(str1 === str2){
        return 'These values are strictly equal';
    } else{
        return "These values aren't equal";
    }
}
console.log(1000, 408);