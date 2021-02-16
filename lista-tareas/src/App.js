import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import TodoList from './TodoList';
function App({task}) {
  return (
    <>
   <UserList task={task}/>
   <TodoList />
    </>
  );
}

export default App;
