import Task from "./Task"


function Tasks({xyz , delFunction , toggleDone}) {
  return (

    <div>
        {xyz.map((x)=>(
            <Task key={x.id} currentTask={x} delFunction={delFunction} toggleDone={toggleDone}/>

        )
        
        )}


    </div>
    
  )
}



export default Tasks;