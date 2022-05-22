import React,{useState,useEffect} from "react";
import Todoapp from "./components/Todoapp";
import { Col, Container,Row, Card } from "react-bootstrap";
import Todo from "./components/Todo";
import axios from "axios";

const App = () => {
    const [todos, setTodos] = useState([])
const getTodos = async()=>{
    const res =  await axios.get('/api/v1/todo')
    const {data} = res
    setTodos(data)
    console.log(data);
}
useEffect(() => {
    getTodos()
}, [])

const addTodo = async (newTodo)=>{
    try {
        await axios.post('/api/v1/todo/', newTodo)
        getTodos()
    } catch (e) {
        console.log(e);
    }
}
const completeTodo =  async(id) => {
    try {
        const todo = todos.filter(todo => todo.id === id)[0];
        todo.complete = true;
        await axios.put(`/api/v1/todo/${id}/`, todo);
        getTodos();
    } catch (e) {
        console.log(e);
    }
}
const deleteTodo = async(id)=>{
    try {
        await axios.delete(`/api/v1/todo/${id}/`);
        getTodos();
    } catch (e) {
        console.log(e);
    }
}
const editTodo = async(id,updatedTodo)=>{
    try {
        await axios.put(`/api/v1/todo/${id}/`, updatedTodo);
        getTodos();
    } catch (e) {
        console.log(e);
    }
}
  return (
    <div>
      <Container>
        <Row className=" justify-content-center p-5">
          <Col md={6}>
            <Card className="p-4">
              <Todoapp addTodo={addTodo}/>
              {
                  todos.map((todo, ind)=>{
                    return(
                    !todo.complete && <Todo id={todo.id} title={todo.title} desc={todo.desc} 
                    completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} key={ind}/>
                    )
                  })
              }
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
