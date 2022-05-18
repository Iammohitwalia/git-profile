import React from 'react';
import { Container } from 'react-bootstrap'
import { Form } from "react-bootstrap"
import {Button} from "react-bootstrap"

export default function Contact() {
  return (
 <Container className='my-3 p-3' id='Contact'>
     <h1 
       className='text-center'
       >
           Contact Us
       </h1>
     <Form>
  <Form.Group className="mb-3" controlId="Name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Text" placeholder="Enter Name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="Name">
    <Form.Label>Message</Form.Label>
    <Form.Control type="Text" placeholder="Message" />
  </Form.Group>
 
  <Button variant="primary" type="submit" className='btn btn-primary btn-sm'>
    Send Mesaage
  </Button>
</Form>
 </Container>
  )
}
