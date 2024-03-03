import { useState } from "react";
import {format } from "date-fns";
import AddTodoModal from "./AddTodoModal"
import DisplayTodo from "./DisplayTodo";
import Filter from "./Filter";

const Todo = () => {

    const [todoList , setTodoList] =useState([])
    const [ view , setView] = useState('list');
    const [updateStatus , setUpdateStatus] = useState(false)
   
 


    // Add todo function
        const handleSubmit =(e) => {
            e.preventDefault();
             
            const title = e.target.title.value
            const id =  Math.round(Math.random()*10000).toString();

            setTodoList([...todoList , {id , title, dateTody: new Date() }])
            e.target.title.value = ""
        }


        // Update Status

     const handleStatus = (_id) => {
        const find =  todoList.find(list  => list.id === _id)

    
        
        if (find.id == _id) {
            setUpdateStatus(true)
        }

        
  
       
     }


  return (
    <div className="container mt-5">
      <div className="row">
            <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="Enter Search Term"/>
                   
            </div>
            <div className="col-md-2">
                    
                  <AddTodoModal  handleSubmit={handleSubmit}/>


            </div>
      </div>

        {/* Filter Part */}

        <Filter setView={setView}/>


        {/* Display ToDO */}

        <DisplayTodo todoList={todoList} view ={view}  handleStatus={handleStatus} updateStatus={updateStatus}/>


    </div>
  )
}

export default Todo
