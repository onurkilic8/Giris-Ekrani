import React, { Component } from 'react';
import { IconName } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

export class Navigation extends Component
{
    render()
    {
        return(
            <Navbar bg="dark" variant ={"dark"} expand="lg">
  <Navbar.Brand href="#"></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">

    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Ana Sayfa</Nav.Link>
      <Nav.Link href="/Giriş">Giriş Yap</Nav.Link>
      <NavDropdown title="Kayıt" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/Kayıt">Ürün Kayıt</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/GrupKayıt">Ürün Grubu Kayıt</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Güncelleme" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/Güncelleme">Ürün Güncelleme</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/GrupGüncelleme">Ürün Grubu Güncelleme</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Listeleme" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/GrupListeleme">Ürün Grubu Listeleme</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/GrupSilme">Ürün Grubu Silme</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/Silme">Ürün Silme</Nav.Link>      
    </Nav>

    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Sanal Market'te Ara!"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Ara</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        )
    }
}