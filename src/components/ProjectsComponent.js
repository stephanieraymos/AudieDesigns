import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCatergories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://snobmonkey.com/wp-content/uploads/2019/04/adobe-blog-banner-1-1024x585-1024x585.jpg) center / cover' }}></CardTitle>
            <CardText>
            <h4 style={{ textAlign: 'center', color: 'black', marginTop: 0 }}>Adobe Project #1</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border style={{ textAlign: 'center' }}>
              <Button colored>Link to all images</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://snobmonkey.com/wp-content/uploads/2019/04/adobe-blog-banner-1-1024x585-1024x585.jpg) center / cover' }}></CardTitle>
            <CardText>
            <h4 style={{ textAlign: 'center', color: 'black', marginTop: 0 }}>Adobe Projects #2</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border style={{ textAlign: 'center' }}>
              <Button colored>Link to all images</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://snobmonkey.com/wp-content/uploads/2019/04/adobe-blog-banner-1-1024x585-1024x585.jpg) center / cover' }}></CardTitle>
            <CardText>
            <h4 style={{ textAlign: 'center', color: 'black', marginTop: 0 }}>Adobe Projects #3</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border style={{ textAlign: 'center' }}>
              <Button colored>Link to all images</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Blender</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="catergory-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple>
          <Tab>Adobe Illustrator | Adobe Photoshop</Tab>
          <Tab>Blender</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCatergories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects