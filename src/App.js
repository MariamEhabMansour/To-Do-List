
import './App.css';
import Header from './componants/Header';

import AddTask from './componants/AddTask';
import Tasks from './componants/Tasks';
import { useEffect, useState } from 'react';




function App() {

  const[formState,setformState]=useState(false)
  const[imgState,setimgState]=useState(false)
  const[xyz,updXYZ]=useState([])
  const mainURL='http://localhost:5000';

  



    useEffect(()=>{
      const getTaskes= async()=>{
        const dataa =await fetchTasks();
        updXYZ(dataa)
       

      };
      getTaskes();
    
    },[])

    const fetchTasks=async()=>{
      const res =await fetch(`${mainURL}/tasks`)
      const data =res.json()
      return(data)
    }
  
    const fetchTask=async(id)=>{
      const res =await fetch(`${mainURL}/tasks/${id}`)
      const data =res.json()
      return data
    
    
    
    }
  
const delFunction=async(id)=>{
  setimgState(true)
  const res =await fetch(`${mainURL}/tasks/${id}`,{method:"DELETE"})
  //updXYZ(xyz.filter((x)=>x.id !=id))
    const dataa =await fetchTasks();
    updXYZ(dataa)
    setimgState(false)
   



}


  const addFunction=async(newTask)=>{
    setimgState(true)
    const res=await fetch(`${mainURL}/tasks`,
  {
    method:"POST",

  headers:{
    'Content-type':'application/json'
  },

  body:JSON.stringify (newTask)

})
    const data=await res.json()
    
    // xyz.push(newTask)
    // updXYZ([...xyz]);

    const dataa =await fetchTasks();
    updXYZ(dataa)
    setimgState(false)

  
  }


const toggleDone=async(id)=>{
  setimgState(true)
  let taskToEdit=await fetchTask(id)

  taskToEdit ={...taskToEdit,done:!taskToEdit.done}
  const res=await fetch(`${mainURL}/tasks/${id}`,
  {
    method:"PUT",

  headers:{
    'Content-type':'application/json'
  },

  body:JSON.stringify (taskToEdit)


})


 
 
    // updXYZ(xyz.map((x)=>(
    //   (x.id ==id) ? {...x ,done:!x.done} :x
      

    // )))
  
   
      const dataa =await fetchTasks();
      updXYZ(dataa)
      setimgState(false)
    }

const toggleForm=()=>{
  setformState(!formState)
}


  return (
    <div className='App container-fluid'>
      <Header title="ToDoList"  toggleForm={toggleForm} formState={formState}/>
      {imgState?  <center>
        <img src='images.png' width={100} height={100}/> 
        
         </center> :''}
     


      {formState? <AddTask addFunction={addFunction} /> :''}
      
      <Tasks xyz={xyz} delFunction={delFunction} toggleDone={toggleDone}/>
    
      
    </div>


  );
}

export default App;
