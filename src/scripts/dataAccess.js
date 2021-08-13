const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
    authors: [
        {
            id: 1,
            name: "Stephen King",
            email: "stephen@king.com"
        },
        {
            id: 2,
            name: "George Orwell",
            email: "george@orwell.com"
        },
        {
            id: 3,
            name: "George Martin",
            email: "george@martin.com"
        },
        {
            id: 4,
            name: "Kurt Vonnegut",
            email: "kurt@vonnegut.com"
        }
    ],
    letters: [],
    recipients: [
        {
            id: 1,
            name: "Stefan Borghesani",
            email: "stefan@borghesani.com"
        },
        {
            id: 2,
            name: "Blake Rhoden",
            email: "blake@rhoden.com"
        },
        {
            id: 3,
            name: "Josh Rosenberger",
            email: "josh@rosenberger.com"
        },
        {
            id: 4,
            name: "Sharif Rashed",
            email: "sharif@rashed.com"
        }
    ],
    topics: [
        {
            id: 1,
            typeOfTopic: "Business"
        },
        {
            id: 2,
            typeOfTopic: "Friendly"
        },
        {
            id: 3,
            typeOfTopic: "Family"
        },
        {
            id: 4,
            typeOfTopic: "Congratulations"
        },
        {
            id: 5,
            typeOfTopic: "Condolences"
        },
    ],
    sentLetters: []
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const fetchLetters = () => {
    return fetch (`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (sendLetter) => {
                applicationState.sentLetters = sendLetter
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