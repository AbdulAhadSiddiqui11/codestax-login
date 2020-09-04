import React, { useState } from 'react'
import {
     Card, CardBody,CardHeader, Button,
     Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap';


import db from '../firebase';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const reset = () => {
        setUser('');
        setPassword('');
        toggle();
    }

    const isEmpty = () => {return (user === '' ||  password === '')};

    const register = (e) => {
        e.preventDefault();
        if (!isEmpty()) {
            db.collection('users').add({
                userName : user,
                passWord : password 
            }).then(reset()).catch(() => {alert("Something went wrong! Please try again!");});
        } 
    }
    return (
        <div className='col-sm-7 mx-auto'>
            <Card className='shadow-lg p-3 mb-5 bg-white rounded'>
                <CardHeader tag="h3" className="text-center bg-white text-warning">CodeStax SoC</CardHeader>
                <CardBody>
                    <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" class="card-img-top mb-4" alt="..."/>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control"  placeholder="your email" value = {user} onChange={(e) => setUser(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="password" value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        {/*isEmpty() ? alertFailure() : null*/}
                        <div className="text-center mw-100">
                            <Button className="button btn-danger btn-block rounded-pill rounded-lg" type='submit' disabled={isEmpty()} onClick={register}>Register</Button>
                            <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Registration Successful</ModalHeader>
                                <ModalBody>
                                    Congrats! You've been registered for CSoC. Your account will be activated on www.CodeStax.tech as soon as you clear our assessments. 
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggle}>I'm excited!!</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Nay!</Button>
                                </ModalFooter>
                            </Modal> 
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login
