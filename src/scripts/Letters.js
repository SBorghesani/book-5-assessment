import { deleteLetter, getLetters } from "./dataAccess.js"


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
    return `
        <li>
        ${letter.letter}
        <button class="letter__delete" id="letter--${letter.id}">
        delete
        </button>
        </li>
    `
}

export const Letters = () => {
    const letters = getLetters()
    let html = `<ul>
    
    ${letters.map(listedLetters).join("")}

    </ul>

    `
    return html
}