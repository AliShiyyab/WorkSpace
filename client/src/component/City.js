import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class City extends React.Component {
    render() {
      return (
        <div>
          {this.props.displayResults &&
            <div>
              <Card className="w-responsive text-center mx-auto p-3 mt-2" style={{width:'50%',height:'50%'}} >
                <Card.Header as="h4">{this.props.city}</Card.Header>
                <ListGroup variant="flush">
                 <ListGroup.Item>{this.props.latitude}</ListGroup.Item>
                 <ListGroup.Item>{this.props.longitude}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Img src={this.props.mapLink} />
                </Card.Body>
              </Card>
            </div>
          }
        </div>
      );
    }
  }
  
  export default City;