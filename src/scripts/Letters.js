import { deleteLetter, getAuthors, getLetters, getRecipients, getUserTopics } from "./dataAccess.js"
import { UserChosenTopics } from "./Topics.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    click => {
        if (click.target.id.startsWith("letter--")) {
            const [,letterId] = click.target.id.split("--")
            deleteLetter(parseInt(letterId))
        }
    }
)


const listedLetters = (letter) => {
    const authors = getAuthors()
    const foundAuthorEmail = () => {
        for (const author of authors) {
            if (author.name === letter.authorName) {
                const authorEmail = author.email
                return authorEmail
            }
        }
    }

    const recipients = getRecipients()
    const foundRecipientEmail = () => {
        for (const recipient of recipients) {
            if (recipient.name === letter.recipient) {
                const recipientEmail = recipient.email
                return recipientEmail
            }
        }
    }

    const foundTopics = () => {
        const letters = getLetters()
        const userTopics = getUserTopics()

        for (const userTopic of userTopics) {
            for (const letter of letters) {
                if (letter.id === userTopic.letterId) {
                 
                     return `<div>${userTopic.topicType}</div>`
                    
                }
            }
        }
        
    }
    return `
        <div class="letters__displayed">
            <ul class="letters__display">
            <li class="indi__letter">
            Dear ${letter.recipient} (${foundRecipientEmail()}), 
            </li>

            <li class="indi__letter">
            ${letter.letter}
            </li>

            Sincerely, 
            <li class="indi__letter">
                ${letter.authorName} (${foundAuthorEmail()})
            </li>

            </ul>

            <div class="topic__display">
            ${foundTopics()}
            </div>
            
            <button class="letter__delete" id="letter--${letter.id}">
            delete
            </button>
            </div>
            `
}

export const Letters = () => {
    const letters = getLetters()
    let html = `
    
    ${letters.map(listedLetters).join("")}

    

    `
    return html
}