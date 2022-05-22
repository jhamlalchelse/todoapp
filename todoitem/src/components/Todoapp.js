import React,{useState} from "react";
import {Form, Button} from 'react-bootstrap'

const Todoapp = ({addTodo}) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const addTodoItem = (e)=>{
        e.preventDefault()
        addTodo({
            title,
            desc,
            complete: false
        })
    }
  return (
    <div>
    <h3 className="text-center textfamily">Todo Item</h3>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter desc" onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>
        <div  className="d-grid mb-4">
        <Button variant="primary" type="submit" onClick={addTodoItem}>
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default Todoapp;
