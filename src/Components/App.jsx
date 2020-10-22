import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Films from './Films';
import People from './People';
import SingleFilm from "./SingleFilm";
import SinglePerson from "./SinglePerson";
import * as logo from './assets/logo.png'

export default class App extends Component {
    constructor() {
        super()
        this.state = {


        };
    };
    fetchAPI = (path) => {
        fetch(path)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);

            });
    };
    render() {
        return (
            <Router>
                    <Fragment>
                        <div class="shadow p-3 mb-5 bg-white rounded">
                            <nav className="navbar navbar-dark bg-dark">
                                <Link to="/films" className="btn btn-secondary" style={{ marginLeft: "2em", marginTop: "1em", marginBottom: "1em", fontSize: "25px", borderRadius: "20px" }}>Go to Films</Link>
                                <Link to="/People" className="btn btn-secondary" style={{ marginRight: "2em", marginTop: "1em", marginBottom: "1em", fontSize: "25px", borderRadius: "20px" }}>Go to People</Link>
                            </nav>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={logo} alt={"this is the logo"} ></img>
                        </div>
                        <br />
                        <Switch>
                            <Route path="/films/:id" component={SingleFilm} />
                            <Route path="/people/:id" component={SinglePerson} />
                            <Route path="/films" component={Films} />
                            <Route path="/people" component={People} />

                        </Switch>
                    </Fragment>
            </Router>
        )



    };
};