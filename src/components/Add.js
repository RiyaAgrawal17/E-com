import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

function Add() {
  return (
<div style={{marginTop : "80px"}}>
  <h3 style={{textAlign:"center"}}>Ecomm Back Office</h3>


  <div>
    <p style={{textAlign:"left",  marginLeft:"60px", fontSize:"25px"}}>Inventory Items</p>
    <Button className="btns" style={{marginLeft : "1000px", marginTop:"-90px"}} >Add item</Button>
  </div>

  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Item Name</th>
      <th>Description</th>
      <th>Category</th>
      <th>Price</th>
      <th>Units</th>
      <th>Active</th>
    </tr>
  </thead>
  <tbody>
    <tr><td></td></tr>
  </tbody>
</Table>
</div>
   
  );
}

export default Add;