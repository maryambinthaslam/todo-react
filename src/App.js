import logo from './dltBtn.png';
import './App.css';
import styles from './styles.module.css';
import { useState } from 'react';

function App() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([])

  function handleClick(){
    setTodos([...todos,todo])
    setTodo("");
  }
  function handleDelete(todo){
    setTodos(todos.filter(t=>(t!=todo)))
    console.log(todo)
  }
  

  console.log(todos)
  return (
    <div>
      <section className={styles.bodysize}>
        <div className={styles.head}>
          <div>
            <h1 className={styles.fontsize}>To-do-App!</h1>
          </div>
          {todos.map(todo=>(
          <div className={styles.alignInputDiv}>
            <div className={styles.inputDiv}>{todo}</div>
            <button onClick={()=>handleDelete(todo)} className={styles.buttonDelete}>DELETE</button>
          </div>
          ))}
         
          <div>
            <input 
            onChange={(e)=>{setTodo(e.target.value)}} 
            type="text" 
            placeholder="Add new todo..." 
            className={styles.inputbox} 
            value={todo}
            />
          </div>
          
          <div>
            <button onClick={handleClick} className={styles.addButton}>ADD</button>
            <div className={styles.dltBtn}>
            <img src={require('./dltBtn.png')} />
            </div>
          </div>
        </div>
        </section>
    </div>
  );
}

export default App;
