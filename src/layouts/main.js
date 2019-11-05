import React from 'react';
import './main.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Main (props) {
  return (
    <div className="main-layout">
      <Header />

      <div className="content">
        {props.children}
      </div>

      <Footer />
    </div>
  );
}

export default Main;
