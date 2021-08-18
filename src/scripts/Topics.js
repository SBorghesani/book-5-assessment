import { getTopics, sendTopics, getLetters, getUserTopics } from "./dataAccess.js"


export const UserChosenTopics = () => {
    let userTopicArray = new Array()
    let foundTopics = new Array()
    const userTopicList = document.querySelectorAll("input[name='topic']:checked")
    console.log(userTopicList)
    for (let i = 0; i < userTopicList.length; i++) {
        userTopicArray.push(parseInt(userTopicList[i].value))
    }
    console.log(userTopicArray)
    const topics = getTopics()
    for (const topic of topics) {
        for (const chosenTopic of userTopicArray) {
            if (topic.id === chosenTopic)
            foundTopics.push(topic.typeOfTopic)
            
            
        }
        
    }
    console.log(foundTopics)
    return foundTopics
}

export const arrayToObject = () => { 
    const currentLetter = () => {
        const letters = getLetters()
        if (letters.length === 0){
            return 1
        } else {
            const lastIndex = letters.length -1
            const currentLetterId = letters[lastIndex].id +1
            return currentLetterId
        }
    }
    const letter = currentLetter()
    const array = UserChosenTopics()
    array.forEach(topic => {
        const topicObject = {

            letterId: letter,
            topicType: topic
        }
        sendTopics(topicObject)
    })
}



export const Topics = () => {
    
    const topics = getTopics()
    const topicsHTML= 
    `
    ${topics.map(topic => {
        return `
        <ul name="topicTable" class="topics ul--options">
        <li class="topics">
        <input id="${topic.id}" type="checkbox" name="topic" value="${topic.id}"/>${topic.typeOfTopic}
        </li> `
        
          
    }).join("")
}
    `
    return topicsHTML

}