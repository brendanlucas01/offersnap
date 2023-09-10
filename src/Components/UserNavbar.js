import React,{useState,useEffect} from 'react'
import {Container, Nav,Navbar,NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import classes from "./cards.module.css";
import {FaTshirt,FaLeaf } from 'react-icons/fa';
import {ImBooks } from 'react-icons/im';
import {GiDress } from 'react-icons/gi';
import {GrTechnology } from 'react-icons/gr';
import {FcHeadset,FcChargeBattery } from 'react-icons/fc';
import {IoLeaf,IoHardwareChip } from 'react-icons/io5';
import { BsFillGiftFill } from "react-icons/bs";
import { CgAppleWatch,CgSmartphoneChip } from "react-icons/cg";

function UserNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
            <Container>
            <Link to="/#home" className={classes.Link2}><Navbar.Brand style={{fontSize:"1.5rem"}}><img rel="apple-touch-icon" src="Picture1.svg" width="40px"/> Offer Snap</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                
                <NavDropdown title={<span><CgSmartphoneChip/> Electronics</span>} id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to="/earphones" className={classes.Link2}><FcHeadset/> Earphones</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/smartwatch" className={classes.Link2}><CgAppleWatch/> Smart Watches</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/powerbank" className={classes.Link2}><FcChargeBattery/> Power Bank</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/books" className={classes.Link2}><ImBooks /> Books</Link></Nav.Link>
                <NavDropdown title={<span><BsFillGiftFill/> Fashion</span>} id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to="/menfashion" className={classes.Link2}><FaTshirt/> Men Fashion</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/womenfashion" className={classes.Link2}><GiDress/> Women Fashion</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to="/beauty" className={classes.Link2}><IoLeaf/>Beauty Products</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default UserNavbar
