import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [taskName, setTaskName] = useState("")
  const [tasks, setTaks] = useState([])
  const taskArray = []
  return (
    <div className="App">
      <div>
      <h1>My Tasks</h1>
      Add New Task
      <input type="text"
      value={taskName}
      onChange={(e)=>setTaskName(e.target.value)}
      />
      <button onClick={() => {
        if(taskName != ""){
        setTaskName("")
        tasks.push(taskName)
        }
      }}>Add</button>
     </div>
     <div>
        {
          tasks.map(
            (task)=>(
              <>
               <input type="checkbox"/>
               &nbsp;
               {task}
               <br/>
              </>
            )
          )
        }
      </div>
    </div>
  );
}

export default App;
