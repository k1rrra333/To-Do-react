import { useState } from 'react'



function TodoForm() {
    const [input, setInput] = useState('')
    return (
      <div>
        <input type="text" placeholder="Enter a task"  />
        <button>Add</button>
      </div>
    )
  }
  
  export default TodoForm