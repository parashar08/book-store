import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getbaseURL from '../../../utils/baseURL';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getbaseURL()}/api/books/`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    },
});

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        // in get request we use query
        fetchAllBooks: builder.query({
            query: () => '/',
            providesTags: ['Books'],
        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: 'Books', id }],
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/create-book',
                method: 'POST',
                body: newBook,
            }),
            invalidatesTags: ['Books'],
        }),
        updateBook: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `update-book/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Books'],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
        }),
    }),
});

export default booksApi;
export const {
    useFetchAllBooksQuery,
    useFetchBookByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = booksApi;
