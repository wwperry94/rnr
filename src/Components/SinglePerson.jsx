import React, { Component } from 'react'
import { spinner } from './utilities.jsx'

class SinglePerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        await this.setState({ loading: true });
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    this.setState({
                        person: data,
                        loading: false,
                    })
                } else {
                    this.setState({
                        person: {},
                        loading: false,
                    })
                }
            });
    };
    cardContent = () => {
        if (this.state.loading) {
            return spinner();
        } else {
            return (<div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{this.state.person.name}</h1>
                        <p className="lead">Gender: {this.state.person.gender}</p>
                        <p className="lead">Eyes: {this.state.person.eye_color}</p>
                        <p className="lead">Hair: {this.state.person.hair_color}</p>
                    </div>
                </div>
            </div>
            )
        }
    };
    render() {
        return (
            <>
                {this.cardContent()};
            </>
        )
    }
}
export default SinglePerson