import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import reducer from "./modules";

const rootStore = () => configureStore( {
  reducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( logger ),
  devTools: process.env.NODE_ENV !== 'production',
} );

export const wrapper = createWrapper( rootStore, {
  debug: process.env.NODE_ENV !== 'production',
} );

