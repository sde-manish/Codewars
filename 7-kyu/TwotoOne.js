// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
// the longest possible, containing distinct letters - each taken only once - coming from s1 or 
// s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
        s1 = s1 + s2;
        
        let StringArr = s1.split("");
        
        StringArr.sort();
        
        let uniqueArray = [];
        for(let i=0; i < StringArr.length; i++){
                if(StringArr[i] != StringArr[i + 1]){
                        uniqueArray.push(StringArr[i]);
                }
        }
        uniqueArray = uniqueArray.join("");
}
//calling the function
longest("afkdla", "alsguicna");