import React from 'react'
import { Card } from 'react-bootstrap';
import "./Crddetail.css";

function Crddetail() {
    const films = [
        {
          Name: "Pathaan",
          img: "https://m.media-amazon.com/images/M/MV5BZGI3NzQ5NTctZWQ4Ni00ZGJkLTg5N2UtYTBjNzcyN2EyOTM0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
          detail: "An Indian spy battles against the leader of a gang of mercenaries who have a heinous plot for his homeland."
        },
         
      ];
      return (
        

        <div className="card-container">
               
          {films.map((film) => (
            <Card className='cardd'>
              
              <Card.Body>
                <Card.Title>{film.Name}</Card.Title>
                <Card.Text>
                {film.detail}
               
                </Card.Text>
               
              </Card.Body>
              <Card.Img
                variant="right"
                Img src={film.img}
              />
            </Card>
          ))}
          
        </div>
      );
    }

export default Crddetail