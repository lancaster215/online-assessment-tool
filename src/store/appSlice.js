import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/prefer-default-export
export const appSlice = createApi({
  reducerPath: 'app',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['Questions'],
  endpoints: () => ({}),
});
