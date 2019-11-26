import React, { Component } from "react";
import QuestionList from './QuestionList'
import Navbar from 'react-bootstrap/Navbar'
import { Form, FormControl, Button, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Qnav extends Component {

    render() {
        return (
          
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Link exact to="/"><Navbar.Brand href="/">ProjectQ</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Q" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                        <Link exact to="/questions"><Button variant="outline-primary">Ask Q</Button></Link>
                    </Form>
                </Navbar>
            </Router>
        )
    }
}

export default Qnav;
