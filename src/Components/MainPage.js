import React from 'react';
import { Row, Col } from 'reactstrap';
import Header from './Header'

function MainPage() {
  return (
    <div>
        <Header/>
       <div className = "container1" >
        <Row>
            <Col lg="3">
                <div>
                    Filters
                </div>
            </Col>
            <Col lg="6">Map</Col>
            <Col lg="3">List</Col>
        </Row>
    </div> 
    </div>
  );
}

export default MainPage;
