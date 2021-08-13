import { PenPalSociety } from "./PenPalSociety.js"
import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        renderHTML()
    }
)

const renderHTML = () => {
    fetchAuthors()
    fetchLetters()
    fetchRecipients()
    fetchTopics()
    .then(
        () => {

            mainContainer.innerHTML = PenPalSociety()
        }
    )

}

renderHTML()