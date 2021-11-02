import { Container, Navbar } from 'react-bootstrap';

export const HeaderBar = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand
            href='/'
            className='text-justify-center font-weight-bold text-white'
          >
            REDUX EXAMPLE
          </Navbar.Brand>
        </Container>
      </Navbar>
      ;
    </header>
  );
};
