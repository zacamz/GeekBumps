let geekBumpsConverter = function(string){
    return string.split(/(?=^\d+ ?\n)/m) // Regex provided by kemptosa
}

let geekBumpsMissingPages = function(page){

    let pageNumbers = page.replace(/.*?(\n\d+ ? \n)/sg, "$1").replace(/(.*?(?:\n\n\d+ ?)+).*$/s, "$1").replace(/\n/gs, "").trim().split(" ") // even more regex by kemptosa! seriously check him out!!!

    let missingPages = []

    for (let index = 0; index < pageNumbers.length; index++) {
        let currentPage = parseInt(pageNumbers[index])
        let nextPage = parseInt(pageNumbers[index + 1])

        if(nextPage - currentPage > 1){

            missingPages.push(nextPage)

        }
         
    }
    
    let answer = "No Missing Pages"

    if(missingPages.length > 0){
        answer = (`The Following Pages are missing from the string: ${missingPages}, the next page(s) will be missing`)
    }
    return answer
}



let geekBumpsEndingPageChecker = function(storyArray){

    endingPages = []
for (const [index, page] of storyArray.entries()) {

    if(page.trim().endsWith("THE END") ){
        endingPages.push(index) 
    }
   
}
return endingPages
}