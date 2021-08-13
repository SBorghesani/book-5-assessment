import { getRecipients, getTopics, sendLetter } from "./dataAccess.js"
import { Authors } from "./Authors.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "sendLetter") {
            const UserAuthorName = document.querySelector("option[name='author']").value
            const UserLetter = document.querySelector("textarea[name='letterText']").value
            const UserTopic = document.querySelector("input[name='topic']").value
            const UserRecipient = document.querySelector("option[name='recipient']").value

            const dataToSendToAPI = {
                authorName: UserAuthorName,
                letter: UserLetter,
                topic: UserTopic,
                recipient: UserRecipient,
                date: Date.now()
            }
            sendLetter(dataToSendToAPI)
        }
    }
)






export const LetterForm = () => {
    const recipients = getRecipients()
    const topics = getTopics()
    
    const topicOptionsHTML = topics.map(topic => {
        return `
        <ul class="topics ul--options">
        <li class="topic">
        <input type="radio" name="topic" value="${topic.id}"/>${topic.typeOfTopic}
        </li>
        `
    }).join("")
    
        
    
    const recipientsHTML = recipients.map(recipient => {
        return `<option name="recipient" value="${recipient.id}">${recipient.name}</option>`
    })
    
        let html = `
        <div class="field">
        <label class="label" for="authorSelection">Choose an Author</label>
        ${Authors()}
        </div>
        <div class="field letter__field">
        <label class="label" for="letterText">Write Your Letter</label>
        <textarea id="letterField" name="letterText" cols="50" rows="10" class="input"></textarea>
        </div>
        <div class="field">
        <label class="label" for="topics">Choose a Topic</label>
        ${topicOptionsHTML}
        </div>
        <div class="field">
        <label class="label" for="recipientSelection">Choose a Recipient</label>
        <select class="recipientSelection" id="recipients">
        ${recipientsHTML}
        </select>
        </div>
        
        <button class="button" id="sendLetter">Send Letter</button>
        `
        return html
    
}