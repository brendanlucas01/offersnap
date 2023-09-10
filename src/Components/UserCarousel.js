import React,{useState,useEffect} from 'react'
import {Carousel,Image} from "react-bootstrap";
import photos from "./usercarousel.json"

function UserCarousel() {
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

    return (
        <div id="home" style={{paddingTop:"40px"}}>
            <Carousel activeIndex={index} controls={false} onSelect={handleSelect}>
                {photos.map((photo,index)=>{
                    return(
                        <Carousel.Item key={index}>
                            <img
                            className="d-block"
                            style={{width:"100vw", height:"45vw", minHeight:"350px"}}
                            src={photo.image}
                            alt={String(index)+" Slide"}
                            // onClick={()=>{window.open(photo.link)}}
                            />
                            {/* <Image src={photo.image} fluid /> */}

                            <Carousel.Caption>
                            {/* <h3>First slide label</h3> */}
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                    );
                })}
            </Carousel>
        </div>
    )
}

export default UserCarousel
