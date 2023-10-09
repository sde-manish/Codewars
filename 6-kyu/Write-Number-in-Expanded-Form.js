// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For 
// example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


// First solution: 

function expandedForm(num) {

    let ExpandedNumber = ''
    while (num > 0) {
      if( ExpandedNumber !== ''){
         ExpandedNumber += ' + '
      }
        let numString = num.toString();

        let temp  = numString[0]
        for(let j = 0; j < numString.length - 1; j++){
            temp += '0'
        
        } 
        ExpandedNumber += temp
        num = num - parseInt(temp)   
    }
       
    console.log(ExpandedNumber);
    return ExpandedNumber
 
}
expandedForm(67171780)


// Second solution:

function expandedForm(num){
    let numArray = String(num).split('').map( (num) => {
        // console.log(Number(num));
        return Number(num);
    } )

    let Result = ''
    for(let i = 0; i < numArray.length; i++){
        if (numArray[i] !== 0) {
            if (Result !== '') {
                Result += ' + '
                
            }
            
            Result += numArray[i]
            for(let j = 1; j < numArray.length  - i; j++){
                Result += '0'
            }
            }
            
        }
        console.log(Result);
    return Result
    }
        
expandedForm(67171780)