import React, { StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';

// import apolloClient from '../../apolloClient';
// import { createReduxStore } from '../../store';
// import App from '../App';

// const reduxStore = createReduxStore();

{
  /* <App apolloClient={apolloClient} reduxStore={reduxStore} /> */
}
export const Root = () => (
  <StrictMode>
    <App reduxStore={reduxStore} />
  </StrictMode>
);

export default hot(Root);
