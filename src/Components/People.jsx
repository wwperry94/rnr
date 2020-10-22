import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { spinner } from './utilities.jsx'

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArr: [],
            loading: false,

        }

    }


    componentDidMount() {
        this.fetchData();
        console.log(this.props.match);
    };


    fetchData = async () => {
        await this.setState({ loading: true });
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    this.setState({
                        dataArr: data,
                        loading: false,
                    })
                } else {
                    this.setState({
                        dataArr: [],
                        loading: false,
                    })
                }
            });
    }
    cardContent = () => {
        if (this.state.loading) {
            return spinner();
        } else {
           return this.state.dataArr.map((data, idx) => {
                return (<div key={idx} className="shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.age}</p>
                            <Link to={`/people/${data.id}`} className="btn btn-secondary">Bio</Link>
                        </div>
                    </div>
                </div>
                )
            }
            )
        }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <h1 style={{ margin: "0 auto", color: "white", fontFamily: "fantasy" }}>People</h1>
                </nav>
                {this.cardContent()}
            </>
        )
    }
}


export default People