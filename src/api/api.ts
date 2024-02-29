import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const URL = 'https://dummyjson.com'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
        validateStatus: (response) => {
            if (response.status >= 200 && response.status < 300) {
              return true
            } else {
              throw new Error(`HTTP Error ${response.statusText}`)
            }
          },
    }),
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/recipes/meal-type/snack'
        }),
        getComments: builder.query({
            query: () => '/comments'
        }),
        getCommentByPostId: builder.query({
            query: (id: number) => `/comments/post/${id}`
        }),
        getPosts: builder.query({
            query: (body: { limitValue: number, skipValue: number}) => `/posts?limit=${body.limitValue}&skip=${body.skipValue}&select=title,reactions,userId,body,tags`
        }),
        getSinglePost: builder.query({
            query: (id: number | string) => `/posts/${id}`
        }),
        getSingleUser: builder.query({
            query: (id: number) => `/users/${id}`
        }),
        createComment: builder.mutation({
            query: comment => ({
                body: comment,
                url: '/comments/add',
                method: 'POST',
            })
        })
    })
})

export const {
    useGetRecipesQuery,
    useGetCommentsQuery,
    useGetPostsQuery,
    useGetCommentByPostIdQuery,
    useGetSinglePostQuery ,
    useGetSingleUserQuery,
    useCreateCommentMutation,
} = api