import React, { useEffect, useState } from "react";
import { ListGroup,Row, Col} from "react-bootstrap";


export default function Cart() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("cart"));
    if (product) {
      setCart(product);
    }
  }, []);

  const cartItem = JSON.parse(localStorage.getItem("cart"));
  //cartItem.push(getCartItem);
  //console.log(products);
  const total = cartItem.map((value) => value.price);
  //console.log(total);
  let total_price = total.reduce(
    (total, num) => parseInt(total) + parseInt(num),
    0
  );

  

  const handleClick = (e) => {
    console.log("I am clicked");
  }

  return (
    <div style={{marginTop : "70px"}}>
       <h2>Cart</h2>
       <Row style={{marginTop : "50px"}}>
            <Col className="my-auto" sm={3} style={{fontSize : "20px"}}>ID</Col>
            <Col className="my-auto" sm={3} style={{fontSize : "20px"}}>Name</Col>
            <Col className="my-auto" sm={3} style={{fontSize : "20px"}}>Stock</Col>
            <Col className="my-auto" sm={3} style={{fontSize : "20px"}}>Price</Col>
          </Row>

        <ListGroup>
        {cart.map((item) => {
          return (
            <div>
           
            <ListGroup className="my-2">
              <ListGroup.Item>
                <div>
                <Row>
                <Col className="my-auto" sm={3}>
                    {item.id}
                  </Col>
                  <Col className="my-auto" sm={3}>
                    {item.name}
                  </Col>
                  <Col className="my-auto" sm={3}>
                    <i
                      onClick={handleClick}
                      className="lni lni-circle-plus mr-2"
                    ></i>
                    {item.stock}
                    <i
                      onClick={handleClick}
                      className="lni lni-circle-minus ml-2"></i>
                  </Col>
                  <Col className="my-auto" sm={3}>
                     {item.price}
                  </Col>
                </Row>
                
                </div>
              </ListGroup.Item>
            </ListGroup>
            </div>
          );
          })}
      </ListGroup>
      <h3 style={{marginTop: "30px"}}> SubTotal :  {total_price}</h3>
     
      </div>
  );
}

