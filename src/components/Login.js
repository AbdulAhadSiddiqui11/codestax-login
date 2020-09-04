import React, { useState } from 'react'
import {
     Card, CardBody,
     CardHeader, CardFooter, Button
  } from 'reactstrap';
import db from '../firebase';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const reset = () => {
        setUser('');
        setPassword('');
    }

    const alertFailure = () => {
        return (
            <div className="alert alert-danger" role="alert">
                Email or password cannot be empty!
            </div>
        );
    }

    const isEmpty = () => {return (user === '' ||  password === '')};

    const register = (e) => {
        e.preventDefault();
        if (!isEmpty()) {
            db.collection('users').add({
                userName : user,
                passWord : password 
            }).then(reset()).catch(() => {alert("Something went wrong! Please try again!");});
        } else {
            alertFailure();
        }
    }
    return (
        <div className='col-sm-7 mx-auto my-auto'>
            <Card className='shadow-lg p-3 mb-5 bg-white rounded my-auto'>
                <CardHeader tag="h3">Featured</CardHeader>
                <CardBody>
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
                        </div>
                    </form>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
        </div>
    )
}

export default Login
