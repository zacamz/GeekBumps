  class Story {
    constructor(name,story,endingPages,copyright,missingpages){
        this.name = name
        this.story = story
        this.endingPages = endingPages
        this.copyright = copyright
        this.missingpages = missingpages
        this.currentPage = 0
        this.wholeStory = `${this.story[0]}`
    }
  }


let storyArray = []