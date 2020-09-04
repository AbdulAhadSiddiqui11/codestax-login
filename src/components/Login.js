import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardHeader, CardFooter, Button
  } from 'reactstrap';

const Login = () => {
    return (
        <div className="my-auto">
            <Card className='shadow-lg p-3 mb-5 bg-white rounded my-auto'>
                <CardHeader tag="h3">Featured</CardHeader>
                <CardBody>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control"  placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Passoword</label>
                    <input type="password" className="form-control" placeholder="password"/>
                </div>
                <Button className="button btn-danger">Click me!</Button>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
        </div>
    )
}

export default Login
