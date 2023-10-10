// Write a function that when given a URL as a string, parses out just the domain name and 
// returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
let start = 0;
let end = 0;
let dotCounter = 0;
let domainName = ''
for(let i = 0; i < url.length; i++){
    if (url[i] === '.') {
        dotCounter++;
        start = end;
        end =i
        if (dotCounter == 2) {
            
            for(let i = start + 1; i < end; i++){
                domainName += url.charAt(i)
            }
            return domainName;
        }
    }
    if (url[i] === ':') {
        var colan = i;
    }

    if (i === url.length -1 && dotCounter < 2) {
        start = colan + 3;
        for(let i = start; i < end; i++){
            domainName += url.charAt(i);
        }
        return domainName;
    }
  }
}
console.log(domainName("http://www.zombie-bites.com"));