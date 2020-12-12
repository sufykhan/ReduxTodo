import React, { useState } from 'react'
import { Col, FormControl, Row ,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todoactions';


const Todoitem = ({todo}) => {
  const dispatch = useDispatch();
  const [edit,setEdit]=useState("")
  const [click, setClick] = useState(false)
  const[done,setDone]=useState(false)
    return (
        <Row
        className="align-items-center my-3 py-2"
        style={{ background: "whitesmoke" ,boxShadow:"rgb(221 219 219) 4px 4px 10px"}}
      >
        <div className="mr-3">
         
        </div>
        <Col style={{ background: "white" }}>
          <Row style={{alignItems:"center"}}>
            <Col md={8} xs={12} style={{alignSelf:"center"}}>
              <Row >
                <Col
                  style={{
                    fontSize: "25px",
                    fontWeight: "400",
                    textAlign: "left",
                    color: "#9f9ea7"
                  }}
                >
                {!click? todo.todoitem:( <FormControl
              placeholder="Update"
              aria-label="Update Todo Items"
              aria-describedby="basic-addon4"
              onChange={(e) => {
                setEdit(e.target.value);
              }}
              value={edit}
            />)}
                </Col>
              </Row>
             
              
            </Col>
            <Col md={1} xs={4} style={{ background: "#c4f6d5" }}>
              
                <div
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    color: "black",
                    margin: "23px 0px",
                  }}
                  onClick={()=>setDone(!done)}
                >
                  {done ?<i className="fas fa-plus"></i>:<i className="fas fa-minus"></i>}
                </div>
        
            </Col>
            <Col md={1} xs={4} style={{ background: "#fab4b4" }}>
              
                <div
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    color: "black",
                    margin: "23px 0px",
                    transform:"rotateZ(45deg)"
                  }}
                  onClick={()=>{
                    dispatch(deleteTodo(todo.id))}}
                >
                  <i className="fas fa-plus"></i>
                </div>
      
            </Col>
            <Col md={2} xs={4} style={{ background: "#cacaca26" }}>
              
                <div
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    color: "black",
                    margin: "23px 0px",
                  }}
                  onClick={()=>{
                    dispatch(updateTodo({...todo,todoitem:edit}))
                    setClick(!click)}}
                >
                <Button variant={click?"outline-info":"outline-dark"}>{click?"Update":"Edit"}</Button>
                </div>
          
            </Col>
          </Row>
        </Col>
      </Row>
    )
}

export default Todoitem

