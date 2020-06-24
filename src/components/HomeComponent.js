import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Home extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img 
              src="https://images.vexels.com/media/users/3/200291/isolated/preview/4b49ff1bd841b34def1c19c783a262fb-anonymous-avatar-woman-long-wild-hair-by-vexels.png"
              alt="Avatar"
              className="avatar"
            />
            <div className="banner-text">
              <h1>Graphic designer</h1>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Home
