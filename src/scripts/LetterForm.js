import { getRecipients, sendLetter } from "./dataAccess.js"
import { Authors } from "./Authors.js"
import { Topics, arrayToObject } from "./Topics.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "sendLetter") {
            
            const UserAuthorName = document.querySelector("select[name='authorSelection']").value
            const UserLetter = document.querySelector("textarea[name='letterText']").value
            // const UserTopic = document.querySelector("input[name='topic']:checked").value
            const UserRecipient = document.querySelector("select[name='recipientSelection']").value
            
            

            const dataToSendToAPI = {
                authorName: UserAuthorName,
                letter: UserLetter,
                // topic: UserTopic,
                recipient: UserRecipient,
                date: Date.now()
            }
            sendLetter(dataToSendToAPI)
            arrayToObject()
        }
    }
)


export const LetterForm = () => {
    const recipients = getRecipients()
    const recipientsHTML = recipients.map(recipient => {
        return `<option name="recipient" value="${recipient.name}">${recipient.name}</option>`
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
        ${Topics()}
        </div>
        <div class="field">
        <label class="label" for="recipientSelection">Choose a Recipient</label>
        <select name="recipientSelection" class="recipientSelection" id="recipients">
        ${recipientsHTML}
        </select>
        </div>
        
        <button class="button" id="sendLetter">Send Letter</button>
        `
        return html
    
}