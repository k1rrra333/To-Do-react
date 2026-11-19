import TodoForm from './components/TodoForm'
import './App.css'


function App() {
  
  const [todos, setTodos] = useState([])

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm setTodos={setTodos} />
    </div>
  )
}

export default App