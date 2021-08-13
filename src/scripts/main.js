import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        renderHTML()
    }
)

const renderHTML = () => {
    mainContainer.innerHTML = PenPalSociety()
}

renderHTML()