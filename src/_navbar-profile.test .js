// Navbar.js

import React, { useState } from 'react';

const Navbar = (props) => {
  const [userImage, setUserImage] = useState('');

  const showProfileLoginHandle = () => {
    const name = prompt("What is your name (Choose Steven or Mary)");
    const username = props.testUsername || prompt("Enter Username - ie email@domain.com:", "sd");
    const password = prompt("Enter password:");

    if (name && username && password) {
      alert(`Welcome, ${name}!`);
      if (name === "Steven") {
        setUserImage("male");
      } else if (name === "Mary") {
        setUserImage("female");
      }
      props.setName(name);
    } else {
      alert("Invalid input or Invalid account.");
    }
  };


};

export default Navbar;
