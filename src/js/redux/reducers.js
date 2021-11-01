import {getStore} from './store'
/* 
       Reducer works on the store
       action: what do you want to do on the store
            action.type = "edit"
              action.type = "delete"
                action.type = "create"
           delete: remove a employee
           edit: edits an existing employee
           add: add a new employee
       payload data for that action object
          {object}

*/


function reducers ({action, payload, ...rest}){

    switch(action.type){
        case "edit": return "Edit Task";
        case "delete": return "Delete Task";
        case "add": return "Add New Task";
        default: return store
    }

}


export default reducers