import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="../src/img/avatar-2.png"
              alt="Avatar"
              className="avatar"
              style={{width: 100}}
            />
            <div className="banner-text">
              <h1>Graphic designer</h1>
              <hr />
              <p>
                Adobe Illustrator | Adobe Photoshop | Blender
              </p>
              <div className="social-links">
                {/* Linked in */}
                <a href="https://www.linkedin.com/in/audrianna-raymos-18741619a/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/audiedesigns/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/Audiedesigns/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* Youtube */}
                <a href="youtube.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Home
