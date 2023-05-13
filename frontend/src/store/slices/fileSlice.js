import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.API_URL

const fileSlice = createApi({
  reducerPath: 'fileApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAllFiles: builder.query({
      query: () => ({
        url: 'files/data',
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError
      })
    }),

    getFilesByName: builder.query({
      query: ({ filename }) => `files/data?fileName=${filename}`
    })
  })
})

export default fileSlice

export const { useGetAllFilesQuery, useGetFilesByNameQuery } = fileSlice
