import { appSlice } from '../appSlice';

const userAnswersSlice = appSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserAnswer: builder.mutation({
        query: ({ name }) => ({
            url: `${window.location.origin}/api/answer`,
            method: 'GET',
            params: {
                name,
            },
            headers: {
                "Content-Type": "application/json",
            }
        })
    }),
  }),
});

export const { useGetUserAnswerMutation } = userAnswersSlice;