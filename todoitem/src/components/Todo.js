import React,{useState} from "react";
import { Row, Col, Form,Button, Modal } from "react-bootstrap";

const Todo = ({id,title,desc,completeTodo, deleteTodo, editTodo}) => {
  const [newtitle, setNewtitle] = useState(title)
  const [newdesc, setNewdesc] = useState(desc)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editTodoItem = (id)=>{
    editTodo(id,{
      title:newtitle,
      desc: newdesc,
      complete: false
    })
    handleClose()
  }
  return (
    <div className="border-bottom textfamily">
      <Row className="py-2">
        <Col>
          <Form>
            <Form.Group className="mt-3" controlId="complete">
              <Form.Check type="checkbox" onClick={()=> completeTodo(id)}/>
              </Form.Group>
          </Form>
        </Col>
        <Col md={8} className='pt-2'>
            <h5>{title}</h5>
            <h6>{desc}</h6>
        </Col>
        <Col className="d-grid gap-2" md={3}>
        <Button variant="warning" onClick={handleShow} >Edit</Button>
        <Button variant="danger" onClick={()=>deleteTodo(id)}>Delete</Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Todo Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={newtitle} onChange={(e)=>setNewtitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter desc" value={newdesc} onChange={(e)=>setNewdesc(e.target.value)}/>
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>editTodoItem(id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Todo;
