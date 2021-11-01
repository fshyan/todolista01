
import makeElement from "../utils/makeElement"
import link from "../components/ui/link"
import heading from "../components/ui/levelHeading"
import logo from "../components/icons/logo"
const index = function(){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="warning center-in-page">
           
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const logoTemplate = logo();
    const headingTitle = heading('h1' ,'Task Way' ,)
    const tagline = heading('h5' ,"Let's manage the tasks in Task Way")
    const homeLink = link("To Do App", "/toDoPage")

    pageHeader.append(logoTemplate)
    pageHeader.append(headingTitle)
    pageHeader.append(tagline)
    pageHeader.append(homeLink)
    page.append(pageHeader)

    return page
}

export default index