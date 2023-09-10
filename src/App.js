// import logo from './logo.svg';
// import './App.css';
import React,{useState,useEffect} from 'react'
import UserNavbar from "./Components/UserNavbar";
import UserCarousel from "./Components/UserCarousel";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Link} from "react-router-dom"
import deals from "./Components/deals.json";
import LinkDetails from './Components/LinkDetails';
import Home from './Home';
import Menfashion from "./Components/menfashion.json";
import BooksList from "./Components/bookslist.json";
import Earphones from "./Components/earphones.json";
import Womenfashion from "./Components/womenfashion.json";
import Beautyproducts from "./Components/beautyproducts.json";
import ProductDetails from './Components/ProductDetails';
import Powerbank from "./Components/powerbank.json";
import Smartwatches from "./Components/smartwatch.json";
import "./Components/cards.module.css";

function App() {
  const [visual, setVisual] = useState(visualViewport.width)
  if (visual!==visualViewport.width) {
    setVisual(visualViewport.width)
}
  console.log(visual);
  return (
    <div className="App">
        
        {/* <UserCarousel />
        <Brandcarousel visual={visual} setVisual={setVisual}/>
        <Earphones visual={visual} setVisual={setVisual}/>
        <Menfashion visual={visual} setVisual={setVisual}/>
        <Womenfashion visual={visual} setVisual={setVisual}/>
        <Beautyproducts visual={visual} setVisual={setVisual}/> */}
        <Router>
        <UserNavbar></UserNavbar>
          <Switch>
            {/* <Home></Home> */}
            {Menfashion.map((obj,index)=>{
              return(
                <Route path={"/menfashion/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="menfashion" Title="Men fashion" />)}} />
              )
            })}
            <Route path="/menfashion" exact render={()=>{return(<LinkDetails deals={Menfashion} iden="menfashion" Title="Men fashion" />)}}></Route>
            {Earphones.map((obj,index)=>{
              return(
                <Route path={"/earphones/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="earphones" Title="Earphones" />)}} />
              )
            })}
            <Route path="/earphones" exact render={()=>{return(<LinkDetails deals={Earphones} iden="earphones" Title="Earphones" />)}}></Route>
            {BooksList.map((obj,index)=>{
              return(
                <Route path={"/books/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="books" Title="Top Selling Books" />)}} />
              )
            })}
            <Route path="/books" exact render={()=>{return(<LinkDetails deals={BooksList} iden="books" Title="Top Selling Books" />)}}></Route>
            {Womenfashion.map((obj,index)=>{
              return(
                <Route path={"/womenfashion/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="womenfashion" Title="Women fashion" />)}} />
              )
            })}
            <Route path="/womenfashion" exact render={()=>{return(<LinkDetails deals={Womenfashion} iden="womenfashion" Title="Women fashion" />)}}></Route>
            {Beautyproducts.map((obj,index)=>{
              return(
                <Route path={"/beauty/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="beauty" Title="Beauty Products" />)}} />
              )
            })}
            <Route path="/beauty" exact render={()=>{return(<LinkDetails deals={Beautyproducts} iden="beauty" Title="Beauty Products" />)}}></Route>
            {Smartwatches.map((obj,index)=>{
              return(
                <Route path={"/smartwatch/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="smartwatch" Title="Smart Watches" />)}} />
              )
            })}
            <Route path="/smartwatch" exact render={()=>{return(<LinkDetails deals={Smartwatches} iden="smartwatch" Title="Smart Watches" />)}}></Route>
            {Powerbank.map((obj,index)=>{
              return(
                <Route path={"/powerbank/"+index} exact render={()=>{return(<ProductDetails deal={obj} iden="powerbank" Title="Power Banks" />)}} />
              )
            })}
            <Route path="/powerbank" exact render={()=>{return(<LinkDetails deals={Powerbank} iden="powerbank" Title="Power Banks" />)}}></Route>
            <Route path="/" exact render={()=>{return(<Home></Home>)}}></Route>
          </Switch>
        </Router>
        

        {/* <iframe style={{width:"100%",height:"240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=yashraj120f-21&language=en_IN&marketplace=amazon&region=IN&placement=B085W8CFLH&asins=B085W8CFLH&linkId=38f9e416ab7e0a17961f06a172ddd3db&show_border=true&link_opens_in_new_window=false"></iframe> */}
    </div>
  );
}

export default App;
