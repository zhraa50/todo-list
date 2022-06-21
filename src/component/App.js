import '../App.css';
import ListGroup from './list/ListGroup';
import Navbar from './Navbar';
import { useState } from 'react';
import Form from './Form';
const App = () => {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onClick = (e) => {
    setTodoList([...todoList, todoItem]);
    setTodoItem('');
  };

  const onChange = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <>
      <Navbar projectName='Todo List' />
      <div className='container'>
        <h1 className='text-center mb-3'>Todo List !</h1>
        <ListGroup todoList={todoList} />
        <Form onChange={onChange} todoItem={todoItem} onClick={onClick} />
      </div>
    </>
  );
};

export default App;