import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel} from "react-bootstrap";
import deals from "./brandcarousel.json"
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {Link} from "react-router-dom"
// import LinkDetails from "./LinkDetails";
import classes from "./cards.module.css";

function Brandcarousel(props) {
    const [index, setIndex] = useState(0);
    // console.log(props);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let deallength=deals.length
    // let deals=[]
    // for (let i = deallength-1; i > 0; i--) {
    //     deals.push(dealdata[i]);
        
    // }
    // const [visual, setVisual] = useState(visualViewport.width)
    // console.log(deals[0]);
    // console.log(visualViewport.width);
    if (props.visual!==visualViewport.width) {
        props.setVisual(visualViewport.width)
    }

    // className="text-center" 
    const carditem = (num) =>{
        if (deals[num]) {
            return(
                <Col xs={6} sm={6} md={4} lg={3}>
                    <Card className={classes.smLink} border="light" key={num}>
                        {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Img variant="top" style={{height:"5rem"}} src={deals[num].image} />
                    </Card>
                </Col>
            )
        }
    }

    
    return (
        <div style={{paddingTop:"10px", alignContent:"center", backgroundColor:"#18202b"}}>
                {/* <Switch>
                {deals.map((deal,index)=>{
                    <Route path={"/deals/"+index} render={()=>{return(<div><LinkDetails deals={deal} num={index}></LinkDetails></div>)}} />
                })}
                </Switch> */}
            
            <Carousel activeIndex={index} indicators={false} onSelect={handleSelect}>
            {/* <Container> */}
            {/* <Row> */}
            {/* {carditem(0)} */}
            {deals.map((deal,index)=>{
                if (props.visual>1020&&index%4===0) {
                    return(
                        <Carousel.Item>
                        <Container>
                        <br/><br/>
                        <Row>
                        {carditem(index+0)}
                        {carditem(index+1)}
                        {carditem(index+2)}
                        {carditem(index+3)}
                        </Row>
                        <br/><br/>
                        </Container>
                        </Carousel.Item>
                    )                    
                }
                else if (props.visual<1020&&props.visual>760&&index%3===0) {
                    return(
                        <Carousel.Item>
                        <Container>
                        <br/><br/>
                        <Row>
                        {carditem(index+0)}
                        {carditem(index+1)}
                        {carditem(index+2)}
                        </Row>
                        <br/><br/>
                        </Container>
                        </Carousel.Item>
                    )                    
                }
                else if(props.visual<760&&props.visual>300&&index%2===0){
                    return(
                        <Carousel.Item>
                        <Container>
                        <br/><br/>
                        <Row>
                        {carditem(index+0)}
                        {carditem(index+1)}
                        </Row>
                        <br/><br/>
                        </Container>
                        </Carousel.Item>
                    )                    
                }
                // else if(props.visual<550&&props.visual>300){
                //     return(
                //         <Carousel.Item>
                //         <Container>
                //         <br/><br/>
                //         <Row>
                //         {carditem(index)}
                //         </Row>
                //         <br/><br/>
                //         </Container>
                //         </Carousel.Item>
                //     )                    
                // }
                
            })}
            {/* </Row> */}
            {/* </Container> */}
            </Carousel>
        </div>
    )
}

export default Brandcarousel
