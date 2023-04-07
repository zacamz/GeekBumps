// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0

let geekBumpsfunction = function () {

    
    
    
    let compileAvailibleStories = function(){
        
        let availableStories = ""

        
        
        for (const [index, story] of storyArray.entries()) {
            
            availableStories += `\n ${index}\. ${story.name}`
            
            
            
        }
        return(availableStories)
    }
    
    let storyPicker = function(){
        availableStories = compileAvailibleStories()

        const storySelectorHTML = document.createElement("form")
    
        const dropdownMenu = document.createElement("datalist")
        

        console.log(storyArray.map((s, i) => i + ": " + s.name + ' ' + s.missingpages).join('\n'))
    
        storyChoice = parseInt(prompt(`Chose your Adventure by entering the number of the story that you want to journey through:${availableStories} `, "0"))
    
        storyChoice = storyArray[storyChoice]

        // let pages = storyChoice.story
        // let endPages = storyChoice.endingPages
        // let copyright = storyChoice.copyright
        // let currentPage = 0
        // let wholeStory = `${pages[0]}`

        return storyChoice
    }



    // Your Code Here.


    let endChecker = function (Story) {

        console.log(Story.endingPages[0])

        let checker = false

        for (let i = 0; i < Story.endingPages.length; i += 1) {

            if (Story.currentPage === Story.endingPages[i]) {
                checker = true
            }


        }
        return checker
    }

    let geekBumps = function (Story) {

        console.log(Story.story[Story.currentPage])

        do {

            Story.currentPage = prompt(`${Story.story[Story.currentPage]}\n Which page do you want to turn to? (please use whole intergers)`)
        } while (!Story.currentPage && Story.currentPage !== null)

        if (Story.currentPage !== null) {

            Story.currentPage = parseInt(Story.currentPage)

        } else { return Story}


        Story.wholeStory += `</p> You Chose Page: ${Story.story[Story.currentPage]}</p><p class = page>${Story.story[Story.currentPage]}<p class = pageSelector></p>`


        if (endChecker(Story) === true) {

            Story.currentPage = null
        }


        return Story

    }

    let currentStory = storyPicker()
    console.log(currentStory["endingPages"])
    endChecker(currentStory)


    while (currentStory.currentPage !== null) {

        currentStory = geekBumps(currentStory)

    }

    document.getElementById("geekBumps").innerHTML += `${wholeStory}<br><br><b>THE END</b><p class = copywrite>${copyright}</p>`
}



geekBumpsfunction()

