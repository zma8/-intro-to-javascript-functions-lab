const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

function isAdult(age){
    if (age>=18) return 'Adult';
    else {
    return 'Minor';
  }
}

console.log('Exercise 2 Result:', isAdult(21));

function isCharAVowel(vowel){
if (vowel=='a'||vowel=='e'||vowel=='o'||vowel=='i'||vowel=='u'||vowel=='y'){
    return true;
}
else { return false;}
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

function generateEmail(name,domain){
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

function greetUser(name,time){
    return `"good ${time} , ${name}!"`

}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

function maxOfThree(num1,num2,num3){
    if(num1>num2){
       if (num1>num3) return num1;
       else return num3;
    } 
    else {
       if (num2>num3) return num2;
       else return num3;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function calculateTip(bill,percentage){
   let tip=(bill*percentage)/100;
    return tip;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

function convertTemperature(temp,scale){
    let temperature;
    if(scale==='c'||scale==='C')
    {
        temperature=(temp * 9/5) + 32 ;
        return `${temperature} (Fahrenheit)`;

    }
    else{
        temperature=(temp - 32) * 5/9 ;
        return `${temperature} (Celsius)`;
    
    }

}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(numb1,numb2,operation){

if(operation==='add'||operation==='ADD'){
 return numb1+numb2;
}
else if (operation==='subtract'||operation==='SUBTRACT') {
    return numb1-numb2;
} 
else if(operation==='multiply'||operation==='MULTIPLY') {
      return numb1*numb2;
}
else if (operation==='divide'||operation==='DIVIDE'){
    if(numb2===0){
        return ' error';
    }

     return numb1/numb2;
}

}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
