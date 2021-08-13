import { getAuthors } from "./dataAccess.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "author") {

        }
    }
    )




export const Authors = () => {

    const authors = getAuthors()
    const authorsHTML =  `
    
    <select class="authorSelection" id="authors">
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

    