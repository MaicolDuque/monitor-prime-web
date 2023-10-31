import { apiSlice } from "@/store/api/api.slice";
import { AuthLogin, AuthLoginResponse } from "@/store/api/auth/auth.model";

export const authSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation<AuthLoginResponse, AuthLogin>({
      query(body) {
        return {
          url: 'auth/login',
          method: 'POST',
          body
        }
      }
    })
  })
})


export const { useLoginMutation } = authSlice
