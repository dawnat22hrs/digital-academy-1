import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const URL = 'https://dummyjson.com'
export async function customFetch(url: any, options: any) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
export const api = createApi({
    reducerPath: 'api',
    // tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
        fetchFn: (...args) => customFetch(...args),
        // validateStatus: (response) => {
        //     if (response.status >= 200 && response.status < 300) {
        //       return true; // Ответ успешный
        //     } else {
        //       throw new Error(`HTTP Error ${response.statusText}`); // Генерируем ошибку
        //     }
        //   },
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