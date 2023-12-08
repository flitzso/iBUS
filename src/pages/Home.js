import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar';
import PromoDestino from '../components/PromoDestino';
import ViagemForm from '../components/ViagemForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Container>
      <NavBar />
      <PromoDestino />
      <ViagemForm />
      <Footer />
    </Container>
  );
};

export default Home;

