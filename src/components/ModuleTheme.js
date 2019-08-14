import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import '../App.css';
import LessonCard from './LessonCard';


class ModuleTheme extends React.Component{

    

    render(){
    
      const content = this.props.content.map(item => (
      <LessonCard 
        curriculum = {item.curriculum}
        teacherManual={item.teacherManual} 
        studentWorkbook={item.studentManual}
        info = {item.info}
        resources = {item.resources}

      />))
      
      return(
          <Fragment>
          <h4>{this.props.threadname}</h4>
          <Row>
            {content}
          </Row>
          </Fragment>
    )
  }
}

export default ModuleTheme;

