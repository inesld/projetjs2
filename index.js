// fct inverser
function rev(ch)         
{
return ch.split("").reverse().join("");
}
let chg="ines";
let chrev=rev(chg);
console.log(chrev);

//fct nb occ
function nbcount(ch,c)
{
let count=0;
for(i=0;i<ch.length;i++){
    if(ch[i]===c){

        count++;
    }
}
return count;
}
let ch='bonjour hello';
let c='o';
let nbocc=nbcount(ch,c);
console.log(nbocc);

//fct Capitalize
function capitalizeWords(ch1) {
    let words = ch1.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let ch1 = 'hello go my code';
let capitalizedCh1 = capitalizeWords(ch1);
console.log(capitalizedCh1);  

// fct max 
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// fct min
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

let numbers = [2, 5, 8, 6, 7, 4, 3, 9];
let max = findMax(numbers);
let min = findMin(numbers);

console.log("Max:", max); 
console.log("Min:", min);

// fct sum 

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

var array = [2, 5, 8, 6, 7, 4, 3, 9];
var total = sumArray(array);

console.log(total);

//fct filtre 

function filterTab(tab, condition) {
    return tab.filter(condition);
}
let tab = [1,5,2,8,9,6,3];

let impairs = filterTab(tab, num => num % 2 != 0);
console.log("Nombres impairs :", impairs);


// fct  factoriel
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = 5;
let fact=factorial(number)
console.log(fact); 

//fct prime

function isPrime(num) {
    if (num <= 1) {
        return false;  
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;  
}
let num=7;
let prime=isPrime(num) ;
console.log(prime);



//fct  fibonacci
function fibonacciSequence(n) {
    let sequence = [0, 1];  
    
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}


let numberOfTerms = 5;
let fibonacciSeries = fibonacciSequence(numberOfTerms);
console.log(`Suite de Fibonacci jusqu'à ${numberOfTerms} termes :`, fibonacciSeries);