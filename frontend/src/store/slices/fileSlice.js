import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000/';

const fileSlice = createApi({
  reducerPath: 'fileApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json")
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAllFiles: builder.query({
      query: () => ({
        url: `files/data`,
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError
      }),
    }),
  })
});

export default fileSlice;

export const { useGetAllFilesQuery } = fileSlice;