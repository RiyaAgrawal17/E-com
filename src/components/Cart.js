import React, { useEffect, useState } from "react";
import { ListGroup,Row, Col } from "react-bootstrap";


export default function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("cart"));
    if (product) {
      setCart(product);
    }
  }, []);

  const handleClick = (e) => {
    console.log("I am clicked");
  }

  return (
    <div style={{marginTop : "70px"}}>
       <h2>Cart</h2>

        <ListGroup>
        {cart.map((item) => {
          return (
            <ListGroup className="my-3">
              <ListGroup.Item>
                <Row>
                  <Col className="my-auto" sm={4}>
                    {item.name}
                  </Col>
                  <Col className="my-auto" sm={4}>
                    <i
                      onClick={handleClick}
                      className="lni lni-circle-plus mr-2"
                    ></i>
                    {item.stock}
                    <i
                      onClick={handleClick}
                      className="lni lni-circle-minus ml-2"></i>
                  </Col>
                  <Col className="my-auto" sm={2}>
                     {item.price}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          );
          })}
      </ListGroup>
      </div>
  );
}

