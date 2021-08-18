const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
    sentLetters: [],
    authors: [],
    letters: [],
    recipients: [],
    //chosenTopics will need id, letterId, topicid
    chosenTopics: [],
    topics: [],
    sentLetters: []
}


export const getAuthors = () => {
    return applicationState.authors.map((author) => ({...author}))
    // return [...applicationState.authors]
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
    // return [...applicationState.recipients]
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
    // return [...applicationState.topics]
}

export const getLetters = () => {
    return applicationState.sentLetters.map(letter => ({...letter}))
    // return [...applicationState.sentLetters]
}

export const getUserTopics = () => {
    return applicationState.chosenTopics.map(chosen => ({...chosen}))
}

export const setAuthor = (id) => applicationState.state.authorName = id

export const fetchLetters = () => {
    return fetch (`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (sendLetter) => {
                applicationState.sentLetters = sendLetter
            }
        )
}

export const fetchUserTopics = () => {
    return fetch (`${API}/chosenTopics`)
        .then(response => response.json())
        .then(
            (chosenTopic) => {
                applicationState.chosenTopics = chosenTopic
            }
        )
}

export const fetchAuthors = () => {
    return fetch (`${API}/authors`)
    .then(response => response.json())
    .then(
        (author) => {
            applicationState.authors = author
        }
    ) 
}

export const fetchRecipients = () => {
    return fetch (`${API}/recipients`)
    .then(response => response.json())
    .then(
        (recipient) => {
            applicationState.recipients = recipient
        }
    ) 
}
export const fetchTopics = () => {
    return fetch (`${API}/topics`)
    .then(response => response.json())
    .then(
        (topic) => {
            applicationState.topics = topic
        }
    ) 
}



export const sendLetter = (userLetterRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetterRequest)
    }

    return fetch(`${API}/sentLetters`, fetchOptions)
        .then(response => response.json())
        .then (() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendTopics = (userTopicChoices) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTopicChoices)
    }

    return fetch(`${API}/chosenTopics`, fetchOptions)
        .then(response => response.json())
        .then (() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteLetter = (id) => {
    return fetch(`${API}/sentLetters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// export const addTopics = () => {
//     const newTopic = {...applicationState.chosenTopics}
//     const lastIndex = applicationState.sentLetters.length -1
//     newTopic.letterId = applicationState.sentLetters[lastIndex].id +1

//     applicationState.chosenTopics.push
// }

