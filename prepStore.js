

// store => container with all state
// reducer => dictates store state
// actions => tell our reducer what type of state to return 







import React from 'react'
import { ReactDOM } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux' 

import rootReducer from './reducer'
import addReActor from './actions'


const store = createStore(rootReducer)


// Connecting React to Redux













// export default connect(mapStateToProps, COMP)


// in  (index.js)
// 
//
// 