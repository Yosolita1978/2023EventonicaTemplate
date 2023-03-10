import Card from 'react-bootstrap/Card';

const EventCard = (props) =>{

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.location}
      </Card.Text>
    </Card.Body>
  </Card>
  )}

export default EventCard;