import React,{useState,useEffect} from "react";
import { Button, Table } from "react-bootstrap";


function Add() {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const locals = JSON.parse(
      localStorage.getItem("product")
    );

    if (locals) {
      setProducts(locals);
    }
  }, []);
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
</Table>
</div>
   
  );
}

export default Add;