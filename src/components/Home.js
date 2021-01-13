import React, {useState, useEffect} from "react";
import { Card, Button, Row, Col } from "react-bootstrap";


const Home = () => {
  let counter=0;

  const [locals, setLocals] = useState([
    {
      id: "",
      name: "",
      price: "",
      description: "",
    },
  ]);

  const search = (id, arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return arr[i];
      }
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));

    if (!data) {
      localStorage.setItem("cart", "[]");
    }

  }, []);

  
  useEffect(() => {
      const products = JSON.parse(localStorage.getItem("product"));
      if (!products) {
        localStorage.setItem("product", "[]");
      }
      

    const local = JSON.parse(
      localStorage.getItem("product")
    );

    if (local) {
      setLocals(local);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("product"));
    const getCartItem = search(e.target.id, products);

    const cartItem = JSON.parse(localStorage.getItem("cart"));
    if(!getCartItem.id)
    cartItem.push(getCartItem);
    else
    counter= counter+1;
    //console.log(counter);
    
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

 


  const product = locals.map((item) => {
   
    return (
      <div style={{marginTop:"70px"}}>
      <Col lg={12} md={6} sm={12} key={item.id}>
        <Card className="my-3">
          <Card.Img variant="top" />
          <Card.Body>

            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <p>{item.description}</p>
            <Button block id={item.id} onClick={handleSubmit} variant="primary">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
     </div>
    );
  });
  return (
      <Row>{product}</Row>
  );
};

export default Home;