import { configureStore } from '@reduxjs/toolkit';
// import { items } from './reducer';
import contacts from './reducers';

export const store = configureStore({
  reducer: contacts,
});

// export const store = configureStore({
//     reducer: {
//       contacts: items,
//     },
//   });
