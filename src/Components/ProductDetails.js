import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel,Breadcrumb} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import classes from "./cards.module.css";
import {RiShoppingCart2Line } from 'react-icons/ri';
import Picmodal from "./PictureModal";

function ProductDetails(props) {
    console.log(props);
    let disc = props.deal.orgprice-props.deal.disprice
    const [modalShow, setModalShow] = useState(false);
    return (
        <div style={{marginTop:"68px",color:"white",backgroundColor:"#18202b",minHeight:"95vh"}}>
        <Picmodal show={modalShow} onHide={() => setModalShow(false)} image={props.deal.image}></Picmodal>
            <Container fluid>
                <Row>
                    <Col md={6}>
                            <img src={props.deal.image} style={{width:"100%", height:"100%"}} onClick={() => {setModalShow(true)}} ></img>
                    </Col>
                    <Col md={6}>
                        <br/>
                        <Breadcrumb style={{backgroundColor:"#404040"}}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href={"/"+props.iden}>
                            {props.Title}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.deal.title.slice(0,10)} - {props.deal.description[0].slice(0,20)}</Breadcrumb.Item>
                        </Breadcrumb>
                        <br/>
                        <h2>{props.deal.title}</h2>
                        <br/>
                        <ul>
                        {props.deal.description.map((obj,index)=>{
                            return(
                                <li>
                                    {obj}
                                </li>
                            )
                        })}
                        </ul>
                        <p></p>
                        <br/>
                        {props.deal.disprice!=""&&<h4>&#8377;{props.deal.disprice} <strike>&#8377;{props.deal.orgprice}</strike></h4>}
                        {props.deal.disprice==""&&<h4>&#8377;{props.deal.orgprice}</h4>}
                        <h5>Inclusive of All Taxes</h5>
                        <br/>
                        {props.deal.disprice!=""&&<h4>
                        You save &#8377;{disc}  ({Math.round((disc)*100/props.deal.orgprice)}%  OFF)
                        </h4>}
                        <br/>
                        <h5>Provided By {props.deal.provider}</h5>
                        <br/>
                        <Button variant="success" size="lg" onClick={()=>{window.open(props.deal.link)}}>
                            Shop Now <RiShoppingCart2Line style={{fontSize:"1.5em"}} />
                        </Button>
                    </Col>
                </Row>
                <br/>
            </Container>
        </div>
    )
}

export default ProductDetails
