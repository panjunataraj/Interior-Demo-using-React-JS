import React from 'react'
import { Link, Routes,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Team from './Pages/Team';
import Work from './Pages/Work';
import logo from './image/logo.png'


const App = () => {
  return (
    <div>
      <Navbar expand='lg' className ='fixed-top bg-light shadow'>
        <Container>
            <Navbar.Brand>
                <Link to="/" className='navbar-brand text-success fw-semibold'>
                <img src={logo} alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls ='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto justify-content-end w-100'>
                    <Nav.Link href ='/' className='active text-uppercase'>Home</Nav.Link>
                    <Nav.Link href ='/Blog' className='active text-uppercase'>Blog</Nav.Link>
                    <Nav.Link href ='/Team' className='active text-uppercase'>Team</Nav.Link>
                    <Nav.Link href ='/Work' className='active text-uppercase'>Work</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/Work' element={<Work />} />
        </Routes>

        <footer className='fixed-bottom bg-warnig'>
            <p className='p-3 m-0 text-center'>copy right @ made by Panju </p>
        </footer>

    </div>
  )
}

export default App
