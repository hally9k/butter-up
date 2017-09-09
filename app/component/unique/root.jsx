import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Listing from 'component/generic/listing'

export default class Root extends Component {
    componentWillMount() {
        this.props.fetchingListings()
    }

    renderListing = listing => <Listing key={listing.id} listing={listing} />

    render() {
        const { listings } = this.props

        return (
            <div className="listings">
                {listings && listings.map(this.renderListing)}
            </div>
        )
    }
}

Root.propTypes = {
    fetchingListings: PropTypes.func.isRequired,
    listings: PropTypes.array,
}
