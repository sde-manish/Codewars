// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For 
// example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {

//     let ExpandedNumber = ''
//     while (num > 0) {
//         let numString = num.toString();

//         let temp  = numString[0]
//         for(let j = 0; j < numString.length - 1; j++){
//             temp += '0'
        
//         }
//         if (temp.length == 1) {
//             ExpandedNumber += temp
//             break;   
//         }
//         ExpandedNumber += temp + ' + '
//         num = num - parseInt(temp)
    
//     }
//     console.log(ExpandedNumber);

//   }
//   expandedForm(420370022)


function expandedForm(num){
    let numArray = String(num).split('').map( (num) => {
        // console.log(Number(num));
        return Number(num);
    } )

    let Result = ''
    for(let i = 0; i < numArray.length; i++){
        if (numArray[i] > 0) {
            Result += numArray[i]
            for(let j = 1; j < numArray.length  - i; j++){
                Result += '0'
            }
            // if (i === numArray.length - 1 || Result == num) {
            //    break
            //    return Result
            // }
            for(let k = i; k < numArray.length; k++){
                if (numArray[k + 1] !== 0 ) {
                    Result += ' + '
                    break
                }
            }
            
        }
    }
    console.log(Result);
}
expandedForm(67171780)