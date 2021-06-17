import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.weather.date}</ListGroup.Item>
                        <ListGroup.Item>{this.props.weather.description}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default Weather;