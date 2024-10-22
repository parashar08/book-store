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
        fetchAllBooks: builder.query({
            query: () => '/',
            providesTags: ['Books'],
        }),
    }),
});

export default booksApi;
export const { useFetchAllBooksQuery } = booksApi;
