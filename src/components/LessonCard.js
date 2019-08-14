import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Resource from './Resource'


class LessonCard extends React.Component{
    
  render(){

  const resource = this.props.resources.map(item => <Resource title={item.title} link={item.link}/>)
  return(
    <Col>
      <Card>
          <Card.Img variant="top" className="stem-eda-gradient"/>
          <div>
            <Card.Title className="trapezoid-text">{this.props.curriculum}</Card.Title>
            <div className="trapezoid"></div>
          </div>
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
              <Card.Text>
                  <Tab.Content>
                  <Tab.Pane eventKey="lessons">
                      <ListGroup variant="flush">
                          <ListGroup.Item><a href={this.props.teacherManual}>Teacher Manual</a></ListGroup.Item>
                          <ListGroup.Item><a href={this.props.studentWorkbook}>Student Workbook</a></ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="info">
                      {this.props.info}
                    </Tab.Pane>
                    <Tab.Pane eventKey="resources">
                      {resource}
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Text>
            </Card.Body>
          </Tab.Container>
        </Card>
      </Col>
    )
}
}


export default LessonCard