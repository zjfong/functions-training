function combineWords(word1, word2) {
    console.log(word1 + word2);
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'


function repeatPhrase(phrase, n) {
    for(i=0; i<n; i++){
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello

function toTheNthPower(number, power) {
    var x = number;
    for(i=0; i<power-1; i++){
        x=x*number;
    }
    console.log(x);
    return x;
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024


function areaOfACircle(radius) {
    var answer = (Math.PI * Math.pow(radius, 2));
    console.log(answer);
    return answer;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57


function pythagoreanTheorem(a, b) {
    cSquared = Math.pow(a,2) + Math.pow(b,2);
    var answer = (Math.sqrt(cSquared));
    console.log(answer);
    return answer;
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

function isXEvenlyDivisibleByY(x, y) {
    if(x%y === 0){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true

function countVowels(word) {
    var count = 0;
    var match = "aeiou";
    for(i=0; i<word.length; i++){
        for(j=0; j<match.length; j++){
          if(word[i] === match[j]){
            count++;
          }

        }
    }
    console.log(count);
    return count;
}

var result = countVowels("stealing");
console.log(result);
// displays 3


function findWdi(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'wdi'){
      console.log(true);
    }
  }
  return false;
}

findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false


function printTriangle(length) {
    var x="";
    for(i=0; i<length; i++){
        x=x+'*';
        console.log(x);
    }
}

printTriangle(3);
// displays
// *
// **
// ***



function printPyramid(length) {

    for(i=1; i<=length; i++){
        var x="";
        for(j=length-i; j>0; j--) {
        x=x+' ';
      }
        for(k=0; k<i; k++){
            x=x+'* ';

        }
        console.log(x);
    }
}

printPyramid(4);
