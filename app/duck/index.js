import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux-immutablejs'

import meta from 'duck/meta'
import listing, { epics as listingEpics } from 'duck/listing'

// Data Actions
export const PROCESSED = 'data/PROCESSED'
export const processed = payload => ({ type: PROCESSED, payload })

// Root Reducer
export const reducers = combineReducers({
    data: combineReducers({
        listing,
    }),
    meta,
})

// Root Epic
export const epics = combineEpics(...Object.values(listingEpics))
