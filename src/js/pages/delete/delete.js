
import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
 

const cancelButton = button("cancel")
const deleteButton = button("delete")
const deletePage = function(props){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h1>Delete Employee</h1>
            <p>delete employee with id</p> 
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

    return page
}

export default deletePage