import makeElement from "../utils/makeElement"
import link from "./../components/ui/link"

const notFound = function(){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="page-not-found center-in-page">
        <h2>Oops !!!</h2>
        <h2><span>404</span> <span>page not found</span></h2>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const homeLink = link("Get me back to Home", "/")

    pageHeader.append(homeLink)
    page.append(pageHeader)

    return page
}

export default notFound