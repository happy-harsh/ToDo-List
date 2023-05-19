import React from "react";

const Footer = () => {
  let mystyle={
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "50px", /* Adjust the value to match the footer height */
    align:"center"
  
  }
  return (
    <footer className="bg-dark text-light small" style={mystyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};

export default Footer;
