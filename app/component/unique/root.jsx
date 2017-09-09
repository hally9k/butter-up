import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Root extends Component {
    componentWillMount() {
        this.props.fetchingListings()
    }

    render() {
        return (
            <div>
                <h1>Hello worlds!!!</h1>
            </div>
        )
    }
}

Root.propTypes = {
    fetchingListings: PropTypes.func.isRequired,
}
