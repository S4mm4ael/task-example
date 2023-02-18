import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Books } from '../../shared/types.books'

const baseUrl='https://strapi.cleverland.by'
const booksUrl='/api/books'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<Books, string>({
      query: () => booksUrl,
    }),
    getBook: builder.query<Books, string>({
      query: (id) =>`${booksUrl}/${id}` ,
    }),
  }),
})

export const { useGetAllBooksQuery, useGetBookQuery } = booksApi
