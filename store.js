import { configureStore } from '@reduxjs/toolkit';
import RoundModalReducer from './reducers/RoundModalReducer' ;
import ConfirmModalReducer from './reducers/ConfirmModalReducer';

export const store = configureStore({
  reducer: {
    ...RoundModalReducer.map(),
    ...ConfirmModalReducer.map(),
  },
});
