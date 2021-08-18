import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics, fetchUserTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        renderHTML()
    }
)

const renderHTML = () => {
    fetchAuthors()
    .then(
        fetchTopics
        ).then(
            fetchLetters
        ).then(
            fetchUserTopics
        ).then(
            fetchRecipients
        ).then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )

}
renderHTML()