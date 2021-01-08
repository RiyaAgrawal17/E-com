import React, {useState, useEffect} from "react";
import {Form} from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import { Col, Button } from "react-bootstrap";

function Backend() {
  //const history = useHistory();

    //const handleClick = () => {
      //  history.push("/Backend/Add");
   //}
   const [id, setId] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const [status, setStatus] = useState("");
   const [stock, setStock] = useState("");


   useEffect(() =>{ 
     const items = JSON.parse(localStorage.getItem("product"));
    if(!items)
    localStorage.setItem("product","[]");}
   ,[])

   function local(newItem){
     const items = JSON.parse(localStorage.getItem("product"));
     console.log(items);
     items.push(newItem);
     localStorage.setItem("product",JSON.stringify(items));
   }

    const handleSubmit = (e) => {
      e.preventDefault();
      local({id:id,
        name:name,
         price:price,
         stock:stock, 
        category:category,
         description: description, 
         status: status})
  }
   

  return (
      <div style={{marginTop : "80px"}}>
        <center><h3>Ecomm Back Office</h3></center><br />
        <h4 style={{color: "#adb3af", textDecoration: "underline", textAlign:"left", marginLeft:"60px"}}> Add new item </h4>
       
<Form style={{margin : "30px", border: "1px solid #adb3af"}} onSubmit={handleSubmit}>
  <Form.Row style={{margin : "20px"}}>
   <Col>
      <Form.Control placeholder="Product Id" value={id} 
      onChange={(e) => setId(e.target.value)} />
    </Col> 
    <Col>
      <Form.Control placeholder="Product Name" value={name} 
      onChange={(e) => setName(e.target.value)} />
    </Col> 
    <Col>
      <Form.Control placeholder="Category" value={category} 
      onChange={(e) => setCategory(e.target.value)} />
    </Col>
  </Form.Row>
  <Form.Row style={{margin : "20px"}}>
    <Col>
      <Form.Control placeholder="Price per unit"  value={price} 
      onChange={(e) => setPrice(e.target.value)} />
    </Col>
    <Col>
      <Form.Control placeholder="Stock count"  value={stock} 
      onChange={(e) => setStock(e.target.value)} />
    </Col>
    <Col>
      <Form.Control placeholder="Status"  value={status} 
      onChange={(e) => setStatus(e.target.value)} />
    </Col>
  </Form.Row>
  <Form.Row style={{margin : "20px"}}>
    <Col>
      <Form.Control placeholder="Description" value={description} 
      onChange={(e) => setDescription(e.target.value)} />
    </Col>
    </Form.Row>

    <Button className="btns" type= "submit" >Add item to inventory</Button>
</Form>

   
</div>
   
  );
}

export default Backend;