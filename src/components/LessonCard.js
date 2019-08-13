import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../App.css';

function LessonCard(props){
    return(
        <Col>
        <Card>
            <Card.Img variant="top" className="stem-eda-gradient" />
            <Tab.Container defaultActiveKey="lessons">

              <Card.Header>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="lessons">Lessons</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="info">Info</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="resources"> Resources</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>

              <Card.Body>
                <Card.Title>{props.content}</Card.Title>
                <Card.Text>
                    <Tab.Content>
                      <Tab.Pane eventKey="lessons">
                      </Tab.Pane>
                      <Tab.Pane eventKey="info">
                        second
                      </Tab.Pane>
                      <Tab.Pane eventKey="resources">
                        third
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>

            </Tab.Container>

    </Card>
    </Col>
    )
}


export default LessonCard