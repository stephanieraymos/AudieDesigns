import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

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
        <div>
          <h1>This is Adobe Illustrator and Adobe Photoshop</h1>
        </div>
      )
    }else if (this.state.activeTab === 1) {
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

        <section className="projects-grid">
          {this.toggleCatergories()}
        </section>
      </div>
    )
  }
}

export default Projects