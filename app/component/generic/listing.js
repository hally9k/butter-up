import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Root extends Component {
    render() {
        const { id, name, image } = this.props.listing

        return (
            <div className="listing">
                <h1>{name}</h1>
                <p>ID: {id}</p>
                <img alt={name} src={image} />
            </div>
        )
    }
}

Root.propTypes = {
    listing: PropTypes.object.isRequired,
}
