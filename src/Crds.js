import React from 'react'
import { Card } from 'react-bootstrap';
import "./Crds.css";

function Crds() {
    const persons = [
        {
          Name: "John Wick",
          
          img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6aec1a106199299.5f8a325998dca.jpg",
        },
        {
          Name: "Pathaan",
          img: "https://m.media-amazon.com/images/M/MV5BZGI3NzQ5NTctZWQ4Ni00ZGJkLTg5N2UtYTBjNzcyN2EyOTM0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        },
        {
          Name: "PS-2",
          
          img:"https://m.media-amazon.com/images/M/MV5BNjk0MGYzYTUtNTkzYy00ODZlLTkyOTktNDJhNGJkN2NmYzMzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",    
        },
        {
            Name: "Romancham",
            img: "https://assets.voxcinemas.com/posters/P_HO00009659.jpg",
        }  
      ];
      return (
        <div class="card-header-custom">
          <a href="#see more">See More</a>

        <div className="card-container">
               
          {persons.map((person) => (
            <Card className='crd1'>
              <Card.Img
                variant="top"
                Img src={person.img}
              />
              <Card.Body>
                <Card.Title>{person.Name}</Card.Title>
                <Card.Text>
                
               
                </Card.Text>
               
              </Card.Body>
            </Card>
          ))}
          </div>
        </div>
      );
    }

export default Crds