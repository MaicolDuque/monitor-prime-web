import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: () => ({}),
})

export default apiSlice.reducer

