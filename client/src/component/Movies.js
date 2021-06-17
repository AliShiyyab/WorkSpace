import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Movies extends React.Component {
    render() {
        //   let forecastData = this.props.weather;
        return (
            <div>
                <Card >
                    <ListGroup>
                        <ListGroup.Item>{this.props.moives.title}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.overview}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.average_votes}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.total_votes}</ListGroup.Item>
                        <ListGroup.Item><img src={this.props.image_url} alt='IMG'></img></ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.popularity}</ListGroup.Item>
                        <ListGroup.Item>{this.props.moives.released_on}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default Movies;