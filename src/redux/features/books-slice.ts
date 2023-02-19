import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Book, Category } from '../../shared/types.books'

const baseUrl='https://strapi.cleverland.by'
const booksUrl='/api/books'
const catUrl='/api/categories'

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
    getCategories
    : builder.query<Category[], string>({
      query: () => catUrl ,
    }),
  }),
})

export const { useGetAllBooksQuery, useGetBookQuery, useGetCategoriesQuery } = booksApi
