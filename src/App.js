import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [taskName, setTaskName] = useState("")
  const [tasks, setTaks] = useState([])
  const taskArray = []
  return (
    <div className="App">
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
 
      <table width="100%">
        <tr>
          <td align='center'>
            <table width="18%">
                  {tasks.map(
                  (task)=>(
                    <tr>
                      <td width="10"><input type="checkbox"/></td>
                      <td>{task}</td>
                    </tr>
                    )
                  )}
             </table>
            </td>
        </tr>
      </table>
      
        
    </div>
  );
}

export default App;
