import React from 'react';
import Button from 'react-bootstrap/Button';


export default class Resource extends React.Component {

    render(){
        return(
            <Button variant="outline-dark" size="sm" className="m-1" href={this.props.link}>{this.props.title}</Button>
        )
    }
} 