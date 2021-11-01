
import home from "../pages/home"; 
import toDoPage from "../pages/toDoPage";
import deletePage from "../pages/delete/";
import notFound from "../pages/notFound";


/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
    "/": home,
    "/toDoPage":toDoPage
}

const Router =  function (pathname)   {

   const isValidRoute =   Object.keys(routes).find(key => key===pathname)
    
   
     
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname)
    
       
        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined){
            app.appendChild(notFound())
        }else{
            app.appendChild(routes[isValidRoute]()) 
        }
 
}
export { Router}