// Create a function that takes an integer as an argument and returns "Even" for even numbers or 
// "Odd" for odd numbers.

function evenOrOdd(number) {
    let num;
    if(number%2 == 0){
      num = "Even";
    }else{
      num =  "Odd";
    }
    return num;
  }