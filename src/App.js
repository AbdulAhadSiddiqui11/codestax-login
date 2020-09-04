import React from 'react';
import Login from './components/Login';
import './App.css';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
     <div className="App">
        <Login className="row"/> 
    </div>  
    </Container>
  );
}

export default App;
