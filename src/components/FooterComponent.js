import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/directory'>Directory</Link></li>
              <li><Link to='/aboutus'>About</Link></li>
              <li><Link to='/contactus'>Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/audiedesigns/"><i className="fa fa-instagram" /></a>{' '}
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}

            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> audiedesigns@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;