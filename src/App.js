import React from 'react';
import Login from './components/Login';
import './App.css';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
     <div className="App">
        <h1 className="mx-auto text-primary" style={{width : '200px'}}> Hello world! </h1>
        <Login/> 
      </div>
    </Container>
  );
}

export default App;
