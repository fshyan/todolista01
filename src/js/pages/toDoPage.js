
import header from "../components/cards/brandingHeader"
import todolist from "../components/cards/todolist"
import todoitem from "../components/cards/todoitem"
import addtodo from "../components/cards/addtodo"

import { getStore } from "../redux/store"
import { render } from "ejs"
 

const toDoLists = function(){
    const taskList = getStore()
    const page = document.createElement('div')
    const container = todolist(); 
    var brandHead  = header();
    var addToDoItem = addtodo();  
    function render(){ 
      const ul = container.querySelector('ul')
      const footer = container.querySelector('footer')
      const div = container.getElementsByClassName('tasklist1');
      div[0].append(brandHead)
      const elements = taskList.map(task => todoitem(task))
      elements.forEach(element=> ul.append(element))
      footer.append(addToDoItem);
      page.append(container)
 }
    if(taskList !== null){
      render()
    }
    return page
}

export default toDoLists


 