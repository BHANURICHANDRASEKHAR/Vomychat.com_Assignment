import React, { useState,useContext } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { UserContextApi } from '../Context/UserContext';
const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container mt-0 mb-3 text-white navbar1 position-fixed top-0 start-50 translate-middle-x" style={{ zIndex: 999 }}>
      <NavLinks/>
    </div>
  );
};

const NavLinks = ({ onClose }) => {
  const {Category,SetCategory}=useContext(UserContextApi)
  const navLinks = [
    { path: `/subreddits/${Category}`, title: 'Sub Reddit' },
    { path: `/${Category}/topics`, title: 'Topics' },
  ];

  return (
    <Nav className="display">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          style={{ color: 'white', marginLeft: '2%', fontSize: '1.2rem' }}
          className="navitem"
          onClick={onClose}
        >
          {link.title}
        </NavLink>
      ))}
    </Nav>
  );
};

export default CustomNavbar;
