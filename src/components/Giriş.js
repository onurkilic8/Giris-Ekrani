import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

export  class Giriş extends Component {
    render() {
        return (
            <div className="mt-5 d-flex justify-content-center">
               <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>E-posta adresi</Form.Label>
    <Form.Control type="email" placeholder="E-posta adresinizi girmelisiniz.
" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Şifre</Form.Label>
    <Form.Control type="password" placeholder="Şifre" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Şifreyi hatırla" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Giriş Yap
  </Button>
</Form>
                
            </div>
        )
    }
}
