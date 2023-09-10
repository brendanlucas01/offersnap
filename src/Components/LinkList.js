import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Row, Col, Carousel,Tooltip,OverlayTrigger} from "react-bootstrap";
// import deals from "./womenfashion.json"
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import LinkDetails from "./LinkDetails";
import classes from "./cards.module.css";

function LinkList(props) {
    const [index, setIndex] = useState(0);
    // console.log(props);
    const deals = props.deals
    const iden = props.iden
    const Title = props.Title
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
    let disc
    // className="text-center" 
    const carditem = (num) =>{
        if (deals[num]) {
            disc = deals[num].orgprice-deals[num].disprice
            return(
                <Col xs={6} sm={6} md={4} lg={3}>
                    <Link to={"/"+String(iden)+"/"+String(num)} className={classes.Link}>
                    <Card className={classes.smLink} border="dark" bg="secondary" text="light" key={num} >
                        {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Img variant="top" style={{width:"100%",height:"15em"}} src={deals[num].image} />
                        <Card.ImgOverlay className={"d-flex flex-row justify-content-end"} style={{padding:"8px"}}>
                        {/* className={"d-flex flex-column justify-content-start"} */}
                        {deals[num].disprice!=""&& <Card.Text className={classes.DiscountIndicator} >
                        -{Math.round((disc)*100/deals[num].orgprice)}%
                            </Card.Text>}
                        </Card.ImgOverlay>
                        <Card.Body style={{width:"100%",height:"19rem"}}>
                            <Card.Title className={classes.Text}>{deals[num].title}</Card.Title>
                            <Card.Text className={classes.Text} >
                                {deals[num].description[0]}
                            </Card.Text>
                            {deals[num].disprice!=""&&<Card.Title><strike>&#8377;{deals[num].orgprice}</strike>  &#8377;{deals[num].disprice}</Card.Title>}
                            {deals[num].disprice==""&&<Card.Title>&#8377; {deals[num].orgprice}</Card.Title>}
                            {deals[num].disprice!=""&&
                            <Card.Text>
                                You save &#8377;{disc}
                            </Card.Text>}
                            <Button variant="outline-light" >Learn More</Button>
                        </Card.Body>
                        <Card.Footer style={{color:"#f0f0f0"}}>{deals[num].provider}</Card.Footer>
                    </Card>
                    </Link>
                </Col>
            )
        }
    }
    
    const renderTooltip = (props) => (
        <Tooltip {...props}>
          Click on Title to View all deals
        </Tooltip>
      );
    
    return (
        <div id={props.iden} style={{paddingTop:"10px", alignContent:"center", backgroundColor:"#18202b"}}>
            <br/><br/><br/>
            {/* <Router>
            <Switch>
                <Route path={"/"+iden} exact render={()=>{return(<LinkDetails iden={iden} Title={Title} deals={deals} />)}} />
            </Switch>
        </Router> */}
            <Container>
            <div align="center">
                <Link to={"/"+iden} className={classes.Link}>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip} >
                        <h2 style={{margin:"0px",padding:"10px",display:"inline-block",color:"white"}}>
                            {Title}
                        </h2>
                    </OverlayTrigger>
                </Link>
                <hr style={{width:"150px",height:"2px",color:"white",backgroundColor:"white",borderRadius:"15%"}} />
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

export default LinkList
