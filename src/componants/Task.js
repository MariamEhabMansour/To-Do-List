function Task({currentTask,delFunction, toggleDone}) {
  return (
      
          <div className={`task ${currentTask.done ? 'taskDone' : ''}`} onDoubleClick={()=>toggleDone(currentTask.id)}>
            <h4>{currentTask.title}



               <button className="btn btn-danger delbutton" onClick={() => delFunction(currentTask.id)}> Delete </button> </h4>
              
              <p>{currentTask.text}</p>


          

      </div>
     
   
  );
}

export default Task