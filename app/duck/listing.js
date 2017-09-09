import { normalize } from 'normalizr'
import { processed, PROCESSED } from 'duck'
import { listingSchema } from 'schema'
import { fromJS, Map } from 'immutable'
// import Butter from 'buttercms'

// const butter = Butter('8f96a1c3fddcf281abf09bf9ef53ea250c579440')

// Actions
const FETCHING = 'listings/FETCHING'
const RECEIVED = 'listings/RECEIVED'

export const fetchingListings = payload => ({ type: FETCHING, payload })
const receivedListings = payload => ({ type: RECEIVED, payload })

// Reducers
const INITIAL_STATE = Map()

export default (state = INITIAL_STATE, action) => {
    if (!action) return state
    switch (action.type) {
        case PROCESSED:
            return state.merge(fromJS(action.payload.entities.listing))
        default:
            return state
    }
}

// Epics
// This hits the Harcourts api but theuy need to add cors support for us to hit it from our domain.
export const fetchingListingsEpic = action$ =>
    action$.ofType(FETCHING).mergeMap(({ payload: id }) =>
        fetch('http://localhost:3001/listing', {
            mode: 'cors',
        })
            .then(listings => listings.json())
            .then(listings => {
                return [receivedListings(listings)]
            }),
    )

// export const fetchingListingsEpic = action$ =>
//     action$.ofType(FETCHING).mergeMap(({ payload: id }) =>
//         new Promise(resolve => resolve(listingXML)).then(listings => {
//             const listingsJson = parseXml(listings)
//
//             return [receivedListings(listingsJson)]
//         }),
//     )

// export const fetchingListingsEpic = action$ =>
//     action$.ofType(FETCHING).mergeMap(({ payload: id }) =>
//         butter.content.retrieve(['listing']).then(res => {
//             return [receivedListings(res.data.data.listing)]
//         }),
//     )

export const receivedListingsEpic = action$ =>
    action$.ofType(RECEIVED).mergeMap(({ payload }) => {
        return [processed(normalize(payload, [listingSchema]))]
    })

export const epics = {
    fetchingListingsEpic,
    receivedListingsEpic,
}
