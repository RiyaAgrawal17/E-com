import React from "react";
import {Jumbotron} from 'react-bootstrap';
import { Card, Button, Row, Col } from "react-bootstrap";
import {CardData} from './Data';

function Home() {

  function btnClick() {
    console.log("I am clicked!");
  }

  return (
      <div style={{marginTop : "100px"}}>
      <Jumbotron className="jumbo">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>


<Row>
{CardData.map((data) => {
  const {title,price} = data;
  return (
    <Col lg={4} md={6} sm={12}>
<Card style={{width : "18rem"}} className="card" >
  <Card.Img className="img" src="" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Price : {price}
    </Card.Text>
    <Button className="btn" onClick={btnClick}>Add to cart</Button>
  </Card.Body>
</Card>
</Col>
 );
 })}
</Row> 
</div>
);
}

export default Home;
