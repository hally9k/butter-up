import { createSelector } from 'reselect'

import selectData from 'selector/data'

export default createSelector(
    [selectData],
    data => (data.get('listing') ? data.get('listing').toJS() : {}),
)
