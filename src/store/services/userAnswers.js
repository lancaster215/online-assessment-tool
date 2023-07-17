import { appSlice } from '../appSlice';

const userAnswersSlice = appSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUserAnswer: builder.mutation({
      query: ({ name, q1, q2, q3, q4, q5 }) => ({
        url: `${window.location.origin}/api/answers`,
        method: 'POST',
        body: {
            name,
            q1,
            q2,
            q3,
            q4,
            q5,
        },
      }),
    }),
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
    getAllUserAnswer: builder.query({
        query: () => ({
            url: `${window.location.origin}/api/answers`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
    }),
  }),
});

export const { useAddUserAnswerMutation, useGetUserAnswerMutation, useGetAllUserAnswerQuery } = userAnswersSlice;