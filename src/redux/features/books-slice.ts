import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Books } from '../../shared/types.books'

const baseUrl='strapi.cleverland.by/'
const booksUrl='api/books'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<Books, string>({
      query: () => booksUrl,
    }),
  }),
})

export const { useGetAllBooksQuery } = booksApi
