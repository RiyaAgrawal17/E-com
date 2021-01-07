import React from "react";
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { Col, Button } from "react-bootstrap";

function Backend() {
  const history = useHistory();

    const handleClick = () => {
        history.push("/Backend/Add");
    }


  return (
      <div style={{marginTop : "80px"}}>
        <center><h3>Ecomm Back Office</h3></center><br />
        <h4 style={{color: "#adb3af", textDecoration: "underline", textAlign:"left", marginLeft:"60px"}}> Add new item </h4>
       
<Form style={{margin : "30px", border: "1px solid #adb3af"}}>
  <Form.Row style={{margin : "20px"}}>
    <Col>
      <Form.Control placeholder="Product Name" />
    </Col>
    <Col>
      <Form.Control placeholder="Category" />
    </Col>
  </Form.Row>
  <Form.Row style={{margin : "20px"}}>
    <Col>
      <Form.Control placeholder="Price per unit" />
    </Col>
    <Col>
      <Form.Control placeholder="Status" />
    </Col>
  </Form.Row>
  <Form.Row style={{margin : "20px"}}>
    <Col>
      <Form.Control placeholder="Description" />
    </Col>
    </Form.Row>
</Form>

   <Button className="btns" onClick={handleClick}>Add item to inventory</Button>
</div>
   
  );
}

export default Backend;