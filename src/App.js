import React, {Fragment} from 'react';
import Image from 'react-bootstrap/Image';
import stemEdaData from './data/stem-eda-data';
import ModuleTheme from './components/ModuleTheme';


class App extends React.Component {
  
  render() {

    const stemEdaThreads = stemEdaData.map((item) => <ModuleTheme threadname={item.thread} content={item.content}/>)

    return (
      <Fragment>
        <Image src="../images/STEM EDA Jumbotron-02.png" rounded fluid />
        {stemEdaThreads}
      </Fragment>
      
    )
  } 
}

export default App;
