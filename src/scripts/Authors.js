import { getAuthors } from "./dataAccess.js"


export const Authors = () => {

    const authors = getAuthors()
    const authorsHTML =  `
    
    <select name="authorSelection" class="authorSelection" id="authors">
    <option value="">Choose</option>
    ${
        authors.map(author => {
            return `<option name="author" value="${author.name}">${author.name}</option>`
        }).join("")
    }
    </select>
    `
    return authorsHTML
}

    