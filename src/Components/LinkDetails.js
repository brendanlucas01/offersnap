import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import classes from "./cards.module.css";


function LinkDetails(props) {
    console.log(props);
    // console.log(1)
    const deals = props.deals
    const iden = props.iden
    let disc
    return (
        <div style={{paddingTop:"5px"}}>
            <div style={{paddingTop:"10px", alignContent:"center", backgroundColor:"#18202b"}}>
                <br/><br/><br/>
                <Container>
                    <div align="center" style={{color:"white"}}>
                        <h2>{props.Title}</h2>
                        <hr style={{width:"150px",height:"2px",backgroundColor:"white",borderRadius:"15%"}} />
                    </div>
                    {/* onClick={()=>{window.open("/"+props.iden+"/"+index)}} */}
                    <Row>
                        {deals.map((obj,index)=>{
                            disc = obj.orgprice-obj.disprice
                            return(
                                <Col xs={6} sm={6} md={4} lg={3}>
                    <Link to={"/"+String(iden)+"/"+String(index)} className={classes.Link}>
                    <Card className={classes.smLink} border="dark" key={index} bg="dark" text="white" style={{marginBottom:"40px"}}>
                        {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Img variant="top" style={{width:"100%",height:"15em"}} src={obj.image} />
                        <Card.ImgOverlay className={"d-flex flex-row justify-content-end"} style={{padding:"8px"}}>
                        {/* className={"d-flex flex-column justify-content-start"} */}
                        {obj.disprice!=""&& <Card.Text className={classes.DiscountIndicator} >
                                -{Math.round((disc)*100/obj.orgprice)}%
                            </Card.Text>}
                        </Card.ImgOverlay>
                        <Card.Body style={{width:"100%",height:"19rem"}}>
                            <Card.Title className={classes.Text}>{obj.title}</Card.Title>
                            <Card.Text className={classes.Text} >
                                {obj.description[0]}
                            </Card.Text>
                            {obj.disprice!=""&&<Card.Title><strike>&#8377;{obj.orgprice}</strike>  &#8377;{obj.disprice}</Card.Title>}
                            {obj.disprice==""&&<Card.Title>&#8377; {obj.orgprice}</Card.Title>}
                            {obj.disprice!=""&&
                            <Card.Text>
                                You save &#8377;{disc}
                            </Card.Text>}
                            <Button variant="outline-light">Learn More</Button>
                            {/* Learn more */}
                        </Card.Body>
                        <Card.Footer style={{color:"#f0f0f0"}}>{obj.provider}</Card.Footer>
                    </Card>
                    </Link>
                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default LinkDetails
