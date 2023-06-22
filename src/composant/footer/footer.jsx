import React from 'react';
import '../footer/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
        <img src={process.env.PUBLIC_URL + '/kasa/footer_desktop.png'} alt="Footer" className='footer-img'/>
        </div>
    </footer>
  );
};

export default Footer;
