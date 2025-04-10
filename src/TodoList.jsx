import {useState} from 'react';

 function Todolist(){
    const [tasks,setTask] =useState([]);
    const[newTask,setNewTask] = useState("");
    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function handleAddTask(){
        if(newTask.trim() !==""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }
         
    }
    function deleteTasks(index){
         setTask(tasks.filter((_,i) => i!==index));
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask =[...tasks];
            [updatedTask[index],updatedTask[index-1]] = 
            [updatedTask[index-1],updatedTask[index]];
            setTask(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask =[...tasks];
            [updatedTask[index],updatedTask[index+1]] = 
            [updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask);
        }
    }
    return(
        <div className ="to-do-list">
           <h2>To-Do List</h2>
           <div>
           <input type="text" value={newTask} placeholder="Enter a task..." onChange={handleInputChange}/>
           <button  className="add-button" onClick={handleAddTask}>Add Task</button>
           </div>
           <ul>
                 {tasks.map((task,index) => 
                 <li key={index}>
                       <span className='text'>{task}</span>
                       <button className='delete-button'    onClick={()=>deleteTasks(index)}>Delete</button> 
                       <button className='move-up-button'   onClick ={()=>moveTaskUp(index)}>Move up</button> 
                       <button className='move-down-button' onClick={()=>moveTaskDown(index)}>Move Down</button>
                 </li>)}
           </ul>
        </div>);
 }
 export default Todolist;