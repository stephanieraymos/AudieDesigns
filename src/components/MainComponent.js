import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import ProjectsComponent from './ProjectsComponent';

const MainComponent = () => (
    <Switch>
        <Route exact path = "/" component = {HomeComponent} />
        <Route path = "/about" component = {AboutComponent} />
        <Route path = "/contact" component = {ContactComponent} />
        <Route path = "/projects" component = {ProjectsComponent} />

    </Switch>
)

export default MainComponent;