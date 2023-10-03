/* 
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"  
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]                                                                                   */


function towerBuilder(number) {
  const towerArray = []
  let starRange = 1
for (let i = 1; i <= number; i++) {
    let lines = ''
      let space = ''
      let star = ''
        for( let j= number -i; j > 0; j--){
          space = space + ' '
        }
        for(let j = 1; j <= starRange; j+=1){
          star = star + '*'
        }
        starRange +=2
      lines = space + star + space
      towerArray.push(lines)

}
return towerArray
}

console.log(towerBuilder(10));