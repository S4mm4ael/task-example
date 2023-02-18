import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Book } from '../../shared/types.books'

const baseUrl='https://strapi.cleverland.by'
const booksUrl='/api/books'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<Book[], string>({
      query: () => booksUrl,
    }),
    getBook: builder.query<Book, string>({
      query: (id) =>`${booksUrl}/${id}` ,
    }),
  }),
})

export const { useGetAllBooksQuery, useGetBookQuery } = booksApi
