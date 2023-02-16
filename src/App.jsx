import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { changeInputAC } from './store/acrionCreaters/actionsCreates';
import ToDoItem from './components/ToDoItem/ToDoItem';
function App() {
  const dispatch = useDispatch();
  const { todoInputValue, todos } = useSelector(state => state.todoReducer);
  return (
    <div className="App">
      <input value={todoInputValue} onChange={(e) => dispatch(changeInputAC(e.target.value))} />
      {todos.map(e => <ToDoItem key={e.id} text={e.text}/>)}
    </div>
  );
}

export default App;
