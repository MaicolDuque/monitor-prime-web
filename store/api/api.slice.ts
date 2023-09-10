import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// process.env.NEXT_PUBLIC_API_URL

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos'
    })
  }),
})

export const { useGetTodosQuery } = apiSlice

export default apiSlice.reducer

