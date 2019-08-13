import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import '../App.css';


function ModuleTheme(props){

    return(
        <Fragment>
        <h4>{props.threadname}</h4>
        <Row>


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
                <Card.Title>{props.content[0].curriculum}</Card.Title>
                <Card.Text>
                    <Tab.Content>
                    <Tab.Pane eventKey="lessons">
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href={props.content[0].teacherManual}>Teacher Manual</a></ListGroup.Item>
                            <ListGroup.Item><a href={props.content[0].studentManual}>Student Workbook</a></ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                      <Tab.Pane eventKey="info">
                        {props.content[0].info}
                      </Tab.Pane>
                      <Tab.Pane eventKey="resources">
                        third
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Text>
              </Card.Body>
            </Tab.Container>

        </Card>
        </Col>

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
                <Card.Title>{props.content[1].curriculum}</Card.Title>
                <Card.Text>
                    <Tab.Content>
                    <Tab.Pane eventKey="lessons">
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href={props.content[1].teacherManual}>Teacher Manual</a></ListGroup.Item>
                            <ListGroup.Item><a href={props.content[1].studentManual}>Student Workbook</a></ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                      <Tab.Pane eventKey="info">
                        {props.content[1].info}
                      </Tab.Pane>
                      <Tab.Pane eventKey="resources">
                        third
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Text>
              </Card.Body>
            </Tab.Container>

        </Card>
        </Col>

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
                <Card.Title>{props.content[2].curriculum}</Card.Title>
                <Card.Text>
                    <Tab.Content>
                      <Tab.Pane eventKey="lessons">
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href={props.content[2].teacherManual}>Teacher Manual</a></ListGroup.Item>
                            <ListGroup.Item><a href={props.content[2].studentManual}>Student Workbook</a></ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                      <Tab.Pane eventKey="info">
                        {props.content[2].info}
                      </Tab.Pane>
                      <Tab.Pane eventKey="resources">
                        third
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Text>
              </Card.Body>

            </Tab.Container>

        </Card>
        </Col>

        </Row>
        </Fragment>
    )
}

export default ModuleTheme;

