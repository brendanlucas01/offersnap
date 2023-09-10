import React,{useState,useEffect} from 'react'
import UserNavbar from "./Components/UserNavbar";
import UserCarousel from "./Components/UserCarousel";
import Beautyproducts from "./Components/beautyproducts.json";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Link} from "react-router-dom"
import Menfashion from './Components/menfashion.json';
// import Womenfashion from './Components/Womenfashion';
import Womenfashion from './Components/womenfashion.json'
import Brandcarousel from './Components/Brandcarousel';
import Earphones from './Components/earphones.json';
import deals from "./Components/deals.json";
import LinkDetails from './Components/LinkDetails';
import BooksList from './Components/bookslist.json';
import LinkList from './Components/LinkList';
import Powerbank from "./Components/powerbank.json";
import Smartwatches from "./Components/smartwatch.json";

function Home() {
    const [visual, setVisual] = useState(visualViewport.width)
  if (visual!==visualViewport.width) {
    setVisual(visualViewport.width)
}
    return (
        <div>
            <UserCarousel />
            <Brandcarousel visual={visual} setVisual={setVisual}/>
            <LinkList deals={Earphones} iden="earphones" Title="Earphones" visual={visual} setVisual={setVisual} />
            <LinkList deals={Smartwatches} iden="smartwatch" Title="Smart Watches" visual={visual} setVisual={setVisual} />
            <LinkList deals={Powerbank} iden="powerbank" Title="Power Banks" visual={visual} setVisual={setVisual} />
            <LinkList deals={BooksList} iden="books" Title="Top Selling Books" visual={visual} setVisual={setVisual} />
            <LinkList deals={Menfashion} iden="menfashion" Title="Men fashion" visual={visual} setVisual={setVisual} />
            <LinkList deals={Womenfashion} iden="womenfashion" Title="Women fashion" visual={visual} setVisual={setVisual} />
            <LinkList deals={Beautyproducts} iden="beauty" Title="Beauty Products" visual={visual} setVisual={setVisual} />
        </div>

    )
}

export default Home
