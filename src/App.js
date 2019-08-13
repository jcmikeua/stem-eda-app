import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import stemEdaData from './data/stem-eda-data';
import ModuleTheme from './components/ModuleTheme';


class App extends React.Component {
  
  render() {

    const stemEdaThreads = stemEdaData.map((item) => <ModuleTheme threadname={item.thread} content={item.content}/>)

    return (
      <Container>
        <Image src="../images/STEM EDA Jumbotron-02.png" rounded fluid />
        {stemEdaThreads}
      </Container>
    )
  } 
}

export default App;
