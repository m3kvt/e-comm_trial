import React, { Fragment, useState } from "react";
import Header from "./Header/Header";
import './Home.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Header/>
    </Fragment>
    
  )
}

export default Home