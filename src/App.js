import logo from "./logo.svg";
import "./App.css";
import {
  Card,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import Todoitem from "./components/Todoitem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions/todoactions";
import {v1 as uuid} from "uuid"

function App() {

  const todos = useSelector(state => state)
//console.log(todos)
  const [item, setItem] = useState();
  //const [note, setNote] = useState([]);
  const [search, setSearch] = useState("");
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   setNote((prev) => {
  //     return [...prev, item];
  //   });
  //   setItem("");
  // };
  const dispatch = useDispatch()
  return (
    <Container style={{ height: "100vh",scrollBehavior:"auto"}}>
      <Row>
        <Col md={8} style={{background: "#f3ece2",
    boxShadow:"2px 2px 2px #d7c7b1",
    margin:"24px 10px"}}>
          <InputGroup className="my-3">
            <FormControl
              placeholder="Add your Todo Items"
              aria-label="Add your Todo Items"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setItem(e.target.value);
              }}
              value={item}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                // type="submit"
                // onClick={HandleSubmit}
                onClick={()=>
                {dispatch(addTodo({
                  id:uuid(),
                  todoitem:item
                }))
                setItem("")
                }}
              >
                ADD
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col md={3} style={{background: "#e2eff3",
    boxShadow:"2px 2px 2px #c3dde9",
    margin: "24px 10px"}}>
          <InputGroup className="my-3">
            <FormControl
              placeholder="Search your Todo Items"
              aria-label="Search your Todo Items"
              aria-describedby="basic-addon3"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
      <Container style={{ width: "90%", position: "absolute", border: "none" }}>
        <ListGroup variant="flush">
          {todos.map((todo) => {
            if (todo.todoitem.toLowerCase().includes(search.toLowerCase())) {
              return <Todoitem todo= {todo}/>;
            } else {
              return <></>;
            }
          })}
        </ListGroup>
      </Container>
    </Container>
  );
}

export default App;
