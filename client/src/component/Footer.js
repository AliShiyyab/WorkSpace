import React from 'react';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {
    render() {
      return (
        <div>
          <Card>
            <Card.Body>
              <p>&copy; 2021 Ali Akef</p>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
  export default Footer;