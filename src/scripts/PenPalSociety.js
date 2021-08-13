import { LetterForm } from "./LetterForm.js"
import { Letters } from "./Letters.js"

export const PenPalSociety = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="letterForm">
    ${LetterForm()}
    </section>

    <section class="sentLetters">
        <h2>Archived Letters</h2>
        ${Letters()}
    </section>
    `
}