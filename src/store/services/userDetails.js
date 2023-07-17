import { appSlice } from '../appSlice';

const userDetailsSlice = appSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUserDetails: builder.mutation({
      query: ({ fullName, age, civilStatus, address, contactNumber, userId }) => ({
        url: `${window.location.origin}/api/details`,
        method: 'POST',
        body: {
          fullName,
          age,
          civilStatus,
          address,
          contactNumber,
          userId,
        },
      }),
    }),
    getUserDetails: builder.mutation({
      query: ({ name }) => ({
        url: `${window.location.origin}/api/details/`,
        method: 'GET',
        params: {
          name,
        },
        headers: {
          'Content-Types': 'application/json',
        }
      })
    })
  }),
});

export const { useAddUserDetailsMutation, useGetUserDetailsMutation } = userDetailsSlice;