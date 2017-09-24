import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js'
import {Jumbotron, Button, Row, Col, Container} from 'react-bootstrap'

class App extends Component {
  render() {

    const jumbotronInstance = (
      <Jumbotron className="jumbotron">
        <Row >
          <Col  md={6}>
            <h1> Capture <span className="em-text">Life </span> </h1>
            <p> A fun and easy way to capture moments you live for</p>
            <a href="#"><img className="app-btn" src="img/app-store-badge.svg" /> </a>
            <a href="#"><img className="app-btn" src="img/google-play-badge.svg" /> </a>
          </Col>
          <Col className="jumbotron-col" md={6}>
            <img src="img/phone.jpg" />
          </Col>
        </Row>
      </Jumbotron>
    );

    return (
      <div className="App">
        <NavigationBar />
        {jumbotronInstance}
      </div>
    );
  }
}

export default App;