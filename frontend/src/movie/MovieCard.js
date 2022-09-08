import React, { useContext  } from 'react';
import {CardBody, CardTitle, Card, CardImg} from 'reactstrap';
import UserContext from '../context/UserContext';


function MovieCard({title, poster_path, overview}) {
  const { currentUser } = useContext(UserContext);
  const imgPath = `https://image.tmdb.org/t/p/w300/${poster_path}`

  return (
    <div>
      <Card
      className="my-2"
      color="dark"
      inverse
      style={{
      width: '18rem',
      }}
      >
        <CardBody className='card-body opacity-0'>
          <CardImg src={imgPath} >
          </CardImg>
          <CardTitle tag="h4">
            {title}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;