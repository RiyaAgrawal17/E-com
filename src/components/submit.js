import React from "react";
import {CardData} from "./Data";
import Home from "./Home";

const Submit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title);
  };

  return <Home products={CardData} submit={handleSubmit} />;
};

export default Submit;
