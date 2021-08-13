import { getAuthors, getRecipients, getTopics } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")
const authors = getAuthors()
const topics = getTopics()
const recipients = getRecipients()

const topicOptionsHTML = topics.map(topic => {
    return `
        <ul class="topics ul--options">
        <li class="topic">
        <input type="radio" name="topic" value="${topic.id}"/>${topic.typeOfTopic}
        </li>
        `
}).join("")

const authorsHTML = authors.map(author => {
    return `<option value="${author.id}">${author.name}</option>`
})

const recipientsHTML = recipients.map(recipient => {
    return `<option value="${recipient.id}">${recipient.name}</option>`
})


export const LetterForm = () => {
        
        let html = `
        <div class="field">
        <label class="label" for="authorSelection">Choose an Author</label>
        <select class="authorSelection" id="authors">
        ${authorsHTML}
        </select>
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