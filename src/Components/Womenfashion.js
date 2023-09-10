import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel} from "react-bootstrap";
import deals from "./womenfashion.json"
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {Link} from "react-router-dom"
// import LinkDetails from "./LinkDetails";
import classes from "./cards.module.css";

function Womenfashion(props) {
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
                    <Card className={classes.smLink} border="dark" key={num} onClick={()=>{window.open(deals[num].link)}} >
                        {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Img variant="top" style={{width:"100%",height:"15em"}} src={deals[num].image} />
                        <Card.ImgOverlay className={"d-flex flex-row justify-content-end"} style={{padding:"8px"}}>
                        {/* className={"d-flex flex-column justify-content-start"} */}
                        {deals[num].discount!=""&& <Card.Text className={classes.DiscountIndicator} >
                                -{deals[num].discount}%
                            </Card.Text>}
                        </Card.ImgOverlay>
                        <Card.Body style={{width:"100%",height:"19rem"}}>
                            <Card.Title className={classes.Text}>{deals[num].title}</Card.Title>
                            <Card.Text className={classes.Text} >
                                {deals[num].description}
                            </Card.Text>
                            {deals[num].disprice!=""&&<Card.Title><strike>&#8377;{deals[num].orgprice}</strike>  &#8377;{deals[num].disprice}</Card.Title>}
                            {deals[num].disprice==""&&<Card.Title>&#8377; {deals[num].orgprice}</Card.Title>}
                            {deals[num].saving!=""&&
                            <Card.Text>
                                You save &#8377;{deals[num].saving}
                            </Card.Text>}
                            <Button variant="outline-dark" onClick={()=>{window.open(deals[num].link)}}>Learn More</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">{deals[num].provider}</Card.Footer>
                    </Card>
                </Col>
            )
        }
    }

    
    return (
        <div id="womenfashion" style={{paddingTop:"10px", alignContent:"center", backgroundColor:"white"}}>
                {/* <Switch>
                {deals.map((deal,index)=>{
                    <Route path={"/deals/"+index} render={()=>{return(<div><LinkDetails deals={deal} num={index}></LinkDetails></div>)}} />
                })}
                </Switch> */}
            <br/><br/><br/>
            <Container>
            <div align="center">
            <h2>Women Fashion</h2>
            <hr style={{width:"150px",height:"2px",color:"white",backgroundColor:"black",borderRadius:"15%"}} />
            </div>
            {/* <Card className="text-center"> */}
            </Container>
            
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

export default Womenfashion
