

//1. 
//Subtracted value of First Element and Last Element
let ages = [3,9,23,64,2,8,28,93]

function agesSubtracted([]){
    return (ages[ages.length - 1]) - Number(ages[0])
}    
console.log(agesSubtracted(ages));

//Pushed a Number to end of Array
ages.push(25);

console.log(agesSubtracted(ages));

//Calculated the average age
let averageAge = 0;
for( let i=0; i< ages.length; i++){
    averageAge += Number(ages[i]) / ages. length;
}

console.log(averageAge)



//2.
//Calculate average number of letters
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

let lengthOfNames = names.map(function(element) {
    return element.length;
}) .reduce(function(accumulator, currentValue){
    return accumulator + currentValue
});
console.log(lengthOfNames/names.length)
//concatenated names together
let sumOfNames = names.reduce(function(accumulator, currentValue){
    return accumulator + " "+ currentValue;
});
console.log(sumOfNames)



//5.
//Add length of each name
let nameLengths = names.map(function(element) {
    return element.length;
});    

console.log(nameLengths)

//6.
//Calculate sum of all elements in array
let sum = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}); 
console.log(sum)

//7.
//Concatenate a word n number of times, thanks to Mindy for helping me out on this one!
function repeatWords(word, n){
  let result = ""
    for(var i=0; i<n; i++) {
        result = result.concat(word)
    }
    return result
}
let helloRepeated = repeatWords("na", 5)
console.log(helloRepeated)


//8.
//funtion that returns full name
function returnFullName(firstName, LastName){
    return firstName + " " + LastName
}
console.log(returnFullName("Sofia", "Navarro"));


//9.
//Is the Array more than 100
// I know this is probably not the most correct answer but after hours I'm keeping it simple, sorry :(
let numArray = [30,30,40]

let sumOfArray = numArray.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
});
if (sumOfArray > 100){
    console.log(true);
} else {
    console.log(false)
};


//10.
//Average of Array
function averageNum(moreNumbers){
    return moreNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})/moreNumbers.length}
console.log(averageNum([4,8,2]))


//11.
//Camparing Arrays
function compareAverages(yNum, xNum){
    let yNumAverage = yNum.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})/yNum.length
let xNumAverege = xNum.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})/xNum.length
    return yNumAverage > xNumAverege
}

console.log(compareAverages([4,30,3],[4,6,7]))


//12.
//Will I buy a Drink?
function willBuyDrink(isHotOutside, moneyInPocket){
    if ( isHotOutside == true  && (moneyInPocket > 10.5)) {
        return true;
    } else {
        return false
    }
};

console.log(willBuyDrink(false,80))

//13.
//Function that returns a to the b power
function myFuntion(a,b){
    return Math.pow(a,b)
}

console.log(myFuntion(2,2))
