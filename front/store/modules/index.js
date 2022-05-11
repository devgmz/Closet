import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';

const reducer = ( state, action ) => {
  if ( action.type === HYDRATE ) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers( {
    user,
    post,
  } )( state, action );
};

export default reducer;