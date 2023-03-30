// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.

let geekBumpsfunction = function () {

    let availableStories = ""

    for (const [index, story] of storyArray.entries()) {

        availableStories += `\n ${index}\. ${story.name}`

    }

    console.log(storyArray.map((s, i) => i + ": " + s.name + ' ' + s.missingpages).join('\n'))

    storyChoice = parseInt(prompt(`Chose your Adventure by entering the number of the story that you want to journey through:${availableStories} `, "0"))

    let pages = storyArray[storyChoice].story
    let endPages = storyArray[storyChoice].endingPages
    let copyright = storyArray[storyChoice].copyright
    let currentPage = 0
    let wholeStory = `${pages[0]}`

    // Your Code Here.


    let endChecker = function (currentPage) {

        let checker = false

        for (let i = 0; i < endPages.length; i += 1) {

            if (currentPage === endPages[i]) {
                checker = true
            }


        }
        return checker
    }

    let geekBumps = function (page) {

        let temp;

        do {
            console.log(temp)
            temp = prompt(`${pages[page]}\n Which page do you want to turn to? (please use whole intergers)`)
        } while (!temp && temp !== null)

        page = temp

        if (page !== null) {

            page = parseInt(page)



        } else { return page }


        wholeStory += `</p> You Chose Page: ${page}</p><p class = page>${pages[page]}<p class = pageSelector></p>`


        if (endChecker(page) === true) {

            page = null
        }


        return page

    }

    endChecker(currentPage)

    while (currentPage !== null) {

        currentPage = geekBumps(currentPage)

    }

    document.getElementById("geekBumps").innerHTML += `${wholeStory}<br><br><b>THE END</b><p class = copywrite>${copyright}</p>`
}

geekBumpsfunction()

