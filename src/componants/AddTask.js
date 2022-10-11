import React from 'react'
import { useState } from 'react';



function AddTask({addFunction}) {
    
    const[newTaskTitle,setNewTaskTitle]= useState('')
    const[newTaskText,setNewTaskText]= useState('')

    const chkInput=()=>{
      
        if(!newTaskTitle){
            alert("plese enter a text")
            return
        }

        if(!newTaskText){
            alert("plese enter a text")
            return
        }

        const newTask ={
                
                title: newTaskTitle,
                text: newTaskText,
                done:false,
    }

    addFunction(newTask);
    setNewTaskText('')
    setNewTaskTitle('')
        

        
    }

  return (
    <form className="p-4 m-5">
      <div className="form-group">
        <label>Task title</label>
        <input 
        type="text"
        placeholder="Please enter task title"
        className="form-control"
        value={newTaskTitle}
        onChange={(e)=>setNewTaskTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Task text</label>
        <input 
        type="text"
        placeholder="Please enter task text"
        className="form-control"
        value={newTaskText}
        onChange={(e)=>setNewTaskText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-2" type='button' onClick={()=>chkInput()}>Save</button>
      </div>
    </form>
  )
}

export default AddTask;
