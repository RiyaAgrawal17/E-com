import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Card, Button, CardDeck } from "react-bootstrap";
import {CardData} from './Data';


function Home() {
  return (
      <div style={{marginTop : "100px"}}>
      <Jumbotron className="jumbo">
  <h1>Hello, world!</h1>
  <p style={{fontSize : "20px"}}>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>



{CardData.map((data) => {
  const {title,price} = data;
  return (
   <CardDeck> 
<Card style={{width : "18rem"}} className="card" >
  <Card.Img className="img" src="" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Price : {price}
    </Card.Text>
    <Button className="btn">Add to cart</Button>
  </Card.Body>
</Card>
</CardDeck>
        );
      })}
      
    </div>
);
}

export default Home;
