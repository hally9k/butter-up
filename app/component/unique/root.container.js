import { connect } from 'react-redux'
import { updateComponentState } from 'duck/meta'
import metaSelector from 'selector/meta'
import { fetchingListings } from 'duck/listing'
import listingSelector from 'selector/listing'
import Root from './root'

const mapStateToProps = state => ({
    meta: metaSelector(state, 'root'),
    listings: listingSelector(state),
})

const mapDispatchToProps = dispatch => ({
    updateComponentState: value =>
        dispatch(updateComponentState({ key: 'root', value })),
    fetchingListings: () => dispatch(fetchingListings()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
