import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Crsl.css";

function Crsl() {
  const crsls = [
    {
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/john-wick-chapter-4-et00311714-1679379542.jpg",
      name:"John Wick"
    },
    {
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/avatar-the-way-of-water-et00037264-1670850986.jpg",
      name:"Avatar: The Way of Water"
    },
    {
      img:"https://i0.wp.com/images.onwardstate.com/uploads/2010/10/inception.png?resize=1024%2C608&ssl=1",
      name:"Inception"
    }
  ]
  return (
    <div>
      
        <Carousel>
        {crsls.map((crl) =>(
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crl.img}
          alt={crl.name}
        />
        <Carousel.Caption>
          <h3>{crl.name}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
     ))} 
    </Carousel>
    
    </div>
  )
}

export default Crsl