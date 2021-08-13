const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
    // authors: [
    //     {
    //         id: 1,
    //         name: "Stephen King",
    //         email: "stephen@king.com"
    //     },
    //     {
    //         id: 2,
    //         name: "George Orwell",
    //         email: "george@orwell.com"
    //     },
    //     {
    //         id: 3,
    //         name: "George Martin",
    //         email: "george@martin.com"
    //     },
    //     {
    //         id: 4,
    //         name: "Kurt Vonnegut",
    //         email: "kurt@vonnegut.com"
    //     }
    // ],
    // letters: [],
    // recipients: [
    //     {
    //         id: 1,
    //         name: "Stefan Borghesani",
    //         email: "stefan@borghesani.com"
    //     },
    //     {
    //         id: 2,
    //         name: "Blake Rhoden",
    //         email: "blake@rhoden.com"
    //     },
    //     {
    //         id: 3,
    //         name: "Josh Rosenberger",
    //         email: "josh@rosenberger.com"
    //     },
    //     {
    //         id: 4,
    //         name: "Sharif Rashed",
    //         email: "sharif@rashed.com"
    //     }
    // ],
    // topics: [
    //     {
    //         id: 1,
    //         typeOfTopic: "Business"
    //     },
    //     {
    //         id: 2,
    //         typeOfTopic: "Friendly"
    //     },
    //     {
    //         id: 3,
    //         typeOfTopic: "Family"
    //     },
    //     {
    //         id: 4,
    //         typeOfTopic: "Congratulations"
    //     },
    //     {
    //         id: 5,
    //         typeOfTopic: "Condolences"
    //     },
    // ],
    sentLetters: [],
    authors: [],
    letters: [],
    recipients: [],
    topics: [],
    sentLetters: [],
    state: {}
}
console.log(applicationState)
console.log(applicationState.authors)



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

export const deleteLetter = (id) => {
    return fetch(`${API}/sentLetters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



