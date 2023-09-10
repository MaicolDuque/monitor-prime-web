import { ThunkAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { apiSlice } from '@/store/api/api.slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';
import { themeConfigSlice } from '@/store/slices/themeConfigSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const makeStore = () =>
  configureStore({
    reducer: {
      [themeConfigSlice.name]: themeConfigSlice.reducer,
      // [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools: true,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(makeStore().dispatch);

export const wrapper = createWrapper<AppStore>(makeStore); // This wrapper eliminates the need for a Provider that we would use in a normal React application.

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
