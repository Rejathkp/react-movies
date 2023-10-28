import React from 'react'
import { Card } from 'react-bootstrap';
import "./Crddetail.css";

function Crddetail2() {
    const films = [
        {
            Name: "Romancham",
            img: "https://assets.voxcinemas.com/posters/P_HO00009659.jpg",
            detail: "While seven bachelors are living in Bangalore in 2007, Jiby brings out the Ouija board. They attempt to communicate with spirits, and a ghost named Anamika makes contact."
        }
    ];
  return (
    
        <div className="card-container">
               
               {films.map((film) => (
                 <Card className='cardd'>
                   <Card.Img
                     variant="right"
                     Img src={film.img}
                   />
                   <Card.Body>
                     <Card.Title>{film.Name}</Card.Title>
                     <Card.Text>
                     {film.detail}
                    
                     </Card.Text>
                    
                   </Card.Body>
                 </Card>
               ))}
               
             </div>
           );
    
}

export default Crddetail2