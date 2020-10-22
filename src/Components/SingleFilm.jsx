import React, { Component } from 'react'
import { spinner } from './utilities.jsx'

class SingleFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {},
            loading: false,
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        await this.setState({ loading: true });
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    this.setState({
                        film: data,
                        loading: false,
                    })
                } else {
                    this.setState({
                        film: {},
                        loading: false,
                    })
                }
            });
    }
    cardContent = () => {
        if (this.state.loading) {
            return spinner();
        } else {
            return (<div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{this.state.film.title}</h1>
                        <p className="lead">{this.state.film.description}</p>
                    </div>
                </div>
            </div>
            )
        }
    }
    render() {
        return (
            <>
                {this.cardContent()};
            </>
        )
    }
}

export default SingleFilm